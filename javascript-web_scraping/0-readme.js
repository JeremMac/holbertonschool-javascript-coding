#!/usr/bin/node

const args = process.argv[2];
const fs = require('fs');
fs.readFile(args, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
