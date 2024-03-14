function flatten() {
  const output = [];
  // write your code here

  function processing(arr) {
    for (let i = 0; i < arr.length; i++) {
      let startElement = arr[i];
      if (Array.isArray(startElement)) {
        processing(startElement);
      } else {
        output.push(startElement);
      }
    }
  }
  processing(this);

  return output;
}

Array.prototype.flatten = flatten;
