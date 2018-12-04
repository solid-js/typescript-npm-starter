const exec = require('child_process').execSync;
const chalk = require('chalk');

module.exports = {
	/**
	 * Log a bold line in CLI
	 */
	log: ( message ) =>
	{
		console.log( chalk.bold(message) )
	},

	/**
	 * Halt with an error message
	 */
	error: (str, code) =>
	{
		console.error(chalk.red.bold( str ));
		console.error('');
		process.exit( code || 1 );
	},

	/**
	 * Exec a command and return stdout as string.
	 */
	exec: (command, verbose) =>
	{
		const result = exec(command, verbose && {
			stdio: [1, 2]
		});
		return result ? result.toString() : null;
	}
}