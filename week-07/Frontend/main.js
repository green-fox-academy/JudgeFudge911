const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/index.html'))
});

app.get('/doubling?', (req, res) => {
    res.send(JSON.stringify((req.query.input) ?
        {recieved: Number(req.query.input), result: Number(req.query.input) * 2} :
        {error: "Please provide an input!"}))
});

app.get('/greeter?', (req, res) => {
    if(req.query.name && req.query.title) {
        res.send(JSON.stringify({welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`}))
    } else {
        res.send(JSON.stringify({error: `Please provide a name!`}))
    }
});

app.get('/appenda/:appendable', (req, res) => {
    res.send(JSON.stringify({appenda: req.params.appendable + "a"}))
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});