// const settings = {
//   notifications: {
//     follow: true,
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };

// 옛날 방식
// if (settings.notifications.follow) {
//   // send email
// }

// const {
//   notifications: { follow },
//   color,
// } = settings;
// console.log(follow);
// console.log(color);

// const notifications = settings.notifications;

// const { notifications } = settings;
// console.log(notifications);

// const {
//   notifications: { follow },
// } = settings;
// // console.log(notifications);
// console.log(follow);

// const settings = {
//   notifications: {
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };

// const {
//   notifications: { follow },
// } = settings;
// console.log(follow); // undefined

// const {
//   notifications: { follow = false },
// } = settings;
// console.log(follow);

const settings = {
  color: {
    theme: "dark",
  },
};

// const { notifications: { follow = false } = {} } = settings;
// console.log(follow);

// const { color } = settings;
// console.log(color);

const {
  color: { theme = "light" },
} = settings;
console.log(theme);
