const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/index.html'))
});

app.get('/doubling?', (req, res) => {
    res.send((req.query.input) ?
        {recieved: Number(req.query.input), result: Number(req.query.input) * 2} :
        {error: "Please provide an input!"})
});

app.get('/greeter?', (req, res) => {
    const {name, title} = req.query;

    if (!name) {
        res.send({error: "Please provide a name!"});
    }

    if (!title) {
        res.send({error: "Please provide a title!"});
    }

    res.send({welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`});
});

app.get('/appenda/:appendable', (req, res) => {
    res.send({appenda: req.params.appendable + "a"})
});

app.post('/dountil/:what', (req, res) => {
    let number = req.body.until;
    let result = 1;
    if (number === null) {
        res.send({error: "Please provide a number!"})
    }
    for (let i = 1; i < number; i++) {
        if (req.params.what === "sum") {
            result += i;
        } else {
            result *= i;
        }
    }
    res.send({result: result})
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});