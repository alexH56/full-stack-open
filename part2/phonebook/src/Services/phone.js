import axios from 'axios';
const baseURL = 'http://localhost:3001/persons/';

const getPeople = () => (
  axios
    .get(baseURL)
    .then(res => res.data)
);

const addPerson = newObject => (
  axios
    .post(baseURL, newObject)
    .then(response => response.data)
);

const updatePerson = (id, newObject) => (
  axios
    .put(`${baseURL}/${id}`, newObject)
    .then(response => response.data)
);

const deletePerson = (id) => (
  axios
    .delete(`${baseURL}/${id}`)
);

const phonebookService = { addPerson, getPeople, deletePerson, updatePerson };
export default phonebookService
;
