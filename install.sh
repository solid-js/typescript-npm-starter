#!/bin/sh

# How to install this script 
# curl https://raw.githubusercontent.com/solid-js/typescript-npm-starter/master/install.sh | sh

# Check if git repo was already setup
inside_git_repo="$(git rev-parse --is-inside-work-tree 2>/dev/null)"
if [ ! "$inside_git_repo" ]; then
	tput bold && tput setaf 7 && tput setab 1;
	>&2 echo " Typescript-npm-starter needs to be installed in a git repository to be correctly configured. "
	>&2 echo " Please setup git repo in this folder, before launching this install script. ";
	exit 1;
fi

# Download archive as zip file
echo ""
echo "Downloading typescript-npm-starter archive..."
curl -L -sS https://github.com/solid-js/typescript-npm-starter/archive/master.zip > archive.zip
echo "Done !"
echo ""

# Unzip archive and install only required files
echo "Installing archive..."

# 1. Extract and remove archive
unzip -q archive.zip
rm archive.zip

# 2. Clean unnecessary files
rm -rf typescript-npm-starter-master/README.md
rm -rf typescript-npm-starter-master/LICENSE
rm -rf typescript-npm-starter-master/install.sh
rm -rf typescript-npm-starter-master/doc

# 3. Move all files and folders from archive into this directory
mv typescript-npm-starter-master/* ./

# 4. Add .npmignore and .gitignore content without overriding
echo "---" >> .npmignore && cat typescript-npm-starter-master/.npmignore >> .npmignore
echo "---" >> .gitignore && cat typescript-npm-starter-master/.gitignore >> .gitignore

# 5. Remove extracted archive
rm -r typescript-npm-starter-master
echo "Done !"
echo ""

# Install not dependencies
echo "Installing node dependencies..."
npm i &>/dev/null
echo "Done !"
echo ""

# Continue setup with right privilege
echo "Run $(tput bold)'node setup'$(tput sgr0) to continue."
echo "Run $(tput bold)'node setup no-publish'$(tput sgr0) to continue for a private npm package."