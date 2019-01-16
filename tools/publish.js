/**
 * NPM Script to publish everything.
 * First argument is increment of package.json (patch / minor / major)
 * Second argument is commit message
 *
 * Husky git hooks will do the compile / test / publish stuff 
 */

const { log, error, exec, inRealPackage } = require('./cli');

// Get arguments
const increment = process.argv[2];
const message = process.argv[3];

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

// Add every sources files
exec(`git add src/* doc/* tests/* README.md LICENSE .gitignore .npmignore package.json`, true);


// Commit with message and commit hook
exec(`git commit -m"${message}"`, true);
process.exit();

// And then push and push hook
exec(`git push`, {cwd: process.cwd()});