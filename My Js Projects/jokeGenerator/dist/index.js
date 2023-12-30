const randomGenerate = document.querySelector(".randomJoke")
const buttonToGenerate = document.querySelector(".buttonToGenerate");

// random api joke 
const randomJoke = async() => {
    const apiUrl = await
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit')
        .then(data => data.json())

    .then(item => {
        randomGenerate.textContent = `${item.joke}`
    });

};
buttonToGenerate.addEventListener('click', () => {
    randomJoke();

});