const fs = require('fs');

fs.rename('demofile7.txt', 'demofile7renamed.txt', function(err) {

	if (err) throw err;
	console.log("file renamed using the fs.rename() method");
});
