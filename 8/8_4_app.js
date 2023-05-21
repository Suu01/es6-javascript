const amISexy = new Promise((resolve, reject) => {
    // resolve(2);
    reject(2);
});

// amISexy.then(number => console.log(number));
// amISexy.then(number => {
//     console.log(number * 2);
//     return number * 2;
// })
// .then(otherNumber => {
//     // console.log(otherNumber);
//     console.log(otherNumber * 2);
// }).then();

const timesTwo = (number) => number * 2;

amISexy.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(timesTwo)
.then(() => {
    throw Error("Something is wrong");
})
.then(lastNumber => console.log(lastNumber))
.catch(error => console.log(error));