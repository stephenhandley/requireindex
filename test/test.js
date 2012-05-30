var assert = require('assert')

var lib = require('./lib')

try {
  var expectations = {
    "ok": lib.bam.m,
    "yea": lib.bar.f,
    "definitely": lib.bar.fing,
    "yes": lib.Foo.l,
    "yep": lib.Foo.ls,
    "ack": lib.bam.n,
    "again": lib.bar.fed.again,
    "somemore": lib.bar.fed.somemore
  }
  
  var keys = Object.keys(expectations)
  keys.forEach(function(expectation) {
    assert.equal(expectations[expectation](), expectation);
  })
    
  assert.equal(('_private' in lib), false);
  assert.equal(('ignored' in lib.bar.fed), false);

  assert.equal(Object.keys(lib)[0], 'bam');

  console.log("All tests passed.");
  
} catch (error) {
  console.log("Test Failed.");
  console.log("   Expected: " + error.expected);
  console.log("     Actual: " + error.actual); 
}