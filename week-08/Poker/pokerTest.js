"use strict";

const poker = require("./poker.js");

const test = require("tape");

let blackHand = ["2H", "4H"];
let whiteHand = ["2H", "AH"];

test("Compare hands", t => {
  t.equal(poker.compareValues(blackHand, whiteHand), -1);
  t.end();
});

test("Get highest value", t => {
  t.equal(poker.findHighest(blackHand), "4H");
  t.end();
});

test("Check if flush", t => {
  t.equal(poker.isFlush(blackHand), true);
  t.end();
});
