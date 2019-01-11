# Publishing

To publish your library to NPM, use your classic Git workflow.
Thanks to Git Hooks, the workflow is Git controlled.

### Git controlled version

**1. New version**. First, you will need to create a new version by [incrementing package.json version](guide/npm-scripts.md?id=package-tools).
<br>`npm run increment (patch|minor|major)`

**2. Add** your new files
<br>`git add --all` is fine thanks to .gitignore file.

**3. Commit** your feature
<br>`git commit -m"my commit message"`

?> This will [compile](guide/typescript.md) and run [unit tests](guide/tests.md). If any tests fails, commit will be refused.

**4. Push** your modifications to GitHub
<br>`git push`

?> This will publish [documentation](guide/documentation.md) if there are any changes.

?> This will create a new tag so this version is identifiable on GitHub and NPM clearly.

?> This will publish your library to NPM.


### Quicker publish

Or simply run [this command](guide/npm-scripts?id=publishing) to add / commit / push in one line :
```bash
npm run publish (patch|minor|major) "commit message"
```
All hooks will be launched accordingly so compilation / unit tests / documentation publishing will be done.


### NPM auto-publishing

To disable auto-publishing to NPM when pushing to Git, create an empty `.nopublish` file.
<br>`npm publish` will still work but will have to be called manually.


### Disabling hooks

If you want to commit or push a not stable version of the code, add `--no-verify` at the end of your git commands :
- ex : `git commit -m"Work in progress" --no-verify`
- ex : `git push --no-verify`
