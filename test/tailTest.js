const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns '3' for number of elements of original array", () => {
    assert.strictEqual(words.length, 3);
  });
});