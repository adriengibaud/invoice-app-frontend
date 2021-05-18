import axios from 'axios';

const baseUrl = '/api/invoice';

const getAll = (userId) => {
  const request = axios.get(`${baseUrl}/${userId}`);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(`${baseUrl}/create`, newObject);
  return request.then((response) => response.data);
};

const update = (newObject) => {
  const request = axios.post(`${baseUrl}/${newObject.id}/update`, newObject);
  return request.then((response) => response.data);
};

const deleteInvoice = (id) => {
  axios.post(`${baseUrl}/${id}/delete`);
};

export default {
  getAll,
  create,
  update,
  deleteInvoice,
};
