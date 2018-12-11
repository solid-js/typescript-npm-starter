# Installation - Quick start


### Create a new repository

Create a new repo on GitHub and clone it into a new folder. **&ast;**
<br>The trunk folder should be nammed as your package name.

**&ast;** Any other Git solution will work, but publishing documentaiton to GitHub pages will not work. If you do not want to publish as an open-source package, you can also just create an empty Git repository with `git init`

### Install archive

Open a new terminal, `cd` to the trunk folder and run this line :

`curl https://raw.githubusercontent.com/solid-js/typescript-npm-starter/master/install.sh | sh`

### Setup package

Follow instructions and run `node setup` if you want a classic public NPM package. Choose `node setup no-publish` if you want to create a private package.
