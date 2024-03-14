const arraySort = (arr) => {
  let n = arr.length;

  while (n > 1) {
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
    n--;
  }
};

let array = ["vijay", "tiru", "ajay"];

arraySort(array);
console.log("array");
