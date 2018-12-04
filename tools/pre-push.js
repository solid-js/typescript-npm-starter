/**
 * This git hook will be executed before each push.
 * 1. Will generate and publish doc to github if any doc related file has been updated.
 * 2. Will publish to npm if package.json contains a name field
 */

const {log, exec} = require('./cli');

// ----------------------------------------------------------------------------- HOOK

// Checking if this is hooked from "git push --tags"
// If this is, do not continue to avoid infinite git hook loop.
// ( tags are pushed just bellow and this script is triggered by git push )
const huskyStdIn = process.env['HUSKY_GIT_STDIN'] || '';
if (huskyStdIn.indexOf('refs/tags/') == 0) return;

// ----------------------------------------------------------------------------- PUBLISH DOC

// Here we check if we need to regenerate and publish the documentation
let needsDoc = false;
try
{
	// Do not check path in sub-folders.
	// for ex src/doc/ needs to be not detected as doc file
	const startCheckIndex = 5;

	// If there is any updated file in git
	exec('git diff --stat --cached origin/master').split("\n").map( line =>
	{
		// Which is in the doc directory
		[
			line.indexOf('doc/'),
			line.indexOf('.doczrc.js')
		].map( check =>
		{
			if (check !== -1 && check < startCheckIndex)
				needsDoc = true;
		});
	});
}

// Generate doc if we had an error
catch (e) { needsDoc = true }

// Regenerate doc
if (needsDoc)
{
	log('> Doc updated, regenerating and publishing to github.io ...');
	exec('npm run doc:publish --silent', true);
	log('> Done !');
}

// ----------------------------------------------------------------------------- NPM PUBLISH

// Get package.json info
const packageJSON = require('../package.json');

// If there is name in package.json
// This means we are not pushing typescript-npm-starter but a real package
// So we publish to npm
if ('name' in packageJSON)
{
	log(`> Publishing package ${packageJSON.name} version ${packageJSON.version} to NPM ...`);
	exec('npm publish', true);
	log('> Done !');
}

// ----------------------------------------------------------------------------- PUSH TAGS

// Here we push our tag which has been auto-generated in pre-commit.js
try
{
	log('> Pushing version tag ...');
	exec('git push --tags');
	log('> Done !');
}
catch (e)
{
	error(`! Error push tag.\n${e.message}`);
}
