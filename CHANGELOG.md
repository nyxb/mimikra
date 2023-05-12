# Changelog


## v0.0.4

[compare changes](https://github.com/nyxblabs/mimikra/compare/v0.0.3...v0.0.4)


### 🚀 Enhancements

  - **README.md): add support for .jsx and .tsx files in .d.ts creation 🐛 fix(js.ts): add support for .jsx and .tsx files in jsLoader 🧪 test(jsx-tsx.test.ts:** Add tests for .jsx and .tsx files in jsLoader The changes add support for .jsx and .tsx files in the jsLoader and .d.ts creation. The jsLoader now supports .jsx and .tsx files, and the .d.ts creation now includes .jsx and .tsx files. The tests have been added to ensure that the jsLoader works correctly with .jsx and .tsx files. ([72927ba](https://github.com/nyxblabs/mimikra/commit/72927ba))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.0.3

[compare changes](https://github.com/nyxblabs/mimikra/compare/v0.0.2...v0.0.3)

## v0.0.2


### 🚀 Enhancements

  - **loader): add loader module with interfaces, types, and default loaders ✨ feat(loaders:** Add js, sass, and vue loaders The loader module has been added to the project, which contains interfaces, types, and default loaders. The js, sass, and vue loaders have been added to the project. The js loader transpiles typescript to javascript, and esm to cjs. The sass loader compiles sass and scss files to css. The vue loader loads .vue files and applies the appropriate loaders to the script and style blocks. ([9642b5f](https://github.com/nyxblabs/mimikra/commit/9642b5f))
  - **cli.ts): add CLI support for mimikra ✨ feat(index.ts:** Export make function from index.ts The CLI support for mimikra has been added to the project. The CLI script is now located in `src/cli.ts`. The CLI script uses the `mri` package to parse command line arguments. The `mimikra` function is imported from `src/index.ts` and is called with the parsed arguments. The `mimikra` function returns an object containing the list of written files, which is then logged to the console. The `make` function is now exported from `src/index.ts`. ([c8f3887](https://github.com/nyxblabs/mimikra/commit/c8f3887))
  - **test:** Add new files and directories to the test fixtures The following files and directories were added to the test fixtures: - .eslintrc: a configuration file for eslint with a rule to disable the import/no-anonymous-default-export rule - package.json: a private package.json file - src/README.md: a readme file for the src directory - src/_base.scss: a scss file with a variable named $color set to green - src/bar/esm.mjs: an es module file that exports a string 'esm' - src/bar/index.ts: a typescript file that exports a string 'bar' - src/components/blank.vue: a vue file with a blank template - src/components/js.vue: a vue file with a script section that imports a function from the parent directory and uses it to set a data property, and a style section that imports a variable from the parent directory and uses it to ([63e4938](https://github.com/nyxblabs/mimikra/commit/63e4938))
  - Add GitHub funding, issue templates, and pull request template ✨ feat: add GitHub funding, issue templates, and pull request template This commit adds a GitHub funding file to allow users to support the project. It also adds issue templates for bug reports, feature requests, and typo fixes. A pull request template is also added to ensure that contributors follow the contribution guidelines. Finally, a cover image is added to the GitHub repository. ([9a65e32](https://github.com/nyxblabs/mimikra/commit/9a65e32))
  - **vscode): add VSCode settings file with editor and file settings 📝 docs(contributing): add CONTRIBUTING.md file with link to contribution guidelines 📝 docs(license): add LICENSE file with MIT license 📝 docs(readme:** Add README.md file with project description, rationale, deployment instructions, and license information Added VSCode settings file with editor and file settings to improve the development experience. CONTRIBUTING.md file was added with a link to the contribution guidelines to encourage contributions. LICENSE file was added with the MIT license to clarify the project's licensing. README.md file was added with a project description, rationale, deployment instructions, and license information to provide a comprehensive overview of the project. ([24a4d5b](https://github.com/nyxblabs/mimikra/commit/24a4d5b))

### 🩹 Fixes

  - **package.json:** Remove duplicate 'nyxr' command in 'test' script The 'nyxr' command was mistakenly duplicated in the 'test' script. This commit removes the duplicate command to fix the script. ([4f7e8d2](https://github.com/nyxblabs/mimikra/commit/4f7e8d2))
  - **package.json:** Remove prettier from lint script The prettier command has been removed from the lint script to avoid conflicts with the eslint configuration. ([8f7d6cb](https://github.com/nyxblabs/mimikra/commit/8f7d6cb))
  - **index.test.ts:** Fix indentation in snapshot to match code The indentation in the snapshot did not match the code, causing the test to fail. This commit fixes the indentation in the snapshot to match the code. ([7f18eb4](https://github.com/nyxblabs/mimikra/commit/7f18eb4))

### 🏡 Chore

  - **.eslintrc:** Disable @next/next/no-html-link-for-pages rule and set React version to 16.0 The @next/next/no-html-link-for-pages rule is disabled to allow the use of HTML links for pages in Next.js. The React version is set to 16.0 to ensure compatibility with the project's dependencies. ([e934758](https://github.com/nyxblabs/mimikra/commit/e934758))
  - **make.ts): add new file make.ts to the project 🚀 chore(utils/dts.ts): add new file dts.ts to the project 🚀 chore(utils/fs.ts): add new file fs.ts to the project 🚀 chore(tsconfig.json:** Remove strict, skipLibCheck, and forceConsistentCasingInFileNames options The changes add new files to the project and remove some strict options from the tsconfig.json file. The strict options were removed to allow for more flexibility in the codebase. The new files are make.ts, dts.ts, and fs.ts, which contain utility functions for the project. ([26fd046](https://github.com/nyxblabs/mimikra/commit/26fd046))
  - **package.json:** Update scripts and dependencies The `prepack` script now runs `nyxr build` to build the project before packing. The `build` script now runs `unbuild` to remove the previous build before building the project. The `dev` script now runs `pnpm mkdist test/fixture -d` to build the project and run tests. The `lint` script now runs `eslint --ext .ts . && prettier --check src test` to lint the project. The `mkdist` script now runs `dynot src/cli` to generate a distribution file. The `release` script now runs `nyxr test && nyxlx changelogen --release && pnpm publish && git push --follow-tags` to test, generate a changelog, publish the package, and push the tags to the remote repository. The `test` script now runs `nyxr lint && vitest run --coverage` ([0f3eb4e](https://github.com/nyxblabs/mimikra/commit/0f3eb4e))
  - **package.json:** Create script to better reflect the purpose of the script. The script is used to generate a distribution package of the application. ([c55e9b7](https://github.com/nyxblabs/mimikra/commit/c55e9b7))
  - **eslint:** Update eslint configuration to extend @nyxb 🔧 chore: fix linting errors in test fixtures The eslint configuration has been updated to extend the @nyxb configuration. This change ensures that the linting rules are consistent across the project. The linting errors in the test fixtures have been fixed by changing the quotes to single quotes and removing the unnecessary semicolons. ([5362f9b](https://github.com/nyxblabs/mimikra/commit/5362f9b))
  - **.eslintrc:** Add rule to disable @next/next/no-html-link-for-pages and set react version to 16.0 The @next/next/no-html-link-for-pages rule was disabled to allow the use of HTML links for pages in Next.js. The react version was set to 16.0 to ensure that the correct version of react is used for linting purposes. ([b01eae0](https://github.com/nyxblabs/mimikra/commit/b01eae0))

### 🎨 Styles

  - **README.md:** Update cover-src link to point to the latest version of the cover image The cover-src link was updated to point to the latest version of the cover image. This improves the consistency of the README file and ensures that the latest version of the cover image is always displayed. ([ff7ecc5](https://github.com/nyxblabs/mimikra/commit/ff7ecc5))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

