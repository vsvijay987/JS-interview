function customPop() {
  // DO NOT REMOVE
  "use strict";
  if (this.length === 0) return undefined;
  this.length -= 1;
  return this[this.length - 1];

  // Write your solution below
}

Array.prototype.customPop = customPop;

const arr = [1, 2, 3, 9];
console.log(arr.pop());
console.log(arr);
