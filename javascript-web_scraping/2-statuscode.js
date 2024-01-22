#!/usr/bin/node

const url = process.argv[2];
const request = require('request');
request(url, (err, data) => {
  if (err) {
    console.log('code: ', data.statusCode);
    return;
  }
  console.log('code:', data.statusCode);
});
