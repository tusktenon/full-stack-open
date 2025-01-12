import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

function getAll() {
  return axios.get(baseURL).then(response => response.data)
}

function create(newEntry) {
  return axios.post(baseURL, newEntry).then(response => response.data)
}

export default { getAll, create }
