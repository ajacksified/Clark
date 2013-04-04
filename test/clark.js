var assert = require('chai').assert,
    clark = require('../src/clark');

describe('clark', function(){
  it('should export itself as a module', function(){
    assert.isDefined(clark);
  });

  it('should export itself as a function', function(){
    assert.isFunction(clark);
  });

  it('should take in an array and export asciigraphs', function(){
    assert.strictEqual(clark([1,2,3,4,5,6]),'▁▂▃▄▅▇');
    assert.strictEqual(clark([1,9,6,2,1,3,6,5,3,7,6,9]),'▁▇▄▁▁▂▄▄▂▅▄▇');
  });
});

