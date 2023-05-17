// const friends = ["nico", "lynn"];
// const newFriends = ["dal", ...friends];
// console.log(friends);
// console.log(newFriends);

// const nico = {
//     username: "nico",
// };
// console.log({...nico, password: 123});

const first = ["mon", "tue", "wed"];
const weekend = ["sat", "sun"];
const fullWeek = [ ...first, "thu", "fri", ...weekend ];
console.log(fullWeek);