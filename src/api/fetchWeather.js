import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

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
