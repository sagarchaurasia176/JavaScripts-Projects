// userfield
const userFiledTyped = document.querySelector("#default-search");
// click to search btn
const clickToSearch = document.querySelector("#clickToSearch");
// card containers
const mainContainer = document.querySelector("#mainContainer");

//api fetch
const countryGuide = async() => {
    const data = await fetch('https://restcountries.com/v3.1/all')
    const res = await data.json();
    console.log(res);

    // let container = document.createElement('div');
    // container.innerHTML = `
    // <img class="w-45" src="" alt>

    // <div class="data text-center text-black w-auto space-x-2 p-2 grid grid-cols-1 grid-rows-5 ">

    //     <b class="text-white">Country
    //         </b>
    //     <strong class="text-black">India</strong>

    //     <b class="text-white">Captial
    //         </b>
    //     <strong class="text-black">India</strong>

    //     <b class="text-white">Continent
    //         </b>
    //     <strong class="text-black">Population </strong>

    //     <b class="text-white">Currency </b>
    //     <strong class="text-black flex-row-reverse">ruppess</strong>

    //     <b class="text-white">Common lang</b>
    //     <strong class="text-black flex-row-reverse">Hindi</strong>

    //     <br>

    //     </h2>

    // </div>

    // `

    // mainContainer.style.display = "block";
    // container.appendChild(mainContainer);


};


clickToSearch.addEventListener('click', () => {
    countryGuide();

})