import cloudyPng from "../assets/Cloudy.png";
import partlyCloudy from "../assets/PartlyCloudy.png";
import RainThunder from "../assets/RainThunder.png";
import Rainy from "../assets/Rainy.png";
import Snowy from "../assets/Snowy.png";
import Sunny from "../assets/Sunny.png";

export class CurrentWeather {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent = () => {
    const currentContainer = document.createElement("section");
    currentContainer.classList.add("current-container");

    const currentDetails = document.createElement("div");
    currentDetails.classList.add("current__details");

    const currentImgSpan = document.createElement("span");
    currentImgSpan.classList.add("current__img");
    const currentImg = document.createElement("img");
    currentImg.classList.add("current__img--tag");
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

  // Utility function to format date
  #formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: "long" };
    const weekday = date.toLocaleDateString("en-US", options);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${weekday} (${month}/${day})`;
  }

  update = (data, unit) => {
    // unit handling
    const fahrenheit = this.element.querySelector(".fahrenheit");
    const celcius = this.element.querySelector(".celcius");
    if (unit === "C") {
      fahrenheit.classList.add("inactive");
      celcius.classList.remove("inactive");
    } else {
      fahrenheit.classList.remove("inactive");
      celcius.classList.add("inactive");
    }

    // data querySelectors
    const currentData = data.forecast.forecastday[0];
    const temp = this.element.querySelector(".temp");
    const precipitation = this.element.querySelector(".current__precipitation");
    const humidity = this.element.querySelector(".current__humidity");
    const wind = this.element.querySelector(".current__wind");

    // update data
    temp.textContent =
      unit === "C" ? currentData.day.avgtemp_c : currentData.day.avgtemp_f;
    precipitation.textContent = `Precipitation: ${currentData.day.daily_chance_of_rain}%`;
    humidity.textContent = `Humidity: ${currentData.day.avghumidity}%`;
    wind.textContent = `Wind: ${currentData.day.maxwind_kph} m/s`;

    // update summary
    const day = this.element.querySelector(".current__day");
    const status = this.element.querySelector(".current__status");
    const img = this.element.querySelector(".current__img--tag");

    day.textContent = this.#formatDate(currentData.date);
    status.textContent = currentData.day.condition.text;
    const condition = currentData.day.condition.text;
    img.setAttribute("src", this.#getImageSrc(condition)); // update img based on condition text
  };

  #getImageSrc = (condition) => {
    if (condition.includes("rain")) {
      return Rainy;
    }
    if (condition.includes("partly") && condition.includes("cloud")) {
      return partlyCloudy;
    }
    if (condition.includes("cloud")) {
      return cloudyPng;
    }
    if (condition.includes("snow")) {
      return Snowy;
    }
    if (condition.includes("thunder")) {
      return RainThunder;
    }
    return Sunny;
  };
}
