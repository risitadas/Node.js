const fs = require('fs');

fs.readFile('demofile1.txt','utf-8',function(err, data){

    console.log(err, data)

})

const a = fs.readFileSync('demofile1.txt')
console.log(a)
console.log(a.toString())


console.log("just finished reading the file")