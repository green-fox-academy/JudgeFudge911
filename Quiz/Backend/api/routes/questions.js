'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Question = require('../models/question');

router.get('/', (req, res) => {
  Question.find()
    .exec()
    .then(questions => res.status(200).json(questions))
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/', (req, res) => {
  const questionId =
    req.body.id !== undefined ? req.body.id : mongoose.Types.ObjectId();
  const data = { question: req.body.question, answers: req.body.answers };
  Question.findOneAndUpdate({ _id: questionId }, data, { upsert: true })
    .exec()
    .then(result => {
      result === null
        ? res.status(200).json({
            _id: questionId,
            question: data.question,
            answers: data.answers
          })
        : res.status(200).json({ result });
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Question.remove({ _id: id })
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
