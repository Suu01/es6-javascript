// const days = ["Mon", "Tue", "Wed"];

// // const [mon, tue, wed, thu] = days;
// const [mon, tue, wed, thu = "Thu"] = days;
// console.log(mon, tue, wed, thu);


const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu] = days();
console.log(mon, tue, wed, thu);