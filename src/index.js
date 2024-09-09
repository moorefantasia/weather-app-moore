function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")

    console.log(response.data.condition.description);

    cityElement.innerHTML = response.data.city;
    descriptionElement = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "ftcca3f3of442d09ad02e70f73bc3e8b";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
    
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
