import cloudyPng from "../assets/Cloudy.png";

export class CurrentWeather {
  constructor() {
    const currentWeather = this.#renderComponent();
    return currentWeather;
  }

  #renderComponent = () => {
    const currentContainer = document.createElement("section");
    currentContainer.classList.add("current-container");

    const currentDetails = document.createElement("div");
    currentDetails.classList.add("current__details");

    const currentImgSpan = document.createElement("span");
    currentImgSpan.classList.add("current__img");
    const currentImg = document.createElement("img");
    currentImg.setAttribute("src", cloudyPng);
    currentImg.setAttribute("alt", "weather");
    currentDetails.appendChild(currentImgSpan);
    currentImgSpan.appendChild(currentImg);

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current__temp");
    const temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = 28;
    const celcius = document.createElement("span");
    celcius.classList.add("celcius");
    celcius.textContent = "°C";
    const sep = document.createElement("span");
    sep.classList.add("sep");
    sep.classList.add("inactive");
    sep.textContent = "|";
    const fahrenheit = document.createElement("span");
    fahrenheit.classList.add("fahrenheit");
    fahrenheit.classList.add("inactive");
    fahrenheit.textContent = "°F";
    currentTemp.appendChild(temp);
    currentTemp.appendChild(celcius);
    currentTemp.appendChild(sep);
    currentTemp.appendChild(fahrenheit);
    currentDetails.appendChild(currentTemp);

    const weatherDetails = document.createElement("div");
    weatherDetails.classList.add("weather__details");
    const precipitation = document.createElement("span");
    precipitation.classList.add("current__precipitation");
    precipitation.textContent = `Precipitation: 0%`;
    const humidity = document.createElement("span");
    humidity.classList.add("current__humidity");
    humidity.textContent = `Humidity: 51%`;
    const wind = document.createElement("span");
    wind.classList.add("current__wind");
    wind.textContent = `Wind: 1 m/s`;
    weatherDetails.appendChild(precipitation);
    weatherDetails.appendChild(humidity);
    weatherDetails.appendChild(wind);

    const summary = document.createElement("div");
    summary.classList.add("current__summary");
    const summaryHeading = document.createElement("span");
    summaryHeading.classList.add("current__summary--heading");
    summaryHeading.textContent = "Weather";
    const day = document.createElement("span");
    day.classList.add("current__day");
    day.textContent = `Thursday (06/14)`;
    const status = document.createElement("span");
    status.classList.add("current__status");
    status.textContent = `Sunny`;
    summary.appendChild(summaryHeading);
    summary.appendChild(day);
    summary.appendChild(status);

    currentContainer.appendChild(currentDetails);
    currentDetails.appendChild(weatherDetails);
    currentContainer.appendChild(summary);

    return currentContainer;
  };

  #handleEvent = () => {};
}
