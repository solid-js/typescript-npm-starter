/**
 * This git hook will be executed before each push.
 * 1. Will generate and publish doc to github if any doc related file has been updated.
 * 2. Will publish to npm if package.json contains a name field
 */

const {log, exec} = require('./cli');


const huskyStdIn = process.env['HUSKY_GIT_STDIN'] || '';

if (huskyStdIn.indexOf('refs/tags/') == 0)
{
	return;
}

// ----------------------------------------------------------------------------- PUBLISH DOC

// Here we check if we need to regenerate and publish the documentation
let needsDoc = false;
try
{
	// Do not check path in sub-folders.
	// for ex src/doc/ needs to be not detected as doc file
	const startCheckIndex = 5;

	// If there is any updated file in git
	exec('git status -s').split("\n").map( line =>
	{
		// Which is in the doc directory
		if (
			line.indexOf('doc/') < startCheckIndex
			||
			line.indexOf('.doczrc.js') < startCheckIndex
		)
			needsDoc = true;
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

log('> Pushing version tag ...');
exec('git push --tags', true);
log('> Done !');