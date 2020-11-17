import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const addPerson = newObject => (
  axios
    .post(baseUrl, newObject)
    .then(response => response.data)
);

const getPeople = () => (
  axios
    .get(baseUrl)
    .then(res => res.data)
);

const phonebookServices = { addPerson, getPeople };
export default phonebookServices
;
