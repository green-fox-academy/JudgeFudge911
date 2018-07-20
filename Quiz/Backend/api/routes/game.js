'use strict';
const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', (req, res) => {
  Question.countDocuments()
    .exec()
    .then(count => {
      const random = Math.floor(Math.random() * count);
      Question.findOne()
        .skip(random)
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }));
    })
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
