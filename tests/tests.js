/**
 * Mocha doc : https://mochajs.org/#getting-started
 * Assert doc : https://www.npmjs.com/package/assert
 */
const assert = require('assert');

// TODO : Logs utils ?

describe('Main test', () =>
{
	it('Should test this', done =>
	{
		// equal check
		assert.equal([1, 2].length, 2, 'Bad length');
		done();
	});
});