#!/bin/sh

# curl https://raw.githubusercontent.com/solid-js/typescript-npm-starter/master/install.sh | sh

inside_git_repo="$(git rev-parse --is-inside-work-tree 2>/dev/null)"
if [ ! "$inside_git_repo" ]; then
  echo "Please setup git repo in this folder first.";
  exit 1;
fi

echo "Downloading typescript-npm-starter archive..."
curl -L -sS https://github.com/solid-js/typescript-npm-starter/archive/master.zip > archive.zip
echo "Done !"
echo ""

echo "Installing archive..."
unzip -q archive.zip
rm archive.zip
rm -rf typescript-npm-starter-master/README.md
rm -rf typescript-npm-starter-master/LICENSE
rm -rf typescript-npm-starter-master/install.sh
mv typescript-npm-starter-master/* ./
cat typescript-npm-starter-master/.gitignore >> .gitignore
rm -r typescript-npm-starter-master
echo "Done !"
echo ""

echo "Installing node dependencies..."
npm install
echo "Done !"
echo ""