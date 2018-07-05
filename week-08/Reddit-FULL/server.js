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

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

app.get("/", (req, res) => {
  res.sendFile(createAbsolutePath("/views/home.html"));
});

app.get("/posts/add", (req, res) => {
  res.sendFile(createAbsolutePath("/views/add.html"));
});
app.post("/posts/add", (req, res) => {});

app.get("/posts/modify", (req, res) => {
  res.sendFile(createAbsolutePath("/modify.html"));
});
app.post("/posts/modify", (req, res) => {});

app.get("/posts", (req, res) => {
  res.sendFile(createAbsolutePath("/posts.html"));
});

app.get("/data", (req, res) => {
  let mysql = `SELECT * FROM posts`;
  conn.query(mysql, (err, posts) => {
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
  res.sendFile(createAbsolutePath("/signin.html"));
});
app.post("/signin", (req, res) => {});

app.get("/signup", (req, res) => {
  res.sendFile(createAbsolutePath("/signup.html"));
});
app.post("/signup", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
