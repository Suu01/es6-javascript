// function sayHi(aName) {
//   return "Hello " + aName;
// }
// console.log(sayHi());
// console.log(sayHi("Suu"));

// function sayHi(aName) {
//   return "Hello " + (aName || "Anon");
// }
// console.log(sayHi());
// console.log(sayHi("Suu"));

// function sayHi(aName = "Anon") {
//   return "Hello " + aName;
// }
// console.log(sayHi());
// console.log(sayHi("Suu"));

// const sayHi = (aName = "Anon") => "Hello " + aName;
// console.log(sayHi());
// console.log(sayHi("Suu"));

const DEFAULT = "lalala";
const sayHi = (aName = DEFAULT) => `Hello ${aName}`;
console.log(sayHi());
console.log(sayHi("nico"));
