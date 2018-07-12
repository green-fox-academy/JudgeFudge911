const express = require('express');
const router = express.Router();
const query = require('../database/gamesQueries');

router.get('/', query.getRandomQuestion);

module.exports = router;
