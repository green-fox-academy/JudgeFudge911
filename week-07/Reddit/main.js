'use strict';

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'reddit',
});

app.get('/posts', (req, res) => {
    res.status(200);
    let sql = 'SELECT id, title, url, UNIX_TIMESTAMP(timestamp) AS timestamp, score  FROM post;';
    connection.query(sql, (err, posts) => {
        if (err) {
            console.log("Error: GET /posts");
            return;
        }
        res.render('posts', {posts});
    });
});

app.post('/posts', jsonParser, (req, res) => {
    let userInput = req.body;
    let sql = `INSERT INTO post (title, url) VALUES ('${userInput.title}', '${userInput.url}')`;
    connection.query(sql, (err, post) => {
        if (err) {
            console.log("Error: POST /posts");
            return;
        }
        let resSql = `SELECT id, title, url, UNIX_TIMESTAMP(timestamp) AS timestamp, score FROM post WHERE id = ${post.insertId}`;
        connection.query(resSql, (err, addedPost) => {
            if (err) {
                console.log('Error: POST /posts inner sql');
            }
            res.json(addedPost);
        });
    });
});

app.put('/posts/:id/upvote', jsonParser, (req, res) => {
    let postId = req.params.id;
    let sql = `UPDATE post SET score = score + 1 WHERE id = ${postId};`;
    connection.query(sql, (err, post) => {
        if (err) {
            console.log('Error: PUT upvote');
            return;
        }
        let resSql = `SELECT id, title, url, UNIX_TIMESTAMP(timestamp) AS timestamp, score FROM post WHERE id = ${postId}`;
        connection.query(resSql, (err, upvotedPost) => {
            if (err) {
                console.log('Error: PUT upvote inner sql');
            }
            res.json(upvotedPost);
        });
    });
});

app.put('/posts/:id/downvote', jsonParser, (req, res) => {
    let postId = req.params.id;
    let sql = `UPDATE post SET score = score - 1 WHERE id = ${postId};`;
    connection.query(sql, (err, post) => {
        if (err) {
            console.log('Error: PUT downvote');
            return;
        }
        let resSql = `SELECT id, title, url, UNIX_TIMESTAMP(timestamp) AS timestamp, score FROM post WHERE id = ${postId}`;
        connection.query(resSql, (err, downvotedPost) => {
            if (err) {
                console.log('Error: PUT downvote inner sql');
            }
            res.json(downvotedPost);
        });
    });
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

