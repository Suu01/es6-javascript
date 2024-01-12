const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = "blue";
console.log(chosenColor);
({
    color: { chosen_color: chosenColor = "light" }
    // color: { chosen_color = "light" }
} = settings);

// const {
//     color: { chosen_color: chosenColor = "light" }
//     // color: { chosen_color = "light" }
// } = settings;

// const chosenColor = settings.color.chosen_color || "light";

console.log(chosenColor);