const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      let numberStudents = 0;
      const groupedFields = {};
      fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
          const { field } = row;
          if (field in groupedFields) {
            groupedFields[field].listNames += `, ${row.firstname}`;
            groupedFields[field].noStudents += 1;
          } else {
            groupedFields[field] = { listNames: row.firstname, noStudents: 1 };
          }
          numberStudents += 1;
        })
        .on('end', () => {
          console.log(`Number of students: ${numberStudents}`);
          for (const [field, value] of Object.entries(groupedFields)) {
            console.log(`Number of students in ${field}: ${value.noStudents}. List: ${value.listNames}`);
          }
        });
    }
  });
}
module.exports = countStudents;
