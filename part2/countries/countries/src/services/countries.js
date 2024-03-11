import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getCountries = () => {
  const data = axios.get(`${baseUrl}/all`).then((res) => res.data);
  return data;
};

export default {
  getCountries,
};
