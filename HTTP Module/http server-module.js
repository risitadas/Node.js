const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> its me,hi, i am the problem, its me</h1> <p> Anti-Hero by Taylor Swift </p>');


})

server.listen(port, ()=> {

    console.log(`Server is listening on port ${port}`);
});


