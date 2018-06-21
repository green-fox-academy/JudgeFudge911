const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {name: 'Guest'});
});

app.get('/:name', (req, res) => {
    res.render('home', {name: req.params.name });
});

app.listen(PORT, () => {
    console.log('Listening to port ${PORT}');
});
