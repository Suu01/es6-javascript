// const sayHi = (aName = "anon") => "Hello " + aName + " lovely to have you";

const sayHi = (aName = "anon") => `Hello ${aName} lovely to have you`;
console.log(sayHi());

console.log(`hello how are you ${1000 * 39383}`);

const add = (a, b) => a + b;
console.log(`hello how are you ${add(6, 6)}`);
console.log(`hello how are you ${add()}`);
console.log(`hello how are you ${add}`);