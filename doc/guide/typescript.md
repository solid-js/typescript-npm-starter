# Typescript

If you are here, you certainly know what is Typescript.
<br/>In any case, here are 2 very useful resources when working with this tech :

- Complete and technical : [Typescript official documentation](http://www.typescriptlang.org/docs/home.html)
- Must read : [Basarat, Getting Started With TypeScript](https://basarat.gitbooks.io/typescript/docs/javascript/recap.html)

?> Basarat book is a must read to understand what is Typescript and why it's so popular now

### Files

- Input are Typescript files from `src/` folder, starting point is `src/index.ts`. When using command `npm run build`, Typescript files will be transpiled to `dist/` folder.
- Javascript and Typescript definitions files (`.js`, `.mjs`, `d.ts`) will be generated.
- `package.json` main file points to `dist/index.js`.

!> **Important to get :** No Typescript files will be pushed to NPM and no Javascript files will be pushed to Git.


### Configuration

There are 2 Typescript configuration file, `tsconfig.json` and `tsconfig.module.json`.

- `tsconfig.json` describes main Typescript compiler's behavior.
- `tsconfig.module.json` extends dynamically the main config and is meant to compile ES Modules (`.mjs`).
This file should not be edited. Any new global behavior should be added to `tsconfig.json`.

Some nice error control can be tweaked, like `noUnusedLocals` or `noUnusedParameters` to allow more flexible error checking when coding the lib.
<br>_Those files are JSON5, so Javascript style comments are allowed._

### To know more about Typescript compiler options
- [Tsconfig documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html)



