'use strict';
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const PORT = 8080;

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


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
    res.send({appended: req.params.appendable + "a"})
});

app.post('/dountil/:what', (req, res) => {
    if (isNullOrUndefined(req.body)) {
        res.send({error: "Please provide a number!"})
    }

    let number = req.body.until;
    let result = req.params.what === "sum" ? 0 : 1;
    for (let i = result; i <= number; i++) {
        req.params.what === "sum" ? result += i : result *= i;
    }
    res.send({result: result})
});

app.post('/arrays', (req, res) => {
    if (isNullOrUndefined(req.body.what)) {
        res.send({error: "Please provide what to do with the numbers!"});
    }
    if (isNullOrUndefined(req.body.numbers)) {
        res.send({error: "Please provide what to do with the numbers!"});
    }
    let what = req.body.what;
    let numbers = req.body.numbers;
    let resultSum = 0;
    let resultMultipy = 1;
    let resultDoubled = [];

    for (let i = 0; i < numbers.length; i++) {
        if (what === "sum") {
            resultSum += numbers[i];
            if (i === numbers.length-1) {
                res.send({result: resultSum})
            }
        } else if (what === "multiply") {
            resultMultipy *= numbers[i];
            if (i === numbers.length-1) {
                res.send({result: resultMultipy})
            }
        } else {
            resultDoubled.push(numbers[i] * 2);
            if (i === numbers.length-1) {
                res.send({result: resultDoubled})
            }
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});