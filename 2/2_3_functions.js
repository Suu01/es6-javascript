// function sayHi(aName) {
//     return "Hello " + (aName || "anon");
// }
// console.log(sayHi());
// console.log(sayHi('nico'));

// function sayHi(aName = "anon") {
//     return "Hello " + aName;
// }
// console.log(sayHi());
// console.log(sayHi('nico'));

// const sayHi = (aName = "anon") => "Hello " + aName;
// console.log(sayHi());
// console.log(sayHi('nico'));

const DEFAULT = "lalala";
const sayHi = (aName = DEFAULT) => `Hello ${aName}`;
console.log(sayHi());
// console.log(sayHi('nico'));