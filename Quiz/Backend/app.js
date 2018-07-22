'use strict';
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const gameRoutes = require('./api/routes/game');
const questionsRoutes = require('./api/routes/questions');

app.use('/api/game', gameRoutes);
app.use('/api/questions', questionsRoutes);

module.exports = app;
