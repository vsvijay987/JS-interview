// The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

function customFindLast(callback) {
  // DO NOT REMOVE
  "use strict";
  if (!Array.isArray(this)) throw new TypeError();

  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;

  // Write your solution below
}

Array.prototype.customFindLast = customFindLast;
