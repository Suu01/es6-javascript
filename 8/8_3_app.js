const amISexy = new Promise((resolve, reject) => {
    // setTimeout(resolve, 3000, "Yes you are!");
    // resolve("Yes you are");
    setTimeout(reject, 3000, "Yes you are!");
});

// const thenFn = value => console.log(value);

// amISexy.then(value => console.log(value));
// amISexy.then(thenFn); 
amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));