// TODO : Utiliser inquirer
// TODO : Le poser sur @zouloux/package-increment ?


const Inquirer = require('inquirer');
const fs = require('fs');

module.exports = {
	/**
	 * @param
	 * @param 
	 */
	semverIncrement: function (pStringVersion, pSemverIndex)
	{
		// Split version semver
		const splittedVersion = packageData.version.split('.');

		const semverIndex = parseInt( incrementSemver.a );

		splittedVersion[ semverIndex ] = parseInt(splittedVersion[ semverIndex ], 10) + 1;

		const newVersion = splittedVersion.join('.');
	},

	start: async function (pPackagePath = 'package.json')
	{
		// Check if package file exists
		if ( !fs.existsSync(pPackagePath) )
		{
			throw new Error(`Package file ${pPackagePath} is not found.`, 1);
		}

		// Read package file content
		const packageData = JSON.parse( fs.readFileSync( packagePath ) );

		// Show current version of package file
		console.log(`\nCurrent version is ${packageData.version}.\n`);

		// Ask for semver increment
		const incrementSemver = await Inquirer.prompt({
			name: 'a',
			type: 'list',
			message: 'Increment package.json version before publish ?',
			choices : [
				{
					value: 'exit',
					name: 'Exit'
				},
				{
					value: '0',
					name: 'Major X.0.0 (any breaking change in API)',
				},
				{
					value: '1',
					name: 'Minor 0.X.0 (any feature change in API)',
				},
				{
					value: '2',
					name: 'Patch 0.0.X (only patched or updated non breaking behavior)',
				}
			]
		});

		// Exit process
		if (incrementSemver.a == 'exit') process.exit( 0 );

		packageData.version = newVersion;

		fs.writeFileSync(packagePath, JSON.stringify( packageData, null, 2));

		console.log(`\nIncremented package.json version to ${ newVersion }\n`);
	}
}

const checkIfRunningCLI = function ()
{
	const path = require('path');
	var filename = 'hello.html';

	path.parse(filename).name;
}

console.log( __filename );
console.log( process.argv[1] );





