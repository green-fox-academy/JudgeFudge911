"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");
const path = require("path");

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_DATABASE,
  database: "reddit"
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/home.html'));
});

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
});