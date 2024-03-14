const dummyApi = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const tasksArray = [dummyApi(1000), dummyApi(2000), dummyApi(3000)];

const promiseAllPolyfill = (arr) => {
  return new Promise((resolve, reject) => {
    const output = [];
    arr.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index === arr.length - 1) resolve(output);
        })
        .catch((err) => reject(err));
    });
  });
};

promiseAllPolyfill(tasksArray).then((data) => console.log(data));
