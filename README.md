![solid-js](doc/media/solid-js.png)

# Typescript NPM Starter

Smart starter for NPM libraries with Typescript sources, integrated unit testing, Git hooks and Markdown documentation.

## Requirements

- MacOS or Linux based system
- Node 8.7+ and NPM 6+
- Git 2.0+

_You can open an issue for Windows Support. Any help will be welcome._


## Typescript First

Create solid NPM libraries with Typescript files as source, exported as Javascript modules with Typescript definitions for better IDE integration and error detection.
<br/>No Typescript files are pushed to NPM, to keep pure Javascript pipeline with opt-in Typescript features for developers using your library.


## For Open-Source projects

#### Better with public GitHub repositories
#### Better with public NPM libraries

_Other Git repos and private NPM projects will work but documentation will not be uploaded to github.io._


## Clean documentation

Create [clean documentations](https://solid-js.github.io/typescript-npm-starter/) thanks to [docsify](https://docsify.js.org). Markdown editing with no compiling phase. Really simple management and automatically uploaded to your github.io space when pushing a new version.

## Integrated unit testing

Create your lib with Unit tests and be sure that a new version will not break.
Unis tests are run with [Mocha](https://mochajs.org/)

## Git Hooks

Git hooks pre-configured with [husky](https://github.com/typicode/husky) :
- Stop commit if package.json version has not been updated.
- Create a new tag for each commited version.
- Build and run tests before each commit to ensure library integrity.
- Push new doc automatically to github.io when any doc file has changed.
- Automatically publish to NPM when pushing to Git.

---

# [Create a new package](https://solid-js.github.io/typescript-npm-starter/#/install/quick-start.md)