// 1. Let and Const
const person = {
  name: "Suudel",
};
// person = true; // error
person.name = "Nicolas";

let suu = "del";
suu = "lalala";

var myName = "Suudel";
console.log(myName); // Suudel

console.log(myName); // undefined
var myName = "suudel";

// 2. Temporal Dead Zone
// 내부 작동
var myName;
console.log(myName); //undefined
myName = "suudel";

console.log(myName);
let myName = "suudel"; // error

// 3. Block Scope
if (true) {
  const hello = "hi";
  let hi = "hello";
}
console.log(hello); // error

if (true) {
  var hello = "hi";
}
console.log(hello);

function auto() {
  var hello = "hi";
}
console.log(hello); // error

if (true) {
  let hello = "hi";
}
let hello = "bye";
console.log(hello);

let hello = "hi";
if (true) {
  console.log(hello);
}
console.log(hello);

let hello = "hi";
if (true) {
  console.log(hello);
  const a = "a";
}
console.log(a); // error

let hello;
if (true) {
  hello = "lalala";
}
console.log(hello);

let hello;
if (true) {
  /////
  if (true) {
    /////
  }
  hello = "lalala";
}
console.log(hello);
