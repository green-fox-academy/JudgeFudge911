"use strict";

class Hand {
  constructor(cards) {
    this.cards = cards;
  }
}

class Card {
  constructor(suit, value) {
      let validSuits = new RegExp("[cdhs]");
          if (validSuits.test(suit.toLowerCase())) {
      this.suit = suit;
    }
    let validValues = new RegExp("[0-9|tjqka]");
    if (validValues.test(value.toLowerCase)) {
      this.value = value;
    }
  }
}

let firstCard = new Card("C","2");
let secondCard = new Card("x","2");
let thirdCard = new Card("c","2");
let fourthCard = new Card("p","2");
let fifthCard = new Card(0,"2");