export class LoadingSpinner {
  constructor() {
    this.element = this.#renderComponent();
  }

  #renderComponent() {
    const spinner = document.createElement("div");
    spinner.classList.add("loading-spinner");
    spinner.innerHTML = `
      <div class="spinner-wrapper">
        <div class="spinner"></div>
      </div>
    `;
    return spinner;
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}
