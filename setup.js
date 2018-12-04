const { log, exec, error } = require('tools/cli');

log('Configure package.json :');
exec('npm init');
log('Done !');

log('Initialising documentation ...');
exec('node node_modules/docsify-cli/bin/docsify init -l doc');
log('Done !');

exec('rm setup.js');

exec('npm run help', true);