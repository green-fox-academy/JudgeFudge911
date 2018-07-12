const express = require('express');
const router = express.Router();
const query = require('../database/questionsQueries');

router.get('/', query.getAllQuestions);

router.post('/', query.addQuestion);

router.delete('/:id', query.deleteQuestion);

module.exports = router;
