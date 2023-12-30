let api = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

let data = async function apiDta() {
    try {
        let ftch = await fetch(api);
        let resp = await ftch.json();
        // console.log(resp);

        resp.meals.forEach((items) => {

            let divCrt = document.createElement("div");
            divCrt.innerHTML = `
                <div class="meal">
                <p class="nameOfDood">${items.strMeal}</p>
                <img src="${items.strMealThumb}" alt="foody">
            </div>
`;
            document.querySelector('.container').appendChild(divCrt)

        });


        resp.meals.filter((datas) => {
            let divCrt = document.createElement("div");
            divCrt.innerHTML = `
                <div class="meal">
                <p class="nameOfDood">${datas.strMeal}</p>
                <img src="${datas.strMealThumb}" alt="foody">
            </div>
`;
            document.querySelector('.container').appendChild(divCrt)
        })





    } catch {
        console.log("error");
    }

};

document.querySelector("#meanClick").addEventListener("click", () => {
    data();
});