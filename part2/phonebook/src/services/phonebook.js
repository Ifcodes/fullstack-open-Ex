import axios from "axios";
const baseUrl = "/api/persons";

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {

  const response = await axios.get(baseUrl, {
    headers: {Authorization: token}
  })

  return response
};

const del = async (id, obj) => {
  console.log(token)
  const config = {
    headers: {Authorization: token}
  }
  return await axios.delete(`${baseUrl}/${id}`, config);
};

const create =  async (obj) => {
  console.log(token)
  const config = {
    headers: {Authorization: token},
  }

  const response = await axios.post(baseUrl, obj, config)
  return response.data
};

const update = async (id, obj) => {
  console.log(token)
  const config = {
    headers: {Authorization: token}
  }

  const response = await axios.put(`${baseUrl}/${id}`, obj, config);

  return response.data
};
const phoneService = {
  getAll,
  del,
  create,
  update,
  setToken
};

export default phoneService;
