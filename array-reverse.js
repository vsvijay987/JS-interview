/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * DO NOT CHANGE FUNCTION NAME
 */

function customReverse() {
  // DO NOT REMOVE
  "use strict";
  const length = this.length;

  let start = 0;
  let end = length - 1;

  while (start < end) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }
  return this;
  // write your code below
}

Array.prototype.customReverse = customReverse;

console.log([1, 2, 3].customReverse());
