const userInputs = document.querySelector(".userInputs");
const serachIcons = document.querySelector("#serachIcons");
const dataContainer = document.querySelector(".box-1");
const text = document.querySelector(".text");
const boxesImg = document.querySelector(".box-1");
const boxesAppend = document.querySelector(".boxes-of-img");

const accessKey = "VxIN87VrSgB5iiEN4Qs1F4v2OHHYVvqNKbu-M4igJDg";

//gallery async
async function imggalleryweb(query) {
  const gallery = await fetch(
    `https://api.unsplash.com/search/photos?page=10&query=${query}&client_id=${accessKey}`
  ).then((gallery) => gallery.json());

  console.log(gallery);
  //api work start by there
  gallery.results.forEach((userFetchImg) => {
    boxesImg.innerHTML = `
        <div class="box-1">
        <div class="boxes-of-img">
        <img src=" ${userFetchImg.urls.raw} "/>
        <strong>${userFetchImg.alt_description}<strong/>
       </div>
    </div>
`;
  });
}

// click listener
serachIcons.addEventListener("click", () => {
  const SearchInputData = userInputs.value.trim();
  if (SearchInputData !== "") {
    dataContainer.innerHTML = "Best result for you....";
    imggalleryweb(SearchInputData);
  } else {
    dataContainer.innerHTML = "soory we could understand please re-type again";
  }
});
