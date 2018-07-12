'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const gameRoutes = require('./API/routes/game');
const questionsRoutes = require('./API/routes/questions');

app.use('/game', gameRoutes);
app.use('/questions', questionsRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'static/game.html'));
});

module.exports = app;
