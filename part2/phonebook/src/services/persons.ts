import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getContacts = () => {
  const response = axios.get(baseUrl);
  return response.then((res) => res.data);
};

const createContact = (data) => {
  const response = axios.post(baseUrl, data);
  return response.then((res) => res.data);
};

const updateContact = (data) => {
  const response = axios
    .put(`${baseUrl}/${data.id}`, data)
    .then((res) => res.data);

  return response;
};

const deleteContact = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return response.then((res) => res.data);
};

export default {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
};
