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
        });

    request(app)
        .get('/doubling?input=2')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {recieved: 2, result: 4};
            t.same(res.body, expected, "Doubles input as expected");
        });
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

test('Greeter with no name', (t) => {
    request(app)
        .get('/greeter?title="example"')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {error: "Please provide a name!"};
            t.same(res.body, expected, "Provide name error message correct");
        });
    request(app)
        .get('/greeter?name="example"')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {error: "Please provide a title!"};
            t.same(res.body, expected, "Provide title error message correct");
        });
    request(app)
        .get('/greeter?name=example name&title=example title')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {welcome_message: "Oh, hi there example name, my dear example title!"};
            t.same(res.body, expected, "Returns message correctly");
        });
    request(app)
        .get('/greeter?name=example name&title=2')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {welcome_message: "Oh, hi there example name, my dear 2!"};
            t.same(res.body, expected, "Doesn't check if the input is a string");
            t.end();
        });
});

test('Appenda with valid input', (t) => {
    request(app)
        .get('/appenda/kuty')
        .expect('Content-Type', /object/)
        .expect(200)
        .end((err, res) => {
            let expected = {appended: "kutya"};
            t.same(res.body, expected, "Returns message correctly");
            t.end();
        });
});
