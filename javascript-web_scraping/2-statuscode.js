#!/usr/bin/node

const url = process.argv[2];
const request = require('request');
request(url, (error, response) => {
  console.log('code:', response.statusCode);
});
