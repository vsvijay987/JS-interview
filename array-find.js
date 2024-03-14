//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

function customFind(callback) {
  // DO NOT REMOVE
  "use strict";
  if (!Array.isArray(this)) throw new TypeError();

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) return this[i];
  }

  return;

  // Write your solution below
}

Array.prototype.customFind = customFind;
