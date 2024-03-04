import axios from "axios";

const baseUrl = "http://localhost:3001/";

const getContacts = () => {
  const response = axios.get(baseUrl);
  return response.then((res) => res.data);
};

const createContact = (data) => {
  console.log(data);
  const response = axios.post(baseUrl, data);
  return response.then((res) => res.data);
};

export default {
  getContacts,
  createContact,
};
