const friends = Array.of("nico", "lynn", "dal", "mark");
console.log(friends);

// const buttons = document.querySelectorAll("button");
// const buttons = document.getElementsByClassName("btn");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => console.log("I ve been clicked"));
// }); // error

// const buttons = document.getElementsByClassName("btn");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", () => console.log("I ve been clicked"));
// });
// console.log(buttons);

const buttons = document.getElementsByClassName("btn");
const ar = Array.from(buttons);
ar.forEach((button) => {
  button.addEventListener("click", () => console.log("I ve been clicked"));
});
console.log(buttons);
