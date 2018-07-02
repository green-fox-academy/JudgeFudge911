"use strict";

const poker = require("./poker.js");

const test = require("tape");

let blackHand = ["2H", "3D"];
let whiteHand = ["2C", "4H"];

test("Add values together", t => {
  t.equal(poker.sumValues(blackHand, whiteHand), "White wins");
  t.end();
});