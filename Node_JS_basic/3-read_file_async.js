const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const results = {
      numberOfStudents: 0,
      fields: {}
    };

    const stream = fs.createReadStream(path);

    stream.on('error', () => {
      reject(new Error('Cannot load the database'));
    });

    stream.pipe(csv())
      .on('data', (data) => {
        results.numberOfStudents++;
        for (const field in data) {
          if (field !== 'firstname' && data[field]) {
            if (!results.fields[field]) {
              results.fields[field] = [];
            }
            results.fields[field].push(data[field]);
          }
        }
      })
      .on('end', () => {
        console.log(`Number of students: ${results.numberOfStudents}`);
        for (const field in results.fields) {
          console.log(`Number of students in ${field}: ${results.fields[field].length}. List: ${results.fields[field].join(', ')}`);
        }
        resolve(results);
      });
  });
}

countStudents('database.csv')
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error.message);
  });
