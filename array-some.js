//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

function customSome(callback) {
  // DO NOT REMOVE
  "use strict";
  if (this.length === 0) return true;

  let temp = false;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      temp = true;
    }
  }
  return temp;

  // Write your solution below
}

Array.prototype.customSome = customSome;
