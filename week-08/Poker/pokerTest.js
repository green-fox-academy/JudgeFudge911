"use strict";

const poker = require("./poker.js");

const test = require("tape");

let blackHand = ["2H", "2H", "3H", "3H", "3H"];
let whiteHand = ["2H", "AH"];

test.skip("Compare hands", t => {
  t.equal(poker.compareHands(blackHand, whiteHand), -1);
  t.end();
});

test.skip("Get highest value", t => {
  t.equal(poker.findHighest(blackHand), "4H");
  t.end();
});

test.skip("Check if flush", t => {
  t.equal(poker.isFlush(blackHand), true);
  t.end();
});

test("Check repetitions", t => {
  t.equal(poker.checkRepetitions(blackHand), { "2": 2, "3": 3 });
  t.end();
});
