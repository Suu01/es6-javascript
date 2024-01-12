// function saveSettings({follow, alert, color = "blue"}) {
//     console.log(color);
// }
// saveSettings({
//     follow: true,
//     alert: true,
//     mrk: true,
// })


function saveSettings({ notifications, color: { theme } }) {
    console.log(theme);
    console.log(notifications);
    console.log(notifications.follow);
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mrk: true,
    },
    color: {
        theme: "blue"
    }
})