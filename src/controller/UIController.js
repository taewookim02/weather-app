import { CurrentWeather } from "../component/CurrentWeather";
import { ForecastWeather } from "../component/ForecastWeather";
import { Header } from "../component/Header";

export class UIController {
  constructor() {}

  init() {
    this.render();
  }
  // render

  render() {
    // container
    const container = document.querySelector(".container");

    // heading
    const title = document.createElement("h1");
    title.textContent = "Weather app";
    title.classList.add("heading-primary");

    // header
    const header = new Header();
    // current
    const current = new CurrentWeather();
    // forecast
    const forecast = new ForecastWeather();

    // append
    container.appendChild(title);
    container.appendChild(header);
    container.appendChild(current);
    container.appendChild(forecast);
  }
}
