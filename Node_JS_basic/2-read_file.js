const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const lines = data.split('\n');

    // Initialize variables.
    let csCount = 0;
    const csList = [];
    let sweCount = 0;
    const sweList = [];

    for (const line of lines) {
      const fields = line.split(',');
      const [firstName, lastName, age, field] = fields;

      if (firstName && lastName && age && field) {
        if (field === 'CS') {
          csCount += 1;
          csList.push(firstName);
        } else if (field === 'SWE') {
          sweCount += 1;
          sweList.push(firstName);
        }
      }
    }

    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
