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
    }
    res.status(200).json(data);
  });
});

router.post('/', (req, res) => {
  const sql = 'INSERT INTO questions';
});

router.delete('/:id', (req, res) => {
  const sqlDeleteQuestion = `DELETE * FROM questions WHERE id=${req.params.id}`;
  conn.query(sqlDeleteQuestion, (err, deletedQuestion) => {
    if (err) {
      res.status(500).json({
        Error: 'There was an error while deleting question from the database'
      });
    }
    res.status(204);
  });
});

module.exports = router;
