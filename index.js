const apiKey = "2431bb7af7d54949a0e180334231801";

const city = document.querySelector(".city");
const icon = document.querySelector(".icon");
const condition = document.querySelector(".condition");
const temp = document.querySelector(".temp");

const cityInput = document.querySelector(".city-input");
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    `https://api.unsplash.com/search/photos/?client_id=2kd3ZjVt5tGBAlH0KMTER7YQwBnVlRIImLRYgoD3yPM&query=${cityInput.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.results.length);
      console.log(data.results);
      console.log(data.results[randomIndex].urls.regular);
      document.body.style.backgroundImage = `url(${data.results[randomIndex].urls.regular})`;
    });

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.location.name;
      icon.src = data.current.condition.icon;
      condition.innerText = data.current.condition.text;
      temp.innerText = data.current.temp_c + "°C";
    })
    .catch((err) => console.error(err));
});
