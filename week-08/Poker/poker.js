"use strict";

class Hand {
  constructor(cards) {
    this.cards = cards;
  }
}

class Card {
  constructor(suit, value) {
    if (
      typeof suit === "string" &&
      typeof value === "string" &&
      value.length === 1
    ) {
      let validSuits = /[cdhs]/gi;
      if (validSuits.test(suit)) {
        this.suit = suit.toLowerCase();
      }
      let validValues = /[0-9tjqka]/gi;
      if (validValues.test(value)) {
        this.value = value.toLowerCase();
      }
      console.log(this);

    } else {
      console.log("Some tricky buisness");
    }
  }
}

let firstCard = new Card("c", "j");
let secondCard = new Card("c", "2");
let thirdCard = new Card("D", "2");
let fourthCard = new Card("H", "2");
let fifthCard = new Card("S", "2");
