'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../main');

test('Doubling without input', (t) => {
    request(app)
        .get('/doubling')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {error: "Please provide an input!"};
            t.same(res.body, expected, "Return error object as expected");
            t.end();
        });
});

test('Doubling with input 2', (t) => {
    request(app)
        .get('/doubling?input=2')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {recieved: 2, result: 4};
            t.same(res.body, expected, "Doubles input as expected");
            t.end();
        });
});

test('Doubling with not string input', (t) => {
    request(app)
        .get('/doubling?input="hello"')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {recieved: null, result: null};
            t.same(res.body, expected, "Doubles input as expected");
            t.end();
        });
});
