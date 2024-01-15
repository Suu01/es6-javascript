// const amISexy = new Promise((resolve, reject) => {
//   resolve(2);
// });

// amISexy.then((number) => console.log(number));
// amISexy
//   .then((number) => {
//     console.log(number * 2);
//     return number * 2;
//   })
//   .then((otherNumber) => {
//     console.log(otherNumber);
//     console.log(otherNumber * 2);
//   });

// amISexy
//   .then((number) => number * 2)
//   .then((number) => number * 2)
//   .then((number) => number * 2)
//   .then((number) => number * 2)
//   .then((number) => number * 2);

// const timesTwo = (number) => number * 2;
// amISexy
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(() => {
//     throw Error("Something is wrong");
//   })
//   .then((lastNumber) => console.log(lastNumber))
//   .catch((error) => console.log(error));

const amISexy = new Promise((resolve, reject) => {
  reject(2);
});

const timesTwo = (number) => number * 2;
amISexy
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error("Something is wrong");
  })
  .then((lastNumber) => console.log(lastNumber))
  .catch((error) => console.log(error));
