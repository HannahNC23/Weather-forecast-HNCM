function updateWeather(response) {
  let currentTempValueElement = document.querySelector("#currentTempValue");
  let temperature = response.data.temperature.current;
  let weatherCityElement = document.querySelector("#weatherCity");
  weatherCityElement.innerHTML = response.data.city;

  currentTempValueElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "et3cb33e62oc3445295794b051528aaf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Nottingham");
