function tempp(response) {
  let tempRes = response.data.temperature.current;

  let tempUpdate = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let Roundwind = response.data.wind.speed;
  windElement.innerHTML = Math.round(Roundwind);
  humidityElement.innerHTML = response.data.temperature.humidity;
  conditionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  tempUpdate.innerHTML = Math.round(tempRes);
}

function URL(city) {
  let apikey = "6015b50d3adc47t42c1668fbad7435o2";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiurl).then(tempp);
}

function cityChange(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");

  URL(inputElement.value);
}
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", cityChange);
URL("Tehran");
