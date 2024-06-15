import { WeatherController } from "../controller/WeatherController";

export class Header {
  wc;
  constructor() {
    this.wc = new WeatherController();
    const header = this.#renderComponent();
    this.#attachListeners(header);
    return header;
  }

  #renderComponent = () => {
    const header = document.createElement("header");
    header.classList.add("input-container");

    // Form
    const form = document.createElement("form");
    form.classList.add("form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search a city name (i.e. Tokyo)");
    input.required = true;
    input.classList.add("search__input");

    const btn = document.createElement("button");
    btn.classList.add("search__btn");
    // search icon in btn
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" viewBox="0 0 256 256">
      <path
        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
      </path>
    </svg>
    `;

    // append child
    form.appendChild(input);
    form.appendChild(btn);
    header.appendChild(form);

    return header;
  };

  #attachListeners(header) {
    const form = header.querySelector(".form");
    const input = header.querySelector(".search__input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const city = input.value;

      header.dispatchEvent(new CustomEvent("citySearch", { detail: { city } }));
    });
  }
}
