function tempp(response) {
  let tempUpdate = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let tempRes = response.data.temperature.current;
  tempUpdate.innerHTML = Math.round(tempRes);
  cityElement.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  let Roundwind = response.data.wind.speed;
  windElement.innerHTML = Math.round(Roundwind);
  timeElement.innerHTML = time(date);
}
function time(date) {
  let hour = date.getHours();
  let mins = date.getMinutes();
  let Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = Days[date.getDay()];
  if (mins < 10) {
    mins = `0${mins}`;
  }
  return `${day}, ${hour}:${mins}`;
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
