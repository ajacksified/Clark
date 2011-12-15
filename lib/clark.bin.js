#!/usr/bin/env node

var data, clark, a;
clark = require('clark').clark;
data = [];

for(a in process.argv){
  if(a > 1) // ignore name and 'executable'
    data.push(process.argv[a >> 0]);
}

process.stdout.write(clark(data) + "\n");
