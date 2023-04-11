const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

function flatten(array) {
  const flatArray = [];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (Array.isArray(val)) {
      for (let j = 0; j < val.length; j++) {
        flatArray.push(val[j]);
      }
    } else {
      flatArray.push(val);
    }
  }

  return flatArray;
}

// console.log(flatten(([1, 2, [3, 4], 5, [6]])));