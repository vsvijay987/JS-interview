// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

function customFindLastIndex(callback) {
  // DO NOT REMOVE
  "use strict";
  if (!Array.isArray(this)) throw new TypeError();

  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) return i;
  }
  return -1;

  // Write your solution below
}

Array.prototype.customFindLastIndex = customFindLastIndex;
