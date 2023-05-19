const amISexy = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Yes you are", 3000);
    // });
    setTimeout(resolve, 3000, "Yes you are!");
});

console.log(amISexy);

// setInterval(() => {
    // console.log(amISexy);
// }, 1000);

setInterval(console.log, 1000, amISexy);