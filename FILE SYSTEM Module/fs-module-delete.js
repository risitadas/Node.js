const fs = require('fs');

fs.unlink('demofile0.txt', function(err) {

    if (err) throw err;
    console.log('deleted file using fs.unlink() method');
});