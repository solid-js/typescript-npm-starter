
// Getting base (repo name) from package.json
const base = require(__dirname + '/tools/get-repo-base.js')('/');

// With $ npm run doc:publish
// Documentation will be deployed https://{organisation-name}.github.io/{repo-name}/

export default
{
	// Configure title of doc here
	title: '',
	description: '',

	// Configure theme here
	// https://github.com/pedronauck/docz/tree/master/packages/docz-theme-default
	themeConfig: {
		colors: {
		}
	},

	// Config for github.io
	base,
	src: './doc/',
  	hashRouter: true
}