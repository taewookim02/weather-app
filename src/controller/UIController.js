import { CurrentWeather } from "../component/CurrentWeather";
import { ForecastWeather } from "../component/ForecastWeather";
import { Header } from "../component/Header";

export class UIController {
  constructor() {}

  init() {
    this.#renderComponent();
  }
  // #renderComponent

  #renderComponent() {
    // container
    const container = document.querySelector(".container");

    // heading
    const title = document.createElement("h1");
    title.textContent = "Weather app";
    title.classList.add("heading-primary");

    // header
    const header = new Header();

    // city description
    const city = document.createElement("span");
    city.textContent = `Results for: `;
    city.classList.add("heading-secondary");
    const cityName = document.createElement("strong");
    cityName.textContent = `Tokyo`;
    city.appendChild(cityName);

    // current
    const current = new CurrentWeather();
    // forecast
    const forecast = new ForecastWeather();

    // append
    container.appendChild(title);
    container.appendChild(header);
    container.appendChild(city);
    container.appendChild(current);
    container.appendChild(forecast);
  }
}
