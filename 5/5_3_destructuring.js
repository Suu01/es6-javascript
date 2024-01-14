// const settings = {
//   color: {
//     chosen_color: "dark",
//   },
// };

// const {
//   color: { chosen_color = "light" },
// } = settings;
// console.log(chosen_color);

// const chosenColor = settings.color.chosen_color || "light";
// console.log(chosenColor);

// const settings = {
//   color: {
//     chosen_color: "dark",
//   },
// };

// const {
//   color: { chosen_color: chosenColor = "light" },
// } = settings;
// console.log(chosenColor);
// let {
//   color: { chosen_color: chosenColor = "light" },
// } = settings;
// console.log(chosenColor);

const settings = {
  color: {
    chosen_color: "dark",
  },
};

let chosenColor = "blue";

console.log(chosenColor);

({
  color: { chosen_color: chosenColor = "light" },
} = settings);
console.log(chosenColor);
