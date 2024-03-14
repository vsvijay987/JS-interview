//create a currying function that accepts 5 arguments

const sum = (...args) => {
  if (args.length === 5)
    return args.reduce((initialVal, acc) => acc + initialVal, 0);
  else {
    const recursiveFunc = (...args2) => {
      args = [...args2, ...args];
      if (args.length === 5)
        return args.reduce((initialVal, acc) => acc + initialVal, 0);
    };
    return recursiveFunc;
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1, 2, 3)(4, 5));
