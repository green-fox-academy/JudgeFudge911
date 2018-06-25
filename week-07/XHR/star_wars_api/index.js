'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile('/assets.index.html')
});

app.listen(port, () => {
    `Server started on port ${port}`
});