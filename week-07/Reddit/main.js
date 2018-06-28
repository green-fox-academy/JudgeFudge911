'use strict';

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'reddit',
});


app.get('/hello', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});