const userInput = document.getElementById("userInput");
const dataSearchIcon = document.getElementById("dataSearchIcon");
const imgIcons = document.querySelector(".imgIcons");
const tempChange = document.getElementById("tempChange");
const textOfStateChange = document.getElementById("textOfStateChange");
const errorFound = document.querySelector(".error-not-found");
const weather = document.querySelector(".weather");

// promise passed
async function weatherApp(city) {
  const api = "79b218a0e9782ade94d446031aa94f06";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  const dataFetch = await fetch(`${url}`).then((response) => response.json());
  console.log(dataFetch);
  if (dataFetch.cod === `404`) {
    errorFound.style.display = "flex";
    weather.style.display = "none";
    return;
  }
  weather.style.display = "flex";
  errorFound.style.display = "none";

  tempChange.innerHTML = `${Math.round(dataFetch.main.temp - 273 - 15)} °C`;
  textOfStateChange.innerHTML = `${dataFetch.weather[0].description}`;
  // change the img
 
  switch(dataFetch.weather[0].main){
    case 'Clouds':
      imgIcons.src = "/images/cloud.png";
        break;
    case 'Clear':
      imgIcons.src = "/images/clear.png";
        break;
    case 'Rain':
        imgIcons.src = "/images/rain.png";
        break;

    case 'Snow':
        weather_img.src = "/images/snow.png";
        break;

        

}
  console.log(dataFetch);
}

dataSearchIcon.addEventListener("click", () => {
  weatherApp(userInput.value);
});
