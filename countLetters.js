const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};

  for (const character of sentence) {
    if (character !== " ") {
      if (character in letterCount) {
        letterCount[character]++;
      } else {
        letterCount[character] = 1;
      }
    }
  }

  return letterCount;
};

console.log(countLetters("lighthouse in the house"));