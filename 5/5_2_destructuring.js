// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const mon = days[0];
// const tue = days[1];
// const wed = days[2];
// console.log(mon, tue, wed);

// const days = ["Mon", "Tue", "Wed"];

// const [mon, tue, wed, thu] = days;
// console.log(mon, tue, wed, thu);

// const [mon, tue, wed, thu = "Thu"] = days;
// console.log(mon, tue, wed, thu);

const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu] = days();
console.log(mon, tue, wed, thu);
