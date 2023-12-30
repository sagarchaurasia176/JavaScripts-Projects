const apiKey='VxIN87VrSgB5iiEN4Qs1F4v2OHHYVvqNKbu-M4igJDg';
const formElements = document.querySelector('form');
const inputElements = document.getElementById('search');
const buttonSearch = document.getElementById('searchButton');
const moreShowButton=document.getElementById('showMore');

let inputData="";
let page=1;

async function searcImage(){
    inputData = inputElements.value;
    const url=
    `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&clien_id=${apiKey}
    `
const res =await fetch(url)
const data = await res.json()
const results =data.results;

if(page==1){
    
}
results.map((results) =>{

})

}