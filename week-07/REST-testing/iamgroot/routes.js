const express = require('express');
const app = express();

app.get('/groot?', (req, res) => {
    if(!req.query.message){
        res.send({error: "I am Groot!"})
    }
    res.send({recieved: req.query.message, translated: "I am Groot!"})
});

module.exports = app;