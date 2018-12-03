/**
 * Mocha doc : https://mochajs.org/#getting-started
 * Assert doc : https://www.npmjs.com/package/assert
 */
const assert = require('assert');

/**
 * Create your lib's test here.
 * You can use compiled js files.
 */
describe('Main test', () =>
{
	it('Should test this', done =>
	{
		// equal check
		assert.equal([1, 2].length, 2, 'Bad length');
		done();
	});
});