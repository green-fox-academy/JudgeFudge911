"use strict";

class Hand {
  constructor(cards) {
    this.cards = cards;
  }
}

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
let black = new Hand([
  new Card("2", "H"),
  new Card("3", "D"),
  new Card("5", "S"),
  new Card("9", "C"),
  new Card("K", "D")
]);

let white = new Hand([
  new Card("2", "c"),
  new Card("3", "h"),
  new Card("4", "s"),
  new Card("8", "c"),
  new Card("a", "h")
]);


function compareHands(black, white){

}