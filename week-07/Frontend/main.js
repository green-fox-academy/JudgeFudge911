const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/index.html'))
});

/*app.get('/doubling', (req, res) => {
        res.send(JSON.stringify({error: "Please provide an input!"}));
});*/

app.get('/doubling?', (req, res) => {
    res.send(JSON.stringify((req.query.input) ?
        {recieved: Number(req.query.input), result: Number(req.query.input) * 2} :
        {error: "Please provide an input!"}))
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});