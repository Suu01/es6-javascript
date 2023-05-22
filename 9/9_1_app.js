const getMoviesPromise = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log(`❌ ${error}`));
}

// async function getMovies() {  }
const getMoviesAsync = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    console.log(response);
    const json = await response.json();
    console.log(json);
};
getMoviesAsync();