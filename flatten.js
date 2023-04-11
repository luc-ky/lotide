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

module.exports = flatten;