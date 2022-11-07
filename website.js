const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html'); 
        res.end(data.toString());
    }
    else if(req.url == '/huhu'){
        res.statusCode = 200;
        res.end('<h1> karma is a cat purring in my lap cause it loves me </h1> <p> Karma ~ Taylor Swift </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> what a girl`s gonna do? a diamond`s gotta shine </h1> <p> Bejeweled ~ Taylor Swift </p>');
    } 
    else{
        //res.moomie();
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> still processing how 2023 is <2 months </p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});