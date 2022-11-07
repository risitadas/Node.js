const url = require('url');

//import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';


console.log(myURL)
console.log(myURL.href)
console.log(myURL.host)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.username)
console.log(myURL.password)
console.log(myURL.port)
console.log(myURL.protocol)
console.log(myURL.hash)
console.log(myURL.origin)

