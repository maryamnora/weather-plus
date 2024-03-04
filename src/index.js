function tempp(response) {
  let tempUpdate = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);
  let tempRes = response.data.temperature.current;
  tempUpdate.innerHTML = Math.round(tempRes);
  cityElement.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  let Roundwind = response.data.wind.speed;
  windElement.innerHTML = Math.round(Roundwind);
  timeElement.innerHTML = time(date);

  iconElement.innerHTML = ` <img src="${response.data.condition.icon_url}" class="icon" />`;
  apiForecast(response.data.city);
}
function time(date) {
  let hour = date.getHours();
  let mins = date.getMinutes();
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
function apiForecast(city) {
  let apikey = "6015b50d3adc47t42c1668fbad7435o2";
  let apiurl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiurl).then(displayForecast);
}
function dayForecast(timestep) {
  let date = new Date(timestep * 1000);
  let dayys = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayyy = dayys[date.getDay()];
  return dayyy;
}

function displayForecast(response) {
  let dayy = response.data.daily;
  let forecasthtml = "";
  dayy.forEach(function (fday, index) {
    if (index < 5) {
      forecasthtml =
        forecasthtml +
        `<div class="forecast">
          <div class="forecast-date">${dayForecast(fday.time)}</div>
               <div class="forecast-icon">
      <img src="${fday.condition.icon_url}" width="40px"></div>
          <div class="forecast-temp">
            <span class="max">${Math.round(
              fday.temperature.maximum
            )}°  </span> <span class="min">${Math.round(
          fday.temperature.minimum
        )}°</span>
          </div>
        </div>`;
    }
  });

  let forecastElement = document.querySelector("#weather-forecast");
  forecastElement.innerHTML = forecasthtml;
}
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", cityChange);
URL("Tehran");
