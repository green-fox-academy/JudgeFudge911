'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'bookstore',
});

app.get('/test',  (req, res) => {
    const sql = 'SELECT book_name from book_mast;';

    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }

        res.json({
            authors: rows,
        });
    });
});

app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});
