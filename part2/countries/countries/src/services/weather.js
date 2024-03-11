import axios from "axios";

const key = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getWeather = (lat, lon) => {
  const data = axios
    .get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    .then((res) => res.data);
  return data;
};

export default {
  getWeather,
};
