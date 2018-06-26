'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/assets', express.static('./assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/index.html'))
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});