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
unzip -q archive.zip
rm archive.zip
rm -rf typescript-npm-starter-master/README.md
rm -rf typescript-npm-starter-master/LICENSE
rm -rf typescript-npm-starter-master/install.sh
rm -rf typescript-npm-starter-master/doc
mv typescript-npm-starter-master/* ./
cat typescript-npm-starter-master/.gitignore >> .gitignore
rm -r typescript-npm-starter-master
echo "Done !"
echo ""

# Install not dependencies
echo "Installing node dependencies..."
npm install --silent
echo "Done !"
echo ""

# Continue setup with right privilege
echo "> Please run $(tput bold)'node setup'$(tput sgr0) to continue."