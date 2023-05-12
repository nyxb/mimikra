import { transform } from 'esbuild'
import dynot from 'dynot'

import type { Loader, LoaderResult } from '../loader'

const DECLARATION_RE = /\.d\.[cm]?ts$/
const CM_LETTER_RE = /(?<=\.)(c|m)(?=[jt]s$)/

export const jsLoader: Loader = async (input, { options }) => {
   if (
      !['.ts', '.js', '.cjs', '.mjs', '.jsx', '.tsx'].includes(input.extension)
    || DECLARATION_RE.test(input.path)
   )
      return

   const output: LoaderResult = []

   let contents = await input.getContents()

   // declaration
   if (options.declaration && !input.srcPath?.match(DECLARATION_RE)) {
      const cm = input.srcPath?.match(CM_LETTER_RE)?.[0] || ''
      const extension = `.d.${cm}ts`
      output.push({
         contents,
         srcPath: input.srcPath,
         path: input.path,
         extension,
         declaration: true,
      })
   }

   // typescript => js
   if (['.ts', '.tsx'].includes(input.extension)) {
      const loader = input.extension === '.tsx' ? 'tsx' : 'ts'
      contents = await transform(contents, { loader }).then(r => r.code)
   }

   // jsx => js
   if (input.extension === '.jsx')
      contents = await transform(contents, { loader: 'jsx' }).then(r => r.code)

   // esm => cjs
   const isCjs = options.format === 'cjs'
   if (isCjs) {
      contents = dynot(input.path)
         .transform({ source: contents, retainLines: false })
         .replace(/^exports.default = /gm, 'module.exports = ')
   }

   let extension = isCjs ? '.js' : '.mjs'
   if (options.ext)
      extension = options.ext.startsWith('.') ? options.ext : `.${options.ext}`

   output.push({
      contents,
      path: input.path,
      extension,
   })

   return output
}
