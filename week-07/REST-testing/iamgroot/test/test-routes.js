'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint without input', (t) => {
    request(app)
        .get('/groot')
        .expect('Content-Type', /object/)
        .expect(200)
        .end(function(err, res) {
            let expected = {error: "I am Groot!"};
            t.same(res.body, expected, 'Error message as expected');
            t.end();
        })
});

test('groot endpoint with input', (t) => {
    request(app)
        .get('/groot?message=hello')
        .expect('Content-Type', /object/)
        .expect(200)
        .end(function(err, res) {
            let expected = {recieved: "hello", translated: "I am Groot!"};
            t.same(res.body, expected, 'Translated as expected');
            t.end();
        })
});