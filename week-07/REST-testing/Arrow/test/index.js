'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server/index');

test('Youndu endpoint', t => {
    request(app)
        .get('youndu?distance=100.0&time=0.0')
        .expect(0)
        .end((err, res) => {
            t.error(err);
            let expected = {distance: 100.0, time: 0.0, speed: Infinity};
            t.same(res.body, expected, "Speed calculated correctly with time equals 0 input")
        });
    request(app)
        .get('/youndu?distance=100.0&time=10.0')
        .expect(200)
        .end((err, res) => {
            t.error(err);
            let expected = {distance: 100.0, time: 10.0, speed: 10.0};
            t.same(res.body, expected, "Speed calculated correctly with valid input");
            t.end();
        });
});