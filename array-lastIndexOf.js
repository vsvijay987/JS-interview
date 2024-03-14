//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. -1 is returned.

function customLastIndexOf(searchElement, fromIndex) {
  // DO NOT REMOVE
  "use strict";

  if (!searchElement) return -1;

  for (let i = fromIndex ?? this.length - 1; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;

  // Write your solution below
}

Array.prototype.customLastIndexOf = customLastIndexOf;
