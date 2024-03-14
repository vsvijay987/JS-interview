function customEvery(callback) {
  //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  // DO NOT REMOVE
  "use strict";
  let temp = true;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) !== true) {
      temp = false;
      break;
    }
  }
  return temp;

  // Write your solution below
}

Array.prototype.customEvery = customEvery;
