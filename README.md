[![cover][cover-src]][cover-href]
[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

# Mimikra 🧙

> Streamlined data metamorphosis instrument 🪄

📦 Duplicates all resources

🖇️ Backs Vue Single File Components

⚡ Swift and lean transformation by esbuild

📄 .d.ts creation for .ts, .js, and .vue files

## ❓ Rationale 🤔

Library bundling isn't always the optimal route:

- Original file layout vanishes
- Modern syntax is lost due to transpilation
- Critical CSS is sacrificed by moving it to a global dist (vue)
- Dependencies persistently import from the bundle, regardless of usage (a secondary bundling phase might resolve this, but it's rare during development or for dependencies with side-effects)

Despite the existence of tools like [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and [@babel/cli](https://babeljs.io/docs/en/babel-cli), they primarily concentrate on transpilation rather than maintaining source-level quality. Furthermore, they're ill-equipped to manage custom extensions like `.vue` or resource duplication.

## 🚀 Deployment 🌟

```bash
npx mimikra [rootDir] [--src=src] [--dist=dist] [--pattern=glob [--pattern=more-glob]] [--format=cjs|esm] [-d|--declaration] [--ext=mjs|js|ts]
```

## 📜 License

[MIT](./LICENSE) - Made with 💞

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/mimikra?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/mimikra
[npm-downloads-src]: https://img.shields.io/npm/dm/mimikra?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/mimikra
[bundle-src]: https://img.shields.io/bundlephobia/minzip/mimikra?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=mimikra
[license-src]: https://img.shields.io/github/license/nyxblabs/mimikra.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxblabs/mimikra/blob/main/LICENSE

<!-- Cover -->
[cover-src]: https://raw.githubusercontent.com/nyxblabs/mimikra/main/.github/assets/mimikra.png
[cover-href]: https://💻nyxb.ws
