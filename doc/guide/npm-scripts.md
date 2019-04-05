# NPM Scripts

All available NPM scripts are in `package.json` file.
Type `npm run help` to show every available commands.

# Commands


### Package tools

Remove and re-install all node modules.
```bash
npm run reinstall
```

### Release a working version

[Publish code](guide/publishing.md) and documentation with this one-liner :
```bash
npm run release (patch|minor|major) "commit message"
```

- ex : `npm run release patch "Whoopsy, forgot this"`
- ex : `npm run release major "First stable release"`


### Pushing work in progress to Git

If you need to push work in progress to git, but without tests, documentation and NPM publishing :

```bash
npm run wip "Working on this feature"
```

Commit message is not mandatory :

```bash
npm run wip
```


### Documentation

Start [documentation](guide/documentation.md) server.
```bash
npm run doc
```

