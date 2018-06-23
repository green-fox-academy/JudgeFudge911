const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile('/home/gabor/JudgeFudge911.github.io/week-07/Frontend/assets/index.html')
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});