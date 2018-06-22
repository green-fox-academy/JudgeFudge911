const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

let photos = [
    {path: '/assets/imges/1.png', header: "I am sorry little one", description: "lorem ipsum", isActive: 'active'},
    {path: '/assets/imges/2.png', header: "I am sorry little two", description: "lorem ipsum", isActive: ''},
    {path: '/assets/imges/3.png', header: "I am sorry little three", description: "lorem ipsum", isActive: ''}

];

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('gallery', {photos, __dirname});
});

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});