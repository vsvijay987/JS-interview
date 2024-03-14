//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

function customIndexOf(searchElement, fromIndex = 0) {
  // write your solution here

  if (!Array.isArray(this)) throw new TypeError();
  let startIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === searchElement) return i;
  }
  return -1;
}

Array.prototype.customIndexOf = customIndexOf;
