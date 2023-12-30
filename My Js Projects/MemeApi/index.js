const searchButton = document.querySelector("#buttonSearch");
const text = document.querySelector(".boxes .text");
//container
const box = document.querySelector('#result');
//api handle
const memeData = async() => {
    text.innerHTML = "search best result for you";
    const fetchApi = await fetch(
        "https://api.imgflip.com/get_memes"
    ).then((fetchApi) => fetchApi.json());
    console.log(fetchApi);
    //remove text
    fetchApi.data.memes.forEach(datas => {
        {
            box.innerHTML = `
            <div id="result" class="img-boxes">
            <img src="${datas.url}" />
        </div>
        </div>
                `
        }

    })


    setInterval(() => {
        text.remove();
    }, 4000)
    box.style.display = 'block';
    /// pendiig task






};

searchButton.addEventListener("click", () => {
    memeData();
});