const { log, exec, error } = require('./tools/cli');

// Ask questions to configure package.json
log('Configure package.json :');
log('IMPORTANT : Please choose an available npm package name because it will be published after this step.');
log('IMPORTANT : You need to be logged into npm to continue ($ npm login)');
log('You can prefix with your npm name to avoid public name collision.');
log('');
require('child_process').execSync('npm init', {stdio: [0, 1, 2]});
log('Done !\n');

// Publish to npm for the first time as a public package
if (process.argv[2] != 'no-publish')
{
	log('Publishing first module version to npm')
	require('child_process').execSync('npm publish --access=public', {stdio: [0, 1, 2]});
	log('Done !\n');
}

// Init docsify now we got enough info
log('Initialising documentation ...');
exec('node node_modules/docsify-cli/bin/docsify init -l doc');
log('Done !\n');

// Clean some files
exec('rm -f setup.js');
exec('rm -rf src/lib/');
exec('echo "console.log(`Hello World`)" > src/index.ts');

// And show doc
log('Available npm scripts : (npm run help)\n');
exec('npm run help --silent', true);