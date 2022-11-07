const express = require('express');

const app = express()
const port = 8080 

app.get('/', (req, res) => {

    res.send('you are on your ow kid')
})
app.get('/cgcg', (req, res) => {

    res.send('Superache ~ Conan Gray')
})
app.get('/scsc', (req, res) => {

    res.send('emails i cant send ~ Sabrina Carpenter')
})
app.get('/tsts', (req, res) => {

    res.send('Midnights 3am edition ~ Taylor Swift')
})

app.listen(port, () => {

    console.log(`example app listening on port http://localhost:${port}`);
});
