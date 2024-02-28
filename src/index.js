function tempp(response) {
  let tempElement = response.data.temperature.current;
  let tempUpdate = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  tempUpdate.innerHTML = Math.round(tempElement);
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
