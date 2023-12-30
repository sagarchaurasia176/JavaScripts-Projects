const userInputBar = document.querySelector("#user-input-bar");
const userClick = document.querySelector("#user-click-function");
const heroSections = document.querySelector("#hero-sections");
const load = document.querySelector(".preloade-first");


const movieGuide = async(movie) => {
    const apiData = await
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e78bccb&t=${movie}`);
    const response = await apiData.json();
    console.log(response);
}




// user click functions
userClick.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = userInputBar.value.trim();
    if (userInput !== "") {

        movieGuide(userInput);

    }
});