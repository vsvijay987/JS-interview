// write a currying function that return sum of previous values

const curryingFunc = () => {
  let val = 0;
  return (newVal = 0) => {
    val += newVal;
    return val;
  };
};

const sum = curryingFunc();

console.log(sum(2));
console.log(sum(4));
console.log(sum(9));
