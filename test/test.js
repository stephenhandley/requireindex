var assert = require('assert')

var lib = require('./lib')

try {
  var expectations = {
    "ok": lib.bam.m,
    "yea": lib.bar.f,
    "definitely": lib.bar.fing,
    "yes": lib.Foo.l,
    "yep": lib.Foo.ls
  }
  
  var keys = Object.keys(expectations)
  keys.forEach(function(expectation) {
    assert.equal(expectations[expectation](), expectation);
  })
  
  console.log(keys.length + " tests passed.");
  
} catch (error) {
  console.log("Test Failed:");
  console.log("Expected: " + error.expected);
  console.log("  Actual: " + error.actual); 
}