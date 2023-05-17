const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 25,
    // lastName: lastName !== "" ? lastName : undefined
    ...(lastName !== "" && {lastName})
};

console.log(typeof lastName);
console.log(user);