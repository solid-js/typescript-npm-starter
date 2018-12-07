const { log, exec, error } = require('./tools/cli');

const publish = (process.argv[2] || '').toLowerCase() != 'no-publish';

// Ask questions to configure package.json
if (publish)
{
	log('');
	log('IMPORTANT - Package publishing.');
	log('Please choose an available npm package name because it will be published after this step.');
	log('You also need to be logged into npm to continue ($ npm login)');
	log('You can prefix with your npm login name (@login/package-name) to avoid public name collision.');
	log('')
	log('Press any key to continue.');
	require('child_process').spawnSync("read _ ", {shell: true, stdio: [0, 1, 2]});
}

log('');
log('Configure package.json :');
log('');
require('child_process').execSync('npm init', {stdio: [0, 1, 2]});
log('Done !\n');

// Do not continue if npm init has been aborted
if (!require('./tools/cli').inRealPackage()) return;

// Publish to npm for the first time as a public package
if ( publish )
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
exec('echo "console.log(\'Hello World !\')" > src/index.ts');

// And show doc
log('Available npm scripts : (npm run help)\n');
exec('npm run help --silent', true);