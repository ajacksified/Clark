#!/usr/bin/env node

var data, clark, a;
clark = require('../src/clark');
data = [];

for(a in process.argv){
  if(a > 1){ // ignore name and 'executable'
    if(process.argv[a].indexOf(',') > -1){
      data = process.argv[a].split(',');
      break;
    }else{
      data.push(process.argv[a]);
    }
  }
}

try{
  process.stdout.write(clark(data) + "\n");
  process.exit(0);
}catch(e){
  process.stdout.write(e.message);
  process.exit(1);
}
