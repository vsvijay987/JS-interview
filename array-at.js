//The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

function customAt(number) {
  // write your solution below
  if (!Array.isArray(this)) throw new TypeError();
  if (number >= 0 && number < this.length) return this[number];
  if (number < 0 && number >= -this.length) return this[this.length + number];
  return;
}

Array.prototype.customAt = customAt;
