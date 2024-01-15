// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "First");
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(`${error}`))
//   .finally(() => console.log("I'm done"));

const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "First");
})
  .then((value) => console.log(value))
  .catch((e) => console.log(`${e}❌`))
  .finally(() => console.log("I'm done"));
