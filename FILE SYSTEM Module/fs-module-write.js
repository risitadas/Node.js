const fs = require('fs');

fs.appendFile('demofile2.txt', 'This is a file demonstrating the "create files using fs.appendFile()" in Node.js File System Module', function(err) {

    if (err) throw err;
    console.log('created using fs.appendFile()');
});


fs.open('demofile3.txt', 'w', function(err, file) {

    if (err) throw err;
    console.log('created using fs.open()')
});


fs.writeFile('demofile4.txt', 'This is a file demonstrating the "create files using fs.writeFile()" in Node.js File System Module', function(err) {

    if (err) throw err;
    console.log('created using fs.writeFile()')
});