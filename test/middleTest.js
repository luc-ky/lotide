const assert = require('chai').assert;
const middle = require('../middle');

const testArray1 = [1];
const testArray2 = [1, 2];
const testArray3 = [1, 2, 3];
const testArray4 = [1, 2, 3, 4, 5];
const testArray5 = [1, 2, 3, 4];
const testArray6 = [1, 2, 3, 4, 5, 6];

describe("#middle", () => {
  it(`returns [] for [${testArray1}]`, () => {
    assert.deepEqual(middle(testArray1), []);
  });
  it(`returns [] for [${testArray2}]`, () => {
    assert.deepEqual(middle(testArray2), []);
  });
  it(`returns [2] for [${testArray3}]`, () => {
    assert.deepEqual(middle(testArray3), [2]);
  });
  it(`returns [3] for [${testArray4}]`, () => {
    assert.deepEqual(middle(testArray4), [3]);
  });
  it(`returns [2,3] for [${testArray5}]`, () => {
    assert.deepEqual(middle(testArray5), [2, 3]);
  });
  it(`returns [3,4] for [${testArray6}]`, () => {
    assert.deepEqual(middle(testArray6), [3, 4]);
  });
});