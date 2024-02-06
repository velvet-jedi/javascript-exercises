const helloWorld = require('./helloWorld');
/** import the code file that should be tested */

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
