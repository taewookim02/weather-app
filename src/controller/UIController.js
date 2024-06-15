import { CurrentWeather } from "../component/CurrentWeather";
import { ForecastWeather } from "../component/ForecastWeather";
import { Header } from "../component/Header";
import { WeatherController } from "./WeatherController";

const initialCity = {
  detail: { city: "Tokyo" },
};

export class UIController {
  constructor() {
    this.wc = new WeatherController();
    this.unit = "C";
  }

  init() {
    this.#renderComponent();
    // initial citysearch
    this.#handleCitySearch(initialCity);
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
    header.addEventListener("citySearch", (e) => this.#handleCitySearch(e));

    // city description
    const city = document.createElement("span");
    city.textContent = `Results for: `;
    city.classList.add("heading-secondary");
    this.cityName = document.createElement("strong");
    this.cityName.textContent = `Tokyo`;
    city.appendChild(this.cityName);

    // current
    this.current = new CurrentWeather();
    // forecast
    this.forecast = new ForecastWeather();

    // append
    container.appendChild(title);
    container.appendChild(header);
    container.appendChild(city);
    container.appendChild(this.current.element);
    container.appendChild(this.forecast.element);

    this.current.element
      .querySelector(".celcius")
      .addEventListener("click", () => {
        this.#handleUnitChange("C");
      });
    this.current.element
      .querySelector(".fahrenheit")
      .addEventListener("click", () => {
        this.#handleUnitChange("F");
      });
  }

  async #handleCitySearch(e) {
    const city = e.detail.city;
    try {
      this.data = await this.wc.getForecastWeather(city);
      this.#updateUI(this.data);
    } catch (err) {
      console.log(err);
    }
  }

  #handleUnitChange(unit) {
    if (this.unit !== unit) {
      this.unit = unit;
      this.#updateUI(this.data);
    }
  }

  #updateUI(data) {
    // update city name
    this.cityName.textContent = data.location.name;

    // call updates in current, forecast
    this.current.update(data, this.unit);
    this.forecast.update(data, this.unit);
  }
}
