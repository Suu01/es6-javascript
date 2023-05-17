const friends = [
    "Nico",
    "Lynn",
    "Japan Guy",
    "Autumn",
    "Dal",
    "Mark",
    "Pipe",
    "Theo"
];

// for(let i = 0; i < friends.length; i++) {
    //     console.log(`${i} I love Kimchi`);
    //     console.log(friends[i]);
    // }

// const addHeart = (c, i, a) => console.log(c, i, a);
// friends.forEach(addHeart);

// friends.forEach(friend => console.log(friend));

// for(const letter of "Hello this is very looooooooooong"){
//     console.log(letter);
// }

// for(const friend of friends) {
//     console.log(friend);
// }

for(const friend of friends) {
    if(friend === "Dal") {
        break;
    } else {
        console.log(friend);
    }
}