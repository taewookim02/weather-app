import { WeatherController } from "./WeatherController";

export class AppController {
  wc;

  constructor() {
    this.wc = new WeatherController();
  }

  init() {}
}
