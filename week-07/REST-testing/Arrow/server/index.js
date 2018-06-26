'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    if (req.query) {
        let distance = parseFloat(req.query.distance);
        let time = parseFloat(req.query.time);
        res.json({distance, time, speed: distance / time})
    }
    res.json({error: "Not valid input"})
});

module.exports = app;