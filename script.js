const apiKey = "a5ebb1e7e7ad792775a5bac1054027ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const srchInput = document.querySelector(".search input");
const srchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function cekCuaca(city) {
  const respon = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await respon.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mist.png";
  }
}

srchBtn.addEventListener("click", () => {
  cekCuaca(srchInput.value);
});
