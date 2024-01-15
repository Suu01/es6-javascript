// const getMoviesAsync = async () => {
//   try {
//     const response = await fetch("http://127.0.0.1:5500/9/index.html");
//     const json = await response.json();
//     console.log(json);
//   } catch (e) {
//     console.log(`❌ ${e}`);
//   } finally {
//     console.log("We are done!");
//   }
// };
// getMoviesAsync();

// const getMoviesAsync = async () => {
//   try {
//     const response = await fetch("https://yts.mx/api/v2/list_movies.json");
//     const json = await response.json();
//     throw Error("I'm hungry");
//   } catch (e) {
//     console.log(`❌ ${e}`);
//   } finally {
//     console.log("We are done!");
//   }
// };
// getMoviesAsync();

const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(`❌ ${e}`);
  } finally {
    console.log("We are done!");
  }
};
getMoviesAsync();
