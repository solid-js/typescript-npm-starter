const { log, exec, error } = require('./tools/cli');

log('Configure package.json :');
require('child_process').execSync('npm init', {stdio: [0, 1, 2]});
log('Done !');

log('Initialising documentation ...');
exec('node node_modules/docsify-cli/bin/docsify init -l doc');
log('Done !');

exec('rm -f setup.js');
log('');
exec('npm run help --silent', true);