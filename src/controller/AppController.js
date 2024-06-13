import { UIController } from "./UIController";
import { WeatherController } from "./WeatherController";

export class AppController {
  wc;

  constructor() {
    this.wc = new WeatherController();
    this.uc = new UIController();
  }

  init() {}
}
