const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path,
      'utf-8',
      (error, results) => {
        if (error) {
          reject(Error('Cannot load the database'));
        } else {
          const lines = results.split('\n');
          let numberStudents = 0;
          const groupedFields = {};

          const getLines = () => {
            for (const line of lines) {
              numberStudents += 1;
              const [firstName, lastName, age, field] = line.split(',');
              if (field !== 'field') {
                if (field in groupedFields) {
                  groupedFields[field].listNames += `, ${firstName}`;
                  groupedFields[field].noStudents += 1;
                } else {
                  groupedFields[field] = { listNames: firstName, noStudents: 1 };
                }
              }
            }
          };
          let message = '';
          const display = async () => {
            getLines();
            let newLine = `Number of students: ${numberStudents}`;
            console.log(newLine);
            message += `${newLine}\n`;
            for (const [field, value] of Object.entries(groupedFields)) {
              newLine = `Number of students in ${field}: ${value.noStudents}. List: ${value.listNames}`;
              console.log(newLine);
              message += `${newLine}\n`;
            }
          };

          display();
          resolve(message);
        }
      });
  });
  return promise;
}

module.exports = countStudents;
