// find method
// const email = [
//   "sud@no.com",
//   "naver@google.com",
//   "hyeon@gmail.com",
//   "nico@nomad.com",
//   "ssu@gmail.com",
// ];

// const foundMail = email.find(item => true);
// console.log(foundMail); // sud@no.com

// const foundMail = email.find((item) => item.includes("@gmail.com"));
// console.log(foundMail); // hyeon@gmail.com

const emails = [
  "sud@no.com",
  "naver@google.com",
  "hyeon@gmail.com",
  "nico@nomad.com",
  "ssu@gmail.com",
];

// filter method
// const noGmail = emails.filter((gmail) => !gmail.includes("@gmail.com"));
// console.log(noGmail);

// forEach method
// emails.forEach((email) => {
//   console.log(email.split("@")[0]);
// });

// const name = "nicolas serrano"
// name.split(" ");
// name.split("s");
// name.split("rr");

// const cleaned = [];
// emails.forEach((email) => {
//   cleaned.push(email.split("@")[0]);
// });
// console.log(cleaned);

// const cleaned = emails.map((mail) => mail.split("@")[0]);
// console.log(cleaned);

const cleaned = emails.map((mail, index) => ({
  username: mail.split("@")[0],
  points: index,
}));
console.table(cleaned);
