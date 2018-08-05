'use strict';
const database = require('../../database');

const questionSchema = database.Schema({
    _id: database.Schema.Types.ObjectId,
    description: String,
    answers: [
        { answer: String, is_correct: Boolean },
        { answer: String, is_correct: Boolean },
        { answer: String, is_correct: Boolean },
        { answer: String, is_correct: Boolean }
    ]
});

module.exports = database.model('Question', questionSchema);
