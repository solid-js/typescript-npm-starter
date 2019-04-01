# NPM Scripts

All available NPM scripts are in `package.json` file.
Type `npm run help` to show every available commands.

# Commands

### Build & test
Compile [typescript](guide/typescript.md) sources to JS files and typescript definitions.
```bash
npm run build
```

Run unit [tests](guide/tests.md) on compiled files.
```bash
npm run test
```

Use [dev.js](guide/tests.md) to work on your lib before it's testable.
```bash
npm run dev
```

Clean, build and run tests.
```bash
npm run check
```

Compress compiled code with Terser as a production release, then show compressed bundle size.
```bash
npm run compress
```


### Package tools

Remove all generated files like compiled JS files and typescript definitions.
```bash
npm run clean
```

Remove and re-install all node modules.
```bash
npm run reinstall
```

Increment package.json version with semver argument (major|minor|patch). Default is patch.
```bash
npm run increment (patch|minor|major)
```

- ex : `npm run increment` to upgrade `package.json` version from `1.2.7` to `1.2.8`.
- ex : `npm run increment minor` to upgrade `package.json` version from `1.2.7` to `1.3.0`.


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

