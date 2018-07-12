const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

router.get('/', (req, res) => {
  const sqlRandomId = 'SELECT id FROM questions ORDER BY RAND() LIMIT 1';
  let randomId;
  conn.query(sqlRandomId, (err, rowId) => {
    if (err) {
      res.status(500).json({
        error: "There shound't be an error here. Question id"
      });
      return;
    }
    randomId = rowId[0].id;
    let sqlRandomQuestion = `SELECT * FROM questions
    LEFT JOIN answers ON questions.id=answers.question_id
    Where questions.id=${randomId}`;
    conn.query(sqlRandomQuestion, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There shound't be an error here. Question"
        });
        return;
      }
      let result = {};
      let firstAnswer = data[0];
      result.id = firstAnswer.question_id;
      result.question = firstAnswer.question;
      result.answers = [];
      for (const answer of data) {
        result.answers.push({
          question_id: result.id,
          id: answer.id,
          answer: answer.answer,
          is_correct: answer.is_correct
        });
      }
      res.status(200).json(result);
    });
  });
});

module.exports = router;
