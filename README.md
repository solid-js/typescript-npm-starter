![solid-js](doc/media/solid-js.png)

# Typescript NPM Starter

Smart starter for NPM libraries with Typescript sources, integrated unit test, Git hooks and Markdown documentation.


## Typescript First

Create solid libraries with Typescript as source, exported as Javascript modules with Typescript definitions. No Typescript files are pushed to NPM, to keep pure Javascript pipeline with opt-in Typescript features for developers using your library.


## For Open-Source projects

#### GitHub
Non GitHub projects will work but documentation will not be uploaded to github.io.

#### Public NPM projects
Non public npm projects will work but pushing to npm automatically will be disabled.


## Clean documentation

Create [clean documentations](https://solid-js.github.io/typescript-npm-starter/) thanks to [docsify](https://docsify.js.org). Markdown editing with no compiling phase. Really simple management and automatically uploaded to your github.io space when pushing a new version.

## Unit tests

Create your lib from unit tests and be sure that a new version will not break.

## Git Hooks

Git hooks pre-configured with [husky](https://github.com/typicode/husky) :
- Stop commit if package.json version has not been updated.
- Create a new tag for each commited version.
- Build and run tests before each commit to ensure library integrity.
- Push new doc automatically to github.io when any doc file has changed.
- Automatically publish to NPM when pushing to Git.

---

# [Create a new package](https://solid-js.github.io/typescript-npm-starter/#/install/quick-start.md)