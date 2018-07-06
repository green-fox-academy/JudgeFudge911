'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

function createAbsolutePath(relativePath) {
  return path.join(__dirname, relativePath);
}

app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/images', express.static(path.join(__dirname, 'assets/images')));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
  if (authentication()) {
    res.redirect('http://localhost:3000/posts');
  }
  res.sendFile(createAbsolutePath('/views/home.html'));
});

app.get('/posts/add', (req, res) => {
  res.sendFile(createAbsolutePath('/views/add.html'));
});

app.post('/posts/add', (req, res) => {
  let sql = `INSERT INTO posts (title, url, user_id)
  VALUES ('${req.body.title}', '${
    req.body.url
  }', (SELECT user_id FROM users WHERE name='${req.headers.username}'))`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log('Error: POST /posts');
    }
    res.json({ message: 'ok' });
  });
});

app.get('/posts/modify', (req, res) => {
  res.sendFile(createAbsolutePath('/views/modify.html'));
});

app.put('/posts/modify', (req, res) => {
  let sql = `UPDATE posts
    SET title = '${req.body.title}',
    url = '${req.body.url}'
    WHERE post_id = '${req.body.post_id}'`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log('Error: POST /posts');
    }
    res.json({ message: 'ok' });
  });
});

app.get('/posts', (req, res) => {
  res.sendFile(createAbsolutePath('/views/posts.html'));
});

app.put('/posts/:id/upvote', (req, res) => {
  let sql = `UPDATE posts
    SET score = score+1
    WHERE post_id = ${req.params.id};`;
  conn.query(sql, (err, upvoted) => {
    if (err) {
      console.log('Error: put /posts/:id/upvote');
      return;
    }
    let resSql = `SELECT post_id, title, url, UNIX_TIMESTAMP(timestamp) AS timestamp, score FROM posts WHERE post_id = ${
      req.params.id
    }`;
    conn.query(resSql, (err, upvotedPost) => {
      if (err) {
        console.log('Error: PUT /posts/id/upvote inner SQL');
      }
      res.json(upvotedPost);
    });
  });
});

app.put('/posts/:id/downvote', (res, req) => {});

app.get('/data/posts', (req, res) => {
  if (req.headers.username === '') {
    res.status(401).send();
    return;
  }
  // vote JOIN votes USING(post_id) WHERE votes.user_id='${req.headers.username}'
  let sql = `SELECT post_id, title, url, timestamp, score, name FROM posts JOIN users USING(user_id)`;
  conn.query(sql, (err, posts) => {
    if (err) {
      res.json({
        posts: 'error message'
      });
    }
    // console.log(posts);
    res.json(posts);
  });
});

app.delete('/posts', (req, res) => {
  console.log(req.headers.delete_id);

  let sql = `DELETE posts, votes FROM posts LEFT   JOIN votes USING(post_id) WHERE post_id=${
    req.headers.delete_id
  }`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log('Error: DELETE /posts');
    }
    res.json({
      message: 'ok'
    });
  });
});

app.get('/signin', (req, res) => {
  res.sendFile(createAbsolutePath('/views/signIn.html'));
});

app.get('/data/users', (req, res) => {
  let sql = `SELECT * FROM users`;
  conn.query(sql, (err, users) => {
    if (err) {
      console.log('Error: /data/users');
      return;
    }
    res.json(users);
  });
});

app.get('/signup', (req, res) => {
  res.sendFile(createAbsolutePath('/views/signup.html'));
});

app.post('/signup', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
