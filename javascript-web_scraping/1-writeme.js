#!/usr/bin/node

const args = process.argv[2];
const data = process.argv[3];
const fs = require('fs');
fs.writeFile(args, data, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
