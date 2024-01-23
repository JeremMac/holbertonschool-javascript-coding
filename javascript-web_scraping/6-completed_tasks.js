#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const completedTasksByUser = {};

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const tasks = JSON.parse(body);
  for (const task of tasks) {
    if (task.completed === true) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId] += 1;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  }
  console.log(completedTasksByUser);
});
