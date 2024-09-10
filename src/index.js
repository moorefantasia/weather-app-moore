function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

    


    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = ` <img 
                src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
   
   getForecast(response.data.city);
}

function formatDate(date) {
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

}

function searchCity(city) {
let apiKey = `ftcca3f3of442d09ad02e70f73bc3e8b`;
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
    
  searchCity(searchInput.value);
}

function getForecast(city) {
    let apiKey = "ftcca3f3of442d09ad02e70f73bc3e8b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);

}

function displayForecast(response) {
    console.log(response.data);


    
    let forecastHtml = "";

    days.forEach(function (day) {
    forecastHtml = 
        forecastHtml +
        `
    <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌤️</div>
            <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
           <strong>15°</strong></div>
            <div class="weather-forecast-temperature">9°</div>  
            </div>
            </div>
            `;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("#Paris");




