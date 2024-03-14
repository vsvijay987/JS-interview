function customShift() {
  // DO NOT REMOVE
  "use strict";
  if (this.length === 0) return undefined;

  let temp = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length -= 1;
  return temp;

  // write your code below
}

Array.prototype.customShift = customShift;

const arr = [1, 2, 3, 4, 5];
arr.customShift();
console.log(arr);
