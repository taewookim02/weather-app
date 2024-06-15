export class WeatherController {
  static #API_KEY = "52890b893b1d49c29be04209240506";
  static URL = "https://api.weatherapi.com/v1";
  constructor() {}

  async getCurrentWeather(city) {
    try {
      const url = `${WeatherController.URL}/current.json?key=${
        WeatherController.#API_KEY
      }&q=${city}`;

      const res = await fetch(url, { mode: "cors" });

      if (!res.ok) {
        throw new Error("Failed to fetch weather:", res.status);
      }

      const weather = await res.json();
      return weather;
    } catch (error) {
      console.log(error);
    }
  }

  async getForecastWeather(city) {
    try {
      // forecast for 3 days ahead
      const url = `${WeatherController.URL}/forecast.json?key=${
        WeatherController.#API_KEY
      }&q=${city}&days=3`;

      // response
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) {
        throw new Error("Failed to fetch weather:", res.status);
      }

      // json
      const forecast = await res.json();
      return forecast;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}
