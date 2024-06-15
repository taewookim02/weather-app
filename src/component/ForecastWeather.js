import partlyCloudy from "../assets/PartlyCloudy.png";
import cloudyPng from "../assets/Cloudy.png";
import RainThunder from "../assets/RainThunder.png";
import Rainy from "../assets/Rainy.png";
import Snowy from "../assets/Snowy.png";
import Sunny from "../assets/Sunny.png";

export class ForecastWeather {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent() {
    const forecast = document.createElement("section");
    forecast.classList.add("forecast-container");

    const dayContainer = document.createElement("div");
    dayContainer.classList.add("forecast__day-container");
    forecast.appendChild(dayContainer);

    const day = document.createElement("span");
    day.classList.add("forecast__day");
    day.textContent = `Fri`;
    dayContainer.appendChild(day);

    const imgSpan = document.createElement("span");
    imgSpan.classList.add("forecast__img");
    dayContainer.appendChild(imgSpan);

    const img = document.createElement("img");
    img.classList.add("forecast-img-tag");
    img.setAttribute("alt", "Weather image");
    img.setAttribute("src", partlyCloudy);
    imgSpan.appendChild(img);

    const forecastTemp = document.createElement("div");
    forecastTemp.classList.add("forecast__temp");
    dayContainer.appendChild(forecastTemp);

    const firstHighest = document.createElement("span");
    firstHighest.classList.add("forecast__temp--highest");
    firstHighest.textContent = `34°`;
    forecastTemp.appendChild(firstHighest);
    const firstLowest = document.createElement("span");
    firstLowest.classList.add("forecast__temp--lowest");
    firstLowest.classList.add("inactive");
    firstLowest.textContent = `18°`;
    forecastTemp.appendChild(firstLowest);

    const dayContainerSecond = document.createElement("div");
    dayContainerSecond.classList.add("forecast__day-container");
    forecast.appendChild(dayContainerSecond);

    const daySec = document.createElement("span");
    daySec.classList.add("forecast__day");
    daySec.classList.add("forecast__day-2");
    daySec.textContent = "Sat";
    dayContainerSecond.appendChild(daySec);

    const imgSpanSec = document.createElement("span");
    imgSpanSec.classList.add("forecast__img");
    dayContainerSecond.appendChild(imgSpanSec);
    const imgSec = document.createElement("img");
    imgSec.classList.add("forecast-img-tag-2");
    imgSec.setAttribute("alt", "Weather image");
    imgSec.setAttribute("src", RainThunder);
    imgSpanSec.appendChild(imgSec);

    const forecastTempSec = document.createElement("div");
    forecastTempSec.classList.add("forecast__temp");
    dayContainerSecond.appendChild(forecastTempSec);

    const secHighest = document.createElement("span");
    secHighest.classList.add("forecast__temp--highest");
    secHighest.classList.add("forecast__temp--highest-2");
    secHighest.textContent = `27°`;
    forecastTempSec.appendChild(secHighest);
    const secLowest = document.createElement("span");
    secLowest.classList.add("forecast__temp--lowest");
    secLowest.classList.add("forecast__temp--lowest-2");
    secLowest.classList.add("inactive");
    secLowest.textContent = `18°`;
    forecastTempSec.appendChild(secLowest);

    return forecast;
  }

  update(data, unit) {
    console.log(data);
    const dayOne = data.forecast.forecastday[1];

    // get day Sun from "2024-06-16"
    const abbDay = this.#getAbbreviatedDay(dayOne.date);

    // get highest temp
    const highestTemp =
      unit === "C" ? dayOne.day.maxtemp_c : dayOne.day.maxtemp_f;
    const lowestTemp =
      unit === "C" ? dayOne.day.mintemp_c : dayOne.day.mintemp_f;

    // get img
    const condition = dayOne.day.condition.text;
    const imgSrc = this.#getImageSrc(condition);
    console.log(imgSrc);

    // update this.element
    const forecastDay = this.element.querySelector(".forecast__day");
    const highestTempTag = this.element.querySelector(
      ".forecast__temp--highest"
    );
    const lowestTempTag = this.element.querySelector(".forecast__temp--lowest");
    const forecastImgTag = this.element.querySelector(".forecast-img-tag");
    forecastDay.textContent = abbDay;
    highestTempTag.textContent = `${highestTemp}°`;
    lowestTempTag.textContent = `${lowestTemp}°`;
    forecastImgTag.setAttribute("src", imgSrc);

    const dayTwo = data.forecast.forecastday[2];
    const abbDay2 = this.#getAbbreviatedDay(dayTwo.date);
    const highestTemp2 =
      unit === "C" ? dayTwo.day.maxtemp_c : dayTwo.day.maxtemp_f;
    const lowestTemp2 =
      unit === "C" ? dayTwo.day.mintemp_c : dayTwo.day.mintemp_f;
    const condition2 = dayTwo.day.condition.text;
    const imgSrc2 = this.#getImageSrc(condition2);

    const forecastDay2 = this.element.querySelector(".forecast__day-2");
    const highestTempTag2 = this.element.querySelector(
      ".forecast__temp--highest-2"
    );
    const lowestTempTag2 = this.element.querySelector(
      ".forecast__temp--lowest-2"
    );
    const forecastImgTag2 = this.element.querySelector(".forecast-img-tag-2");
    forecastDay2.textContent = abbDay2;
    highestTempTag2.textContent = `${highestTemp2}°`;
    lowestTempTag2.textContent = `${lowestTemp2}°`;
    forecastImgTag2.setAttribute("src", imgSrc2);
  }

  #getAbbreviatedDay = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: "short" }; // short form of the weekday (e.g., Sun, Mon)
    return date.toLocaleDateString("en-US", options);
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
