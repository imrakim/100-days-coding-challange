let list = "";
let weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

fetch(weatherUrl)
  .then((x) => x.json())
  .then((x) => {
    for (const y of x) { // Assuming you want to iterate over the hourly forecast
      list += `<div>${y.}</div>`;
    //   list += `<p>${y.relative_humidity_2m}</p>`;
    //   list += `<p>${y.wind_speed_10m}</p>`;
    }
    const weather = document.querySelector("#weather");
    weather.innerHTML = list;
  })
  .catch((error) => console.error('Error:', error));
