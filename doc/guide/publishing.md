# Publishing

To publish your library to NPM, simply use the following script.
No need to manually use Git commands.


### Quicker publishing

Publish code and documentation with [this command](guide/npm-scripts?id=publishing) :
```bash
npm run release (patch|minor|major) "commit message"
```

**It will :**
1. Increment package.json version number
2. Stage changed files to Git
3. Build and run unit tests, this will prevent publishing in case of failure
4. Add a tag of this version to keep track of releases
5. Commit
6. Publish doc if there are any changes detected
7. Push code and tags to Git then publish to NPM

?> No need to use Git commands, this command will handle it for you !


### Pushing work in progress

To publish work in progress to Git, without tests and releasing to NPM :

```bash
npm run wip "commit message"
```


### NPM auto-publishing

To disable auto-publishing to NPM when releasing a new version, create an empty `.nopublish` file.
<br>`npm publish` will still work but will have to be called manually.
