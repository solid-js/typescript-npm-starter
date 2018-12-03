#!/bin/sh

# TODO : Check .git exists

echo "Downloading typescript-npm-starter archive..."
curl -L -sS https://github.com/solid-js/typescript-npm-starter/archive/master.zip > archive.zip
echo "Done !"
echo ""

echo "Installing archive..."
unzip -q archive.zip
rm archive.zip
rm -rf typescript-npm-starter-master/README.md
rm -rf typescript-npm-starter-master/LICENCE
mv typescript-npm-starter-master/* ./
mv typescript-npm-starter-master/.docz ./
cat typescript-npm-starter-master/.gitignore >> .gitignore
rm -r typescript-npm-starter-master
echo "Done !"
echo ""

echo "Installing node dependencies..."
npm install
echo "Done !"
echo ""

echo "Removing install script..."
rm -f tools/install.sh
echo "Done !"
echo ""