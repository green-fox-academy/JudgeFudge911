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
  const sqlRandomId = 'SELECT id FROM questions ORDER BY RAND() LIMIT 1';
  let randomId;
  conn.query(sqlRandomId, (err, rowId) => {
    if (err) {
      res.status(500).json({
        error: "There shound't be an error here. Question id"
      });
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
      }
      res.status(200).json({
        data
      });
    });
  });
});

module.exports = router;
