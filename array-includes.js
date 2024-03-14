//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

function customIncludes(searchElement) {
  // DO NOT REMOVE
  "use strict";
  if (this.length === 0) return false;
  let temp = false;
  for (let i = 0; i < this.length; i++) {
    if (Number.isNaN(this[i]) && Number.isNaN(searchElement)) {
      return true;
    }
    if (this[i] === searchElement) {
      temp = true;
      break;
    }
  }
  return temp;

  // Write your solution below
}

Array.prototype.customIncludes = customIncludes;
