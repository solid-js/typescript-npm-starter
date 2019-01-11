# Tests and dev

### Dev mode

Before writing unit tests, you may want to try different pieces of code and API ideas.
<br>Start by editing `tests/dev.js`. It requires your library's entry point so you can use it.

To compile sources and start `dev.js` it in your console :
<br>`npm run dev`

!> ES Modules are not compiled to compile faster. Update packages.json script to re-enable them if needed.


### Unit tests

Unit tests are launched before each commit, to check library's integrity.
<br>They are in `tests/tests.js` and are made with [Mocha](https://mochajs.org/).

- [Mocha doc](https://mochajs.org/#getting-started)
- [Assert doc](https://www.npmjs.com/package/assert)

?> Unit tests are important for critical libraries (using file system for example).
They are optional but do not forget this part to create steady libraries !
Check about **Tests Driven Development** to know more.