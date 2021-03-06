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
    const questionId = req.body._id !== '' ? req.body._id : mongoose.Types.ObjectId();
    const data = { description: req.body.description, answers: req.body.answers, correctId: req.body.correctId };
    Question.findOneAndUpdate({ _id: questionId }, data, { upsert: true })
        .exec()
        .then(result => {
            result === null
                ? res.status(200).json({
                      _id: questionId,
                      description: data.description,
                      answers: data.answers,
                      correctId: +data.correctId
                  })
                : res.status(200).json({ result });
        })
        .catch(err => {
            console.log(`ERROR Received ${req.body}\nStacktrace: ${err}`);
            res.status(500).json({ error: err });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Question.remove({ _id: id })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => {
            console.log(`ERROR Received ${req.body}\nStacktrace: ${err}`);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
