/**
 * Increment any package.json version following semver.
 *
 * Use from an other node script :
 * const {semverIncrement, incrementPackage, getPackageVersion} = require('./increment')
 *
 * Use from CLI to increment package.json version :
 * node increment {major|minor|patch}
 *
 * Semver notation Major.Minor.Patch :
 * Major is X.0.0
 * Minor is 0.X.0
 * Patch is 0.0.X
 * 
 * Semver Index :
 * 0 for major
 * 1 for minor
 * 2 for patch
 */

const { log, exec, error } = require('./cli');
const { incrementPackage } = require('@zouloux/semver-increment')
const { processify } = require('processify')
const path = require('path');
const fs = require('fs');

processify({
	0: 'patch',
	1: 'package.json'
}, function (args)
{
	// Get increment name
	const incrementName = args[0].toLowerCase();
	const validIncrementNames = [
		'major',
		'minor',
		'patch'
	];

	// Get increment index and check its validity
	const incrementIndex = validIncrementNames.indexOf( incrementName );
	if (incrementIndex === -1)
	{
		error(`Invalid increment argument. Valid values :\n-> ${validIncrementNames.join(' / ')}\n\nex: npm run increment patch`);
	}

	// Increment package.json
	const newVersion = incrementPackage(args[1], incrementIndex);
	log(`Incremented package to ${newVersion}`);

	// Add udpated package.json to git
	exec(`git add package.json`);
});

