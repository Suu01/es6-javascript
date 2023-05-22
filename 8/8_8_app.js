// fetch("http://127.0.0.1:5500/8/index.html")
//     .then(response => response.text())
//     .then(text => console.log(text))
//     .catch(e => console.log(`${e} ❌`));

fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e => console.log(`${e} ❌`));