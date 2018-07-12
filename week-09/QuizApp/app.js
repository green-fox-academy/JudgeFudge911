const express = require('express');
const app = express();

const gameRoutes = require('./routes/game');
const questionsRoutes = require('./routes/questions');

app.use('/game', gameRoutes);
app.use('/questions', questionsRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'ok'
    })
})

module.exports = app;
