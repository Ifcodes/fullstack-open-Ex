import axios from "axios";

const baseUrl = "http://localhost:3003/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const del = (id, obj) => {
  return axios.delete(`${baseUrl}/${id}`, obj);
};
const create = (obj) => {
  return axios.post(baseUrl, obj);
};
const update = (id, obj) => {
  return axios.put(`${baseUrl}/${id}`, obj);
};
const phoneService = {
  getAll,
  del,
  create,
  update,
};

export default phoneService;
