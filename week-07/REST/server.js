'use strict';

const app = require('./main.js');
const port = 3000;

app.listen(port, () => {
    console.log('server running on port', port);
});