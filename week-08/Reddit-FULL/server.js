"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");
const path = require("path");

function createAbsolutePath(relativePath) {
  return path.join(__dirname, relativePath);
}

function authentication() {
  return localStorage.getItem("user");
}

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

app.get("/", (req, res) => {
  if (authentication()) {
    res.redirect("http://localhost:3000/posts");
  }
  res.sendFile(createAbsolutePath("/views/home.html"));
});

app.get("/posts/add", (req, res) => {
  res.sendFile(createAbsolutePath("/views/add.html"));
});
app.post("/posts/add", (req, res) => {});

app.get("/posts/modify", (req, res) => {
  res.sendFile(createAbsolutePath("/views/modify.html"));
});
app.post("/posts/modify", (req, res) => {});

app.get("/posts", (req, res) => {
  res.sendFile(createAbsolutePath("/views/posts.html"));
});

app.get("/data/posts", (req, res) => {
  console.log(req.headers.username);
  if (req.headers.username == null || req.headers.username === '') {
    res.status(401).send();
    return;
  }

  let sql = `SELECT * FROM posts`;
  conn.query(sql, (err, posts) => {
    if (err) {
      res.json({
        posts: "error message"
      });
    }
    res.json(posts);
  });
});

app.delete("/posts", (req, res) => {});
app.put("/posts", (req, res) => {});

app.get("/signin", (req, res) => {
  res.sendFile(createAbsolutePath("/views/signIn.html"));
});

app.get("/data/users", (req, res) => {
  let sql = `SELECT * FROM users`;
  conn.query(sql, (err, users) => {
    if (err) {
      console.log("Error: /data/users");
      return;
    }
    res.json(users);
  });
});

app.get("/signup", (req, res) => {
  res.sendFile(createAbsolutePath("/views/signup.html"));
});
app.post("/signup", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
