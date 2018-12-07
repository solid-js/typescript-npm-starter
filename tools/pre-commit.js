/**
 * This git hook will be executed before each commit.
 * 1. Will ask for package version increment if package version has not been changed manually
 * 2. Will clean and build JS and d.ts files
 * 3. Will run tests and halt commit if any fails
 * 4. Will add tag for this package.json version
 */

const { log, exec, error } = require('./cli');
const { getPackageVersion } = require('@zouloux/semver-increment')
const fs = require('fs');
const path = require('path');

// ----------------------------------------------------------------------------- 1. VERSION INCREMENT

// Check if package.json version has not been updated
const currentCommitVersion = getPackageVersion( 'package.json' );
const searchVersion = `v${currentCommitVersion}`;

// Do not continue if we are not in a real package (but in typescript-npm-starter)
if (currentCommitVersion != null)
{
	let doesThisTagExists;
	try
	{
		doesThisTagExists = exec(`git tag | grep "${searchVersion}"`, false);
	}
	catch (e) { }

	// Tell user to increment package.json
	if (doesThisTagExists != null && doesThisTagExists.indexOf(searchVersion) === 0)
	{
		error(`! Please increment package.json (${currentCommitVersion}) version before committing changes.\n\n$ npm run increment {major|minor|patch}`);
	}	
}

// ----------------------------------------------------------------------------- 2. BUILD

// Clean and build sources. Halt on error.
try
{
	log(`> Building sources ...`);
	exec(`npm run clean --silent && npm run build --silent`, true);
	log(`> Done !\n`);
}
catch (e)
{
	error(`Error while building sources.\nCommit aborted.`);
}

// ----------------------------------------------------------------------------- 3. TESTS

// Run tests. Halt on error.
try
{
	log(`> Running tests ...`);
	exec(`npm run test --silent`, true);
	log(`> Done !\n`);
}
catch (e)
{
	error(`Error while running tests.\nCommit aborted.`);
}

// ----------------------------------------------------------------------------- 4. VERSION TAG

// Do not continue if we are not in a real package (but in typescript-npm-starter)
if (currentCommitVersion != null)
{
	// Add git tag for this package.json version. Halt on error.
	try
	{
		exec(`git tag v${currentCommitVersion}`, true);
		log(`! Added tag v${currentCommitVersion}`);
	}
	catch (e)
	{
		error(`Error while adding tag.\n${e.message}\nCommit aborted.`);
	}
}