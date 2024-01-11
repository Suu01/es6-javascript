function nameOf(arg) {}

const hello = function (arg) {};

// const names = ["nico", "lynn", "flynn"];
// const hearts = names.map(function (item) {
//   return item + "😻";
// });
// console.log(hearts);

// const names = ["nico", "lynn", "flynn"];
// function addHeart(item) {
//   return item + "😻";
// }
// const hearts = names.map(addHeart);
// console.log(hearts);

// arrow functions
// const names = ["nico", "lynn", "flynn"];
// const hearts = names.map((item, index) => {
//   console.log("We are on", index);
//   return item + "😻";
// });
// console.log(hearts);

// const names = ["nico", "lynn", "flynn"];
// const hearts = names.map((item) => item + "😻");
// // const hearts = names.map((item) => 0);
// console.log(hearts);

// const names = ["nico", "lynn", "flynn"];
// const hearts = names.map((item) => {
//   item + "😻"; // 아무것도 return하지 않음
// });
// console.log(hearts); // undefined

const names = ["nico", "lynn", "flynn"];
const hearts = names.map((item, index) => item + "😻" + index);
// const hearts = names.map(item => item + "😻");
// const hearts = names.map(() => "🩷");
console.log(hearts);
