const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname(__filename);
const a4 = path.normalize('C:\\temp\\myfile.html');
const a5 = path.join('C:','temp','bar','myfile.html');
const a6 = path.isAbsolute('\\temp\\myfile.html')
const a7 = path.format({
    dir: 'C:\\temp\\notes',
    base: 'myfile.txt'
  });

console.log(a1)
console.log(a2)
console.log(a3)
console.log(__filename, a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)
console.log(path.delimiter);
