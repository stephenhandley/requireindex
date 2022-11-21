'use strict'

var assert = require('assert');
var lib = require('./lib');

assert.equal(lib.bam.m(), 'ok', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.bar.f(), 'yea', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.bar.fing(), 'definitely', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.Foo.l(), 'yes', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.Foo.ls(), 'yep', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.bam.n(), 'ack', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.bar.fed.again(), 'again', 'requireindex should properly include files parallel to index.js and maintain structure');
assert.equal(lib.bar.fed.somemore(), 'somemore', 'requireindex should properly include files parallel to index.js and maintain structure');

assert.equal('_private' in lib, false, 'ignore _ prefixed files');

assert.equal('ignored' in lib.bar.fed, false, 'not include files not mentioned when second array argument is used');

assert.equal('not_javascript' in lib, false, 'ignore non javascript files');

assert.equal(Object.keys(lib)[0], 'bam', 'sort files by lowercase alpha of the filename /1');
assert.equal(Object.keys(lib)[1], 'bar', 'sort files by lowercase alpha of the filename /2');
assert.equal(Object.keys(lib)[2], 'Foo', 'sort files by lowercase alpha of the filename /3');

assert.equal('.also_private' in lib, false, 'ignore dot files');
