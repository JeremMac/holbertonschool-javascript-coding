#!/usr/bin/node

const url = process.argv[2];
const request = require('request');
request(url, (error, response) => {
  if (error) {
    return;
  }
  console.log('code:', response.statusCode);
});
