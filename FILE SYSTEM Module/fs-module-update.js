const fs = require('fs');

fs.appendFile('demofile5.txt', 'this is me,demonstrating fs.appendFile() method for updating files,from the File System Module', function(err) {

   // if (arr) throw err;
    console.log('updated using fs.appendFile() method');
});


fs.writeFile('demofile6.txt', 'this is me,demonstrating fs.writeFile() method for updating files,from the File System Module', function(err) {

   // if (err) throw err;
    console.log('updated using fs.writeFile() method');
});