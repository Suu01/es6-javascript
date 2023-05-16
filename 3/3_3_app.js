const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const list = `
    <h1>People i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend} 🌟</li>`).join(" ")}
    </ul>
`;
wrapper.innerHTML = list;

// friends.join("🌟");
// friends.join(" ");