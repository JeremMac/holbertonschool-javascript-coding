#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;
let count = 0;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const filmsData = JSON.parse(body).results;
    for (const result of filmsData) {
      for (const characters of result.characters) {
        if (characters.includes(characterId)) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
