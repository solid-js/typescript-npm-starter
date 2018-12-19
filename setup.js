const { log, exec, error, inRealPackage } = require('./tools/cli');

// Get argument to enable no publish mode
const argv2 = (process.argv[2] || '').toLowerCase();
const publish = (
	argv2 != 'no-publish'
	&&
	argv2 != 'nopublish'
);

// Ask questions to configure package.json
if (publish)
{
	log('');
	log('IMPORTANT - Package publishing.');
	log('Please choose an available npm package name because it will be published after this step.', true);
	log('You also need to be logged into npm to continue ($ npm login)', true);
	log('You can prefix with your npm login name (@login/package-name) to avoid public name collision.', true);
}
else
{
	log('');
	log('IMPORTANT - Package publishing.');
	log('Auto-publishing to NPM will be disabled.');
	log('Delete .nopublish file after installation to enable publishing when pushing to Git.');
}

log('');
log('Press any key to continue.');
exec("read _ ", {shell: true, stdio: [0, 1, 2]});

log('');
log('Configure package.json :');
log('');
exec('npm init', {stdio: [0, 1, 2]})

// Do not continue if npm init has been aborted
inRealPackage()
? log('Done !\n')
: error('Aborted.')

// Publish to npm for the first time as a public package
if ( publish )
{
	log('Publishing first module version to npm')
	exec('npm publish --access=public', {stdio: [0, 1, 2]});
	log('Done !\n');
}
else
{
	// Create a .nopublish file
	require('fs').writeFileSync('.nopublish', 'Remove this file to enable auto-publishing to NPM when pushing to Git.')
}

// Init docsify now we got enough info
log('Initialising documentation ...');
exec('node node_modules/docsify-cli/bin/docsify init -l doc');
log('Done !\n');

// Clean
exec('rm -f setup.js');
exec('rm -rf src/lib/');
exec('rm -rf TODO.md');
exec('echo "console.log(\'Hello World !\')" > src/index.ts');

// And show doc
log('Available npm scripts : (npm run help)\n');
exec('npm run help --silent', true);