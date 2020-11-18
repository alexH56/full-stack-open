import axios from 'axios';
const baseURL = 'http://localhost:3001/persons/';

const addPerson = newObject => (
  axios
    .post(baseURL, newObject)
    .then(response => response.data)
);

const getPeople = () => (
  axios
    .get(baseURL)
    .then(res => res.data)
);

const deletePerson = (personID) => {
  const resourceAddress = baseURL + personID;
  return axios.delete(resourceAddress);
};

const phonebookServices = { addPerson, getPeople, deletePerson };
export default phonebookServices
;
