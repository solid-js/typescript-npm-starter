# Files and folders


### dist/

Javascript compiled files will be deployed here. This will only include `*.js`, `*.mjs` and `*.d.ts` (Typescript definition) files. Folder architecture from `src/` will be kept. Those files will be pushed to NPM and not to Git.

[$](guide/npm-scripts.md) `npm run clean` will remove any related files from this folder.


### doc/

[Documentation](guide/documentation.md) source files will be here. Based on [Docsify](https://docsify.js.org) and Markdown.

[$](guide/npm-scripts.md) `npm run doc` to start writing your doc and run a local server.


### src/

[Typescript](guide/typescript.md) sources, compiled to `dist/`.

[$](guide/npm-scripts.md) `npm run build` to build Typescript sources to Javascript files.


### tests/

- `dev.js` Used to test and develop the lib while creating it.
- `tests.js` Used to unit test the lib and ensure integrity between updates.

[$](guide/npm-scripts.md) `npm run dev` to build Typescript sources and run `tests/dev.js`.
<br>[$](guide/npm-scripts.md) `npm run test` to run unit tests from `tests/tests.js`.
<br>[$](guide/npm-scripts.md) `npm run check` to clean, build and run unit tests from `tests/tests.js`.


### tools/

Here are stored utility scripts and hooks. Feel free to explore !


### tsconfig.json

They are [Typescript configuration](guide/typescript.md) files. Defaults are fine to get started.