# Documentation

We choose [Docsify](https://docsify.js.org/) because there is no compilation phase (byebye webpack) and is only Markdown based. Plus, it's very simple !
To know more : [Docsify doc](https://docsify.js.org/#/more-pages)

?> Documentation will look exactly like this one by default.


### Markdown syntax

Here is a [complete guide about Markdown](https://www.markdownguide.org/basic-syntax/)
<br>There are also more syntax options in Docsify.


### Getting started

Docsify explain it well but to get started quickly :
- All doc related files are in `doc/` folder
- `index.html` file is the main configuration file, here is the [configuration doc](https://docsify.js.org/#/configuration)
- To create pages, just create Markdown files in any sub-folder, easy !
- To have a nice sidebar, create a `sidebar.md` file and add `loadSidebar: 'sidebar.md'` option into `index.html`

### Writing doc

To see what you are doing (see the doc running in your browser while you type it), run :
```bash
npm run doc
```


### Examples

Since every files are just Markdown files, a good way to learn is to check sources of other Docsify projects :
- This documentation's [sources](https://github.com/solid-js/typescript-npm-starter/tree/master/doc)
- On any page of [Docsify documentation](https://docsify.js.org/#/more-pages), click the **Edit Document** button to see the source code.


### Publishing

To publish your documentation on GitHub pages (github.io), just add and push files to your public GitHub repo !
<br>Git Hooks will handle the rest for you.


### Documentation URL

URL of the documentation is based on your GitHub's repo informations.
- If your Github repo is `github.com/organisation/repository-name`
- Your documentation will be hosted there : `organisation.github.io/repository-name`
