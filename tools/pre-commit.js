/**
 * This git hook will be executed before each commit.
 * 1. Will ask for package version increment if package version has not been changed manually
 * 2. Will clean and build JS and d.ts files
 * 3. Will run tests and halt commit if any fails
 * 4. Will add tag for this package.json version
 */

const { log, exec, error } = require('./cli');
const { getPackageVersion } = require('./increment');
const fs = require('fs');
const path = require('path');

// ----------------------------------------------------------------------------- 1. VERSION INCREMENT

// Get previous and current package.json versions
const lastCommitPackagePath = path.join(__dirname, '.package');
const currentCommitVersion = getPackageVersion( 'package.json' );

// If unable to get previous version
let needsPatchCommit = false;
if ( !fs.existsSync(lastCommitPackagePath) )
{
	// Do not ask for an increment
	needsPatchCommit = false;
}
else
{
	// Check if versions matches
	try
	{
		const lastCommitVersion = getPackageVersion( lastCommitPackagePath );
		needsPatchCommit = (lastCommitVersion == currentCommitVersion);
	}
	catch (e) { needsPatchCommit = true }
}

// Ask for an increment if version did not changed
if ( needsPatchCommit )
{
	error(`! Please increment package.json version before committing changes.\n\n$ npm run increment {major|minor|patch}\nCommit aborted.`);
}

// ----------------------------------------------------------------------------- 2. BUILD

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

try
{
	exec(`git tag v${currentCommitVersion}`, true);
	log(`! Added tag v${currentCommitVersion}`);
}
catch (e)
{
	error(`Error while adding tag.\nYou may need to increment package.json version.\n\n${e.message}\nCommit aborted.`);
}

// ----------------------------------------------------------------------------- 5. LAST COMMIT VERSION

// Remember this commit version to detect changes for next commit
fs.writeFileSync(lastCommitPackagePath, fs.readFileSync('package.json'));
