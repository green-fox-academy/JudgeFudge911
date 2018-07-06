"use strict";

exports.compareHands = (handOne, handTwo) => {
  let scoreOne = exports.findHighest(handOne);
  let scoreTwo = exports.findHighest(handTwo);
  if (scoreOne === scoreTwo) {
    return 0;
  }
  return scoreOne > scoreTwo ? 1 : -1;
};

exports.findHighest = hand => {
  hand.sort(exports.compareValues);
  return hand[hand.length-1];
};

exports.compareValues = (valueOne, valueTwo) => {
  const validStrings = ["t", "j", "q", "k", "a"];
  if (valueOne === valueTwo) {
    return 0;
  }

  if (!Number.isNaN(valueOne) && !Number.isNaN(valueTwo)) {
    return valueOne > valueTwo ? 1 : -1;
  }

  if (!Number.isNaN(valueOne) && Number.isNaN(valueTwo)) {
    return -1;
  }

  if (Number.isNaN(valueOne) && !Number.isNaN(valueTwo)) {
    return 1;
  }

  return validStrings.indexOf(valueOne) > validStrings.indexOf(valueTwo)
    ? 1
    : -1;
};

exports.isFlush = hand => {
  hand.forEach((e, index, arr) => {
    if (index <= arr.length - 2 && e.charAt(1) !== arr[index + 1].charAt(1)) {
      return false;
    }
  });
  return true;
};