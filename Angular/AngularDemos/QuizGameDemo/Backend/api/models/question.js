'use strict';
const database = require('../../database');

const questionSchema = database.Schema({
    id: database.Schema.Types.ObjectId,
    description: String,
    answers: [String, String, String, String],
    correctId: Number
});

module.exports = database.model('Question', questionSchema);
