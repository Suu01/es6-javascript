const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];
console.log(...friends);
console.log(friends);
console.log(friends + family);
console.log(...friends, ...family);
console.log([friends, family]);
console.log([...friends, ...family]);

const sexy = {
    name: "nico",
    age: 24,
};

const hello = {
    sexy: true,
    hello: "hello",
};

console.log({ ...sexy, ...hello });
console.log({ sexy, hello });
// console.log( ...sexy, ...hello );