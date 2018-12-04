const { log, exec, error } = require('./tools/cli');

// Ask questions to configure package.json
log('Configure package.json :');
require('child_process').execSync('npm init', {stdio: [0, 1, 2]});
log('Done !\n');

// Init docsify now we got enough info
log('Initialising documentation ...');
exec('node node_modules/docsify-cli/bin/docsify init -l doc');
log('Done !\n');

// Remove this file
exec('rm -f setup.js');

// And show doc
log('\nAvailable npm scripts : (npm run help)');
exec('npm run help --silent', true);