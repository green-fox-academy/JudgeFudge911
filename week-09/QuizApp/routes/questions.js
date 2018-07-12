const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

router.get('/', (req, res) => {
  const sqlQuestions = 'SELECT * FROM questions';
  conn.query(sqlQuestions, (err, data) => {
    if (err) {
      res.status(500).json({
        Error:
          'There was an error while getting the questions from the database'
      });
      return;
    }
    res.status(200).json(data);
  });
});

router.post('/', (req, res) => {
  let sqlInsertQuestion = `BEGIN;
  INSERT INTO questions (question)
  VALUES (?);
  INSERT INTO answers (question_id, answer, is_correct)
  VALUES
    (LAST_INSERT_ID(), ?, ?),
    (LAST_INSERT_ID(), ?, ?),
    (LAST_INSERT_ID(), ?, ?),
    (LAST_INSERT_ID(), ?, ?);
  COMMIT;`;
  const values = [
    req.body.question,
    req.body.answer1.answer,
    req.body.answer1.is_correct,
    req.body.answer2.answer,
    req.body.answer2.is_correct,
    req.body.answer3.answer,
    req.body.answer3.is_correct,
    req.body.answer4.answer,
    req.body.answer4.is_correct
  ];
  conn.query(sqlInsertQuestion, values, (err, data) => {
    if (err) {
      res.status(500).json({
        Error: 'There was an error while inserting new question to the database'
      });
      return;
    }
    res.status(200).json({
      message: 'Question was added.'
    });
  });
});

router.delete('/:id', (req, res) => {
  const sqlDeleteQuestion = `DELETE FROM questions WHERE id=${req.params.id}`;
  conn.query(sqlDeleteQuestion, (err, deletedQuestion) => {
    if (err) {
      res.status(500).json({
        Error: 'There was an error while deleting question from the database'
      });
      return;
    }
    res.status(204);
  });
});

module.exports = router;
