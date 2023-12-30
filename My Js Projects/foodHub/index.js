const userInput=document.getElementById('userInputFiled');
const serachIcons = document.getElementById('serachIcons');
const boxes=document.querySelector('.box-1');
     
const mealBoxOpen = document.querySelector('#mealBoxOpen');
const closeIcons = document.querySelector('#closeIcons');


/*Search meal by name*/
async function dataOfFoodWeb(query){
    boxes.innerHTML="Your Items is coming .....";
    
    const dataApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response=await dataApi.json();
    
    boxes.innerHTML="";
    response.meals.forEach(meal =>{
        console.log(meal);
        // container name
        const dataFetch=document.createElement('div');
        //bactic is also used to write html code into js code
        dataFetch.classList.add('boxes');
        dataFetch.innerHTML= ` 
        <img src="${meal.strMealThumb}">
        <h3>${meal.strArea}</h3>
        <b>${meal.strCategory}</b>
        `
        const viewMore=document.createElement('button');
        viewMore.textContent="View Receipe";
        dataFetch.appendChild(viewMore);
        boxes.appendChild(dataFetch);
    
        //view more dialog box appears

        viewMore.addEventListener('click' , ()=>{
            modalboxApper(meal);
        })

    
    });
}
serachIcons.addEventListener('click' , ()=>{
const inputOFUser=userInput.value.trim();
dataOfFoodWeb(inputOFUser);

})

// const modalboxApper=(meal)=>{
//     mealBoxOpen.textContent=`
//     <h3>${meal.strMeal}</h3>
//     `
//     mealBoxOpen.style.visibility="visible";
// }


