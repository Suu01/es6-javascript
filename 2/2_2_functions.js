const email = ["sud@no.com", "google@naver.com", "hyeon@gmail.com", "ssu@gmail.com", "nico@nomad.com"];

// const foundMail = email.find(item => item.includes("@gmail.com"));
// // const foundMail = email.find(item => true);
// console.log(foundMail);

// const noGmail = email.filter(gmail => !gmail.includes("@gmail.com"));
// console.log(noGmail);

// email.forEach(mail => {
//     console.log(mail.split("@")[0]);
// }
// );

// const name = "nicolas serrano"
// name.split(" ");
// name.split("s");
// name.split("rr");

// const cleaned = [];
// email.forEach(mail => {
//     cleaned.push(mail.split("@")[0]);
// });

// console.log(cleaned);

// const cleaned = email.map(mail => mail.split("@")[0]);
// console.log(cleaned);

const cleaned = email.map((mail, index) => ({
    username: mail.split("@")[0], 
    points: index
}));
console.table(cleaned);