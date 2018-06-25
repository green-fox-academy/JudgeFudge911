'use strict';
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

function isVowel(char) {
    return ['a', 'u', 'o', 'e', 'i'].includes(char.toLowerCase());
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
    let resultMultiply = 1;
    let resultDoubled = [];

    for (let i = 0; i < numbers.length; i++) {
        if (what === "sum") {
            resultSum += numbers[i];
            if (i === numbers.length - 1) {
                res.send({result: resultSum})
            }
        } else if (what === "multiply") {
            resultMultiply *= numbers[i];
            if (i === numbers.length - 1) {
                res.send({result: resultMultiply})
            }
        } else {
            resultDoubled.push(numbers[i] * 2);
            if (i === numbers.length - 1) {
                res.send({result: resultDoubled})
            }
        }
    }
});

app.post('/sith', (req, res) => {
    if (isNullOrUndefined(req.body)) {
        res.send({error: "Feed me some text you have to, padawan young you are. Hmmm."});
    }
    let trimmedText = req.body.text.replace(". ", ".");
    let sentences = trimmedText.split(".");
    let yodafiedText = "";
    let random = ["Hmmm.", "Arrgh."];
    //Only works with . not with ? or !
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].split(" ");
        words.forEach((part, index) => {
            words[index] = part.toLowerCase();
        });
        for (let j = 0; j < words.length; j += 2) {
            if (j === 0) {
                yodafiedText += words[j + 1].charAt(0).toUpperCase() + words[j + 1].slice(1) + " ";
                yodafiedText += words[j] + " ";
            } else {
                if (words.length % 2 !== 0 && j > words.length - 2) {
                    yodafiedText += words[j];
                    break;
                }
                yodafiedText += words[j + 1] + " ";
                yodafiedText += words[j] + " ";
            }
        }
        yodafiedText += (Math.round(Math.random()) === 0) ?
            ". " + random[Math.round(Math.random())] + " " :
            ". " + random[Math.round(Math.random())] + " " + random[Math.round(Math.random())] + " ";
    }
    res.send({sith_text: yodafiedText});
});

app.post('/translate', (req, res) => {
    if (isNullOrUndefined(req.body.text) && isNullOrUndefined(req.body.lang)) {
        res.send({error: "I can't translate that!"})
    }
    let text = req.body.text;
    let translatedLanguage = "teve";
    let translatedText = "";
    for (let char of text.split("")) {
        translatedText = translatedText + char;
        if (isVowel(char)) {
            translatedText += "v" + char.toLowerCase();
        }
    }
    res.send({translated: translatedText, lang: translatedLanguage})
});

module.exports = app;