#!/usr/bin/node

const fs = require('fs');
fs.readFile('cisfun', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
