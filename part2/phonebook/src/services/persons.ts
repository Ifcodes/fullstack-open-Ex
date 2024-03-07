import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getContacts = () => {
  const response = axios.get(baseUrl);
  return response.then((res) => res.data);
};

const createContact = (data) => {
  console.log(data);
  const response = axios.post(baseUrl, data);
  return response.then((res) => res.data);
};

const deleteContact = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return response.then((res) => console.log({ res }));
};

export default {
  getContacts,
  createContact,
  deleteContact,
};
