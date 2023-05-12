import { describe, expect, it } from 'vitest'
import { createLoader } from '../src/loader'
import { jsLoader } from '../src/loaders'

describe('mimikra', () => {
   describe('JSX and TSX support', () => {
      it('jsLoader supports jsx files', async () => {
         const { loadFile } = createLoader({
            loaders: [jsLoader],
         })
         const results = await loadFile({
            extension: '.jsx',
            getContents: () => 'const element = <div>Hello JSX</div>',
            path: 'test.jsx',
         })
         expect(results).toEqual(
            expect.arrayContaining([
               expect.objectContaining({
                  contents: expect.stringMatching(/const element = \/\* @__PURE__ \*\/ React\.createElement\("div", null, "Hello JSX"\);/),
                  extension: '.mjs',
               }),
            ]),
         )
      })

      it('jsLoader supports tsx files', async () => {
         const { loadFile } = createLoader({
            loaders: [jsLoader],
         })
         const results = await loadFile({
            extension: '.tsx',
            getContents: () => `import React from 'react'

      interface Props {
        title: string
      }

      export const TestComponent: React.FC<Props> = ({ title }) => {
        return (
          <div>
            <h1>{title} from TSX!</h1>
          </div>
        )
      }`,
            path: 'test.tsx',
         })
         expect(results).toEqual(
            expect.arrayContaining([
               expect.objectContaining({
                  contents: expect.stringContaining('import React from "react";'),
                  extension: '.mjs',
               }),
               expect.objectContaining({
                  contents: expect.stringContaining('export const TestComponent = ({ title }) => {'),
                  extension: '.mjs',
               }),
               expect.objectContaining({
                  contents: expect.stringContaining('return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, title, " from TSX!"));'),
                  extension: '.mjs',
               }),
            ]),
         )
      })
   })
})
