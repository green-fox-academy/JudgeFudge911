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


app.get('/posts', (req, res) => {
    //Headers
    //Response
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    let sql = 'SELECT * FROM post;';
    connection.query(sql, (err, posts) => {
        if (err){
            console.log("Error: GET /posts");
            return;
        }
        res.json({
            posts
        })
    });

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});