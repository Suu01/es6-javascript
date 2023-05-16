// const friends = [
//     "nico@gmail.com",
//     "lynn@naver.com",
//     "dal@yahoo.com",
//     "mark@hotmail.com",
//     "fflynn@korea.com",
// ];
// const target = friends.find(friend => friend.includes("@korea.com"));
// console.log(target);

const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@gorea.com",
];
// const check = () => friends.findIndex(friend => friend.includes("@gorea.com"));
// let target = check();
// if (target !== -1) {
//     console.log(target);
//     const username = friends[target].split("@")[0];
//     const email = "korea.com";
//     friends[target] = `${username}@${email}`;
//     target = check();
// }
// console.log(target);


// const check = () => friends.findIndex(friend => friend.includes("@gorea.com"));
// let target = check();
// if (target !== -1) {
//     friends.fill("*".repeat(5), target);
// }
friends.fill("*".repeat(5), 1, 3);
console.log(friends);

console.log(friends.includes("nico@gmail.com"));