const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[midIndex]];
  } else {
    return [array[midIndex - 1], array[midIndex]];
  }
};

const testArray1 = [1];
assertArraysEqual(middle(testArray1), []);

const testArray2 = [1, 2];
assertArraysEqual(middle(testArray2), []);

const testArray3 = [1, 2, 3];
assertArraysEqual(middle(testArray3), [2]);

const testArray4 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(testArray4), [3]);

const testArray5 = [1, 2, 3, 4];
assertArraysEqual(middle(testArray5), [2, 3]);

const testArray6 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(testArray6), [3, 4]);