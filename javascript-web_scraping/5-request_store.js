#!/usr/bin/node

const url = process.argv[2];
const file_path = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(file_path, body, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
