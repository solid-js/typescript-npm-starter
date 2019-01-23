/**
 * Release :
 * NPM Script to release current version to Git and NPM.
 * First argument is increment of package.json (patch / minor / major)
 * Second argument is commit message
 *
 * Husky git hooks will do the compile / test / publish stuff 
 * 
 * WIP : 
 *
 * NPM Script to release Work In Progress to Git and nothing to NPM.
 * Nothing will be compiled
 * No Husky hooks, 
 */

const { log, error, exec, inRealPackage } = require('./cli');

// Get arguments
const increment = (process.argv[2] || '').toLowerCase();
const message = process.argv[3];

const isWip = increment == 'wip';

console.log(increment);
console.log(message);

if ( !isWip )
{
	// Check if there is a missing argument
	if ( !increment || !message )
	{
		error(`Usage : npm run publish (patch|minor|major) "message"\nex : npm run publish patch "Woopsy"`);
	}

	// Increment and throw if increment value is not right
	try
	{
		exec(`npm run increment ${increment}`, {stdio: []});
	}
	catch (e) { error(e) }
}

// Add every sources files
try
{
	inRealPackage()
	? exec(`git add src/* doc/* tests/* README.md LICENSE .gitignore .npmignore package.json`, { stdio: [0, 1, 2] })
	: exec(`git add --all`, { stdio: [0, 1, 2] })
}
catch (e) {}

// Add --no-verify argument if we are publishing Work In Progress.
// Will disable all hooks
const noVerify = (isWip ? ' --no-verify' : '')

// Commit with message and commit hook
try
{
	exec(`git commit -m"${message}"${noVerify}`, { stdio: [0, 1, 2] });
}
catch (e) {}

// And then push and push hook
try
{
	exec(`git push${noVerify}`, { stdio: [0, 1, 2] });
}
catch (e) {}