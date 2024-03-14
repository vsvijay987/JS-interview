function customFill(value, start, end) {
  // DO NOT REMOVE
  "use strict";

  // write your code below
  const length = this.length;

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = this.length;
  }

  for (let i = 0; i < length; i++) {
    if (i >= start && i <= end) {
      this[i] = value;
    }
  }
  return this;
}

Array.prototype.customFill = customFill;

const arr = [1, 2, 3];
console.log("arr: ", arr.customFill(4, 1, 2));
