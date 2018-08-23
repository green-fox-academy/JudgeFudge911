'use strict';
const database = require('../../database');

const questionSchema = database.Schema({
    id: database.Schema.Types.ObjectId,
    description: String,
    answers: [
        { description: String, isCorrect: Boolean },
        { description: String, isCorrect: Boolean },
        { description: String, isCorrect: Boolean },
        { description: String, isCorrect: Boolean }
    ]
});

module.exports = database.model('Question', questionSchema);
