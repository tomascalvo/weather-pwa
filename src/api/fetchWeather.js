import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c74ad151b81f8a730ecc4676809a807e";

export const fetchWeather = async (query) => {
  const response = axios.get(url, {
    params: {
      q: query,
      units: "imperial",
      APPID: API_KEY,
    },
  });
  return response;
};
