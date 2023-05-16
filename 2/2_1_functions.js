const button = document.querySelector("button");

// button.addEventListener("click", function() {
//     // console.log("I have been Clicked");
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// button.addEventListener("click", () => {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// const handelClick = () => {
//     console.log(this);
// };
// button.addEventListener("click", handelClick);

// function handelClick() {
//     console.log(this);
// };
// button.addEventListener("click", handelClick);

// const suudel = {
//     name: "Suudel",
//     age: 23,
//     addYear: () => {
//         this.age++;
//     }
// }
// console.log(suudel);
// suudel.addYear();
// suudel.addYear();
// console.log(suudel);

const suudel = {
    name: "Suudel",
    age: 25,
    // addYear: function() {
    //     this.age++;
    // }
    addYear() {
    this.age++;
    }
}
console.log(suudel);
suudel.addYear();
suudel.addYear();
console.log(suudel);