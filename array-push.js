function customPush() {
  // DO NOT REMOVE
  "use strict";
  if (arguments.length === 0) return this;

  let args = [...arguments];
  let tempArrLength = this.length;
  for (let i = 0; i < args.length; i++) {
    this[tempArrLength + i] = args[i];
  }
  return this.length;
  // Write your solution below
}

Array.prototype.customPush = customPush;

const arr = [1, 2, 3];
console.log(arr.customPush(9, 8));
console.log(arr);
