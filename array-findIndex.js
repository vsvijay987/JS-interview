//The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

function customFindIndex(callback) {
  // DO NOT REMOVE
  "use strict";
  if (!Array.isArray(this)) throw new TypeError();

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return i;
    }
  }
  return -1;

  // Write your solution below
}

Array.prototype.customFindIndex = customFindIndex;
