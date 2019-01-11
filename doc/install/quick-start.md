# Installation - Quick start


### Create a new Git repository

Create a [new repo on GitHub](https://github.com/new) and clone it into a new folder. The trunk folder should be nammed as your package name.

**Note :** Everything will work with any other Git solution but publishing documentaiton to GitHub pages will be unavailable. If you do not want to publish as an open-source package, you can also just create an empty Git repository with `git init`

### Install with npm

Open a new terminal, `cd` into the Git folder and run this command :
```sh
npm init solid-typescript-lib
```


### Setup package

Follow instructions and run `node setup` if you want a classic public NPM package.<br>Choose `node setup no-publish` if you want to create a private package or disable auto publishing to NPM when pushing to Git.

### Files

You should see this [architecture](install/files-and-folders.md) installed.