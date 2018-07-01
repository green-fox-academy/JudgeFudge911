"use strict";

class Card {
  constructor(value, suit) {
    if (
      typeof suit === "string" &&
      typeof value === "string" &&
      value.length === 1
    ) {
      let validValues = /[0-9tjqka]/gi;
      if (validValues.test(value)) {
        this.value = value.toLowerCase();
      }
      let validSuits = /[cdhs]/gi;
      if (validSuits.test(suit)) {
        this.suit = suit.toLowerCase();
      }
    }
  }
}

let black = [
  new Card("2", "H"),
  new Card("3", "D"),
  new Card("5", "S"),
  new Card("9", "C"),
  new Card("K", "D")
];

let white = [
  new Card("2", "c"),
  new Card("3", "h"),
  new Card("4", "s"),
  new Card("8", "c"),
  new Card("a", "h")
];

function compareHands(black, white) {}

function findHighCard(black, white) {
  return black.sort(compareValues)[black.length] >
    white.sort(compareValues)[white.length]
    ? "Black wins"
    : "White wins";
}

function compareValues(cardOne, cardTwo) {
  //if cardOne is bigger it returns 1, if they are equal 0 else -1.
  let a = cardOne.value;
  let b = cardTwo.value;
  let isNumber = /[0-9]/;

  if (a === b) {
    return 0;
  }

  if (isNumber.test(a) && isNumber.test(b)) {
    return a > b ? 1 : -1;
  }

  if (isNumber.test(a)) {
    return -1;
  }

  if (isNumber.test(b)) {
    return 1;
  }

  let valueOrder = "tjqka";

  let aValue = valueOrder.indexOf(a);
  let bValue = valueOrder.indexOf(b);

  return aValue > bValue ? 1 : -1;
}
