'use strict';

const poker = require('./poker.js');

const test = require('tape');

test('try', (t) => {
    t.equal(poker.sumValues,0)
    t.end();
});