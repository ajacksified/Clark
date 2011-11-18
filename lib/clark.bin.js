#!/usr/local/bin/node

var app, data, index, _;
_ = require('underscore');
clark = require('clark').clark;

index = 0;
_.find(process.argv, function(a, i) {
  index = i;
  return !_.isNaN(parseInt(a));
});

data = _.rest(process.argv, index);
process.stdout.write(clark.sparks(data) + "\n");
