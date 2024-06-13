import partlyCloudyPng from "../assets/PartlyCloudy.png";
import rainThunderPng from "../assets/RainThunder.png";

export class ForecastWeather {
  constructor() {
    const forecast = this.#renderComponent();
    return forecast;
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

    const PartlyCloudyImg = document.createElement("img");
    PartlyCloudyImg.setAttribute("alt", "Weather image");
    PartlyCloudyImg.setAttribute("src", partlyCloudyPng);
    imgSpan.appendChild(PartlyCloudyImg);

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
    daySec.textContent = `Sat`;
    dayContainerSecond.appendChild(daySec);

    const imgSpanSec = document.createElement("span");
    imgSpanSec.classList.add("forecast__img");
    dayContainerSecond.appendChild(imgSpanSec);
    const imgSec = document.createElement("img");
    imgSec.setAttribute("alt", "Weather image");
    imgSec.setAttribute("src", rainThunderPng);
    imgSpanSec.appendChild(imgSec);

    const forecastTempSec = document.createElement("div");
    forecastTempSec.classList.add("forecast__temp");
    dayContainerSecond.appendChild(forecastTempSec);

    const secHighest = document.createElement("span");
    secHighest.classList.add("forecast__temp--highest");
    secHighest.textContent = `27°`;
    forecastTempSec.appendChild(secHighest);
    const secLowest = document.createElement("span");
    secLowest.classList.add("forecast__temp--lowest");
    secLowest.classList.add("inactive");
    secLowest.textContent = `18°`;
    forecastTempSec.appendChild(secLowest);

    return forecast;
  }

  #attachListeners = () => {};
}
