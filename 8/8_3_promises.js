// const amISexy = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Yes you are!");
// });
// amISexy.then((value) => console.log(value));

// const amISexy = new Promise((resolve, reject) => {
//   resolve("Yes you are!");
// });
// amISexy.then((value) => console.log(value));

// const amISexy = new Promise((resolve, reject) => {
//   resolve("Yes you are!");
// });
// const thenFn = (value) => console.log(value);
// amISexy.then(thenFn);

const amISexy = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "Yes you ugly");
});
amISexy
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
