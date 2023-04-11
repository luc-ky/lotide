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

module.exports = countLetters;