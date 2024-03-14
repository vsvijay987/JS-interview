function customUnshift() {
  // DO NOT REMOVE
  "use strict";

  // Write your solution below
  const args = [...arguments];
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + args.length] = this[i];
  }
  for (let j = 0; j < args.length; j++) {
    this[j] = args[j];
  }
  return this;
}

Array.prototype.customUnshift = customUnshift;
const arr = [1, 2, 3];
console.log(arr.customUnshift(9, 8));
