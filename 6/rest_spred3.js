// const user = {
//   name: "nico",
//   age: 24,
//   password: 54321,
// };

// user.password = null;
// user["password"] = null;
// console.log(user);

// const killPassword = ({ password, ...rest }) => rest;
// const cleanUser = killPassword(user);
// console.log(cleanUser);

// const user = {
//   name: "nico",
//   age: 24,
//   password: 54321,
// };
// const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
// console.log(setCountry(user));

const user = {
  NAME: "nico",
  age: 24,
  password: 54321,
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
console.log(user);
console.log(rename(user));
