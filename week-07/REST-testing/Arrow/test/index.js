'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server/index');

test('Yondu endpoint', (t) => {

    request(app)
        .get('/yondu?distance=100.0&time=0')
        .expect(200)
        .end((err, res) => {
            t.error(err, 'No error');
            let expected = {distance: 100.0, time: 0.0, speed: null};
            t.same(res.body, expected, "Speed calculated correctly with time equals 0 input");
        });

    request(app)
        .get('/yondu?distance=100.0&time=10.0')
        .expect(200)
        .end((err, res) => {
            t.error(err, 'No error');
            let expected = {distance: 100.0, time: 10.0, speed: 10.0};
            t.same(res.body, expected, "Speed calculated correctly with valid input");
            t.end();
        });
});