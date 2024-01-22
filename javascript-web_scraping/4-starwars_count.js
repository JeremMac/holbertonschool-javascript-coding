#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const filmsData = JSON.parse(body);
    const filmsWithWedgeAntilles = filmsData.results.filter(film => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`));
    console.log(filmsWithWedgeAntilles.length);
  }
});
