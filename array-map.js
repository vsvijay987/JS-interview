function customMap(callback) {
  if (!Array.isArray(this)) return new TypeError();
  const output = [];
  this.forEach((element, index) => {
    output[index] = callback(element, index, this);
  });
  return output;
}

Array.prototype.customMap = customMap;
let arr = [1, 2, 34, 5];
console.log(arr.customMap((el) => el * 10));
