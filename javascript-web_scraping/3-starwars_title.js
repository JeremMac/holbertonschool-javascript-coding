#!/usr/bin/node

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
