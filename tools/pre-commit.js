/**
 * This git hook will be executed before each commit.
 * 1. Will increment package patch version if package version has not been changed manually
 * 2. Will clean and build JS and d.ts files
 * 3. Will run tests and halt commit if any fails
 */

// npm run increment && npm run clean && npm run build && npm run test

const {log, exec, error} = require('./cli');
const fs = require('fs');
const path = require('path');

const lastCommitPackagePath = path.join(__dirname, '.package');

const currentPackageJSON = require('../package.json');

/*
const incrementVersion = (version, semverIndex) =>
{
	const splittedVersion = version.split('.');
	splittedVersion[ semverIndex ] = parseInt(splittedVersion[ semverIndex ], 10) + 1;
	return splittedVersion.join('.');
}
*/

let needsPatchCommit = false;
if ( !fs.existsSync(lastCommitPackagePath) )
{
	needsPatchCommit = true;
}
else
{
	try
	{
		const lastCommitPackageJSON = JSON.parse(fs.readFileSync( lastCommitPackagePath ));
		if ( lastCommitPackageJSON.version == currentPackageJSON.version )
		{
			needsPatchCommit = true;
		}
	}
	catch (e) { needsPatchCommit = true }
}


if ( needsPatchCommit )
{
	error(`! Please increment package.json version before committing changes.`);
}

try
{
	exec(`git tag v${currentPackageJSON.version}`, true);
	log(`! Added tag v${currentPackageJSON.version}`);
}
catch (e)
{
	error(`! Error while adding tag.\n${e.message}`);
}

