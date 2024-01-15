// class User {
//   constructor() {
//     this.username = "Suudel";
//   }
//   sayHello() {
//     console.log("Hello, I'm Suudel");
//   }
// }
// console.log(User.username); // undefined
// const sexyUser = new User();
// const uglyUser = new User();
// console.log(sexyUser.username);
// setTimeout(sexyUser.sayHello, 4000);
// sexyUser.sayHello();
// uglyUser.sayHello();

// const baseObject = {
//   username: "Suudel",
//   sayHello: () => console.log("I'm Suudel"),
//   //   sayHello: function() {
//   //      console.log("Suudel");
//   //   }
// };
// const sexyUser = baseObject;
// const uglyUser = baseObject;
// sexyUser.sayHello();
// uglyUser.sayHello();

// class User {
//   constructor(name) {
//     this.username = name;
//   }
//   sayHello() {
//     console.log("Hello, I'm Suudel");
//   }
// }
// const sexyUser = new User("Suu");
// const uglyUser = new User("del");
// console.log(sexyUser.username, uglyUser.username);

class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
}
const sexyUser = new User("Suu");
sexyUser.sayHello();
