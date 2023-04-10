const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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