'use strict';
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const gameRoutes = require('./routes/game');
const questionsRoutes = require('./routes/questions');

app.use('/game', gameRoutes);
app.use('/questions', questionsRoutes);

app.get('/', (req, res) => {
  res.redirect('http://localhost:3000/game');
});

module.exports = app;