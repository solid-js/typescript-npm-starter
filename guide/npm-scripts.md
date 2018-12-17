# NPM Scripts

All available NPM scripts are in `package.json` file.
Type `npm run help` to show every available commands.

# Commands

### Build & test
Compile [typescript](guide/typescript.md) sources to JS files and typescript definitions.
<br/>`npm run build`

Run unit [tests](guide/tests.md) on compiled files.
<br/>`npm run test`

Use [dev.js](guide/tests.md) to work on your lib before it's testable.
<br/>`npm run dev`

Clean, build and run tests.
<br/>`npm run check`


### Package tools

Remove all generated files like compiled JS files and typescript definitions.
<br/>`npm run clean`

Remove and re-install all node modules.
<br/>`npm run reinstall`

[Increment package.json](guide/publishing.md) version with semver argument (major|minor|patch). Default is patch.
<br/>`npm run increment $semver`

- ex : `npm run increment` to upgrade `package.json` version from `1.2.7` to `1.2.8`.
- ex : `npm run increment minor` to upgrade `package.json` version from `1.2.7` to `1.3.0`.



### Documentation

Start [documentation](guide/documentation.md) server.
<br/>`npm run doc`

