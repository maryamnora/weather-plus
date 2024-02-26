function cityChange(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = inputElement.value;
}
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", cityChange);
