const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this);
//   console.log("I have been Clicked");
//   this.style.backgroundColor = "red";
// });

// button.addEventListener("click", () => {
//   console.log(this);
//   this.style.backgroundColor = "red";
// });

// const handelClick = () => {
//   console.log(this); // window가 출력
// };
// button.addEventListener("click", handelClick);

// function handelClick() {
//   console.log(this);
// }
// button.addEventListener("click", handelClick);

// const suudel = {
//   name: "Suu",
//   age: 26,
//   addYear: () => {
//     this.age++;
//   },
// };
// console.log(suudel);
// suudel.addYear();
// suudel.addYear();
// console.log(suudel);

const suudel = {
  name: "Suudel",
  age: 26,
  // addYear: function() {
  //     this.age++;
  // }
  addYear() {
    this.age++;
  },
};
console.log(suudel);
suudel.addYear();
suudel.addYear();
console.log(suudel);
