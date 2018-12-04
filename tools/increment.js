/**
 *
 */


const {log, exec, error} = require('./cli');
const path = require('path');
const fs = require('fs');

module.exports = {

	semverIncrement: function (version, semverIndex)
	{
		const splittedVersion = version.split('.');
		splittedVersion[ semverIndex ] = parseInt(splittedVersion[ semverIndex ], 10) + 1;
		return splittedVersion.join('.');
	},

	incrementPackage: function (packagePath, semverIndex)
	{
		// Check if package file exists
		if ( !fs.existsSync(packagePath) )
		{
			throw new Error(`Package file ${packagePath} is not found.`, 1);
		}

		// Read package file content
		const packageData = JSON.parse( fs.readFileSync( packagePath ) );

		// Increment version according to semver increment index
		packageData.version = module.exports.semverIncrement(packageData.version, semverIndex);

		// Write new package.json
		fs.writeFileSync(packagePath, JSON.stringify( packageData, null, 2));

		// Return incremented version
		return packageData.version;
	},

	getPackageVersion: function (packagePath)
	{
		return JSON.parse( fs.readFileSync( packagePath ) ).version;
	}
}


// Detect if this script is started from CLI
const thisFilePath = path.resolve( __filename.substr( 0, __filename.lastIndexOf('.') ) ).toLowerCase();
const argvFilePath = path.resolve( process.argv[1] ).toLowerCase();

// Do not continue if not started from CLI (just expose exports for other scripts)
if ( thisFilePath != argvFilePath ) return;

// Get increment name
const incrementName = (process.argv[2] || '').toLowerCase();
const validIncrementNames = [
	'major',
	'minor',
	'patch'
];

// Get increment index and check its validity
const incrementIndex = validIncrementNames.indexOf(incrementName);
if (incrementIndex === -1)
{
	error(`Invalid increment argument. Valid values :\n-> ${validIncrementNames.join(' / ')}\n\nex: npm run increment patch`);
}

// Increment package.json in parent folder
try
{
	module.exports.incrementPackage('package.json', incrementIndex);
}
catch (e) { error( e ) }


