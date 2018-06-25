'use strict';

const main = require('./main');
const port = 3000;

main.listen(port, () => {
    console.log('server running on port', port);
});