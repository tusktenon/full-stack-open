import axios from 'axios'

const baseURL = 'http://localhost:3001/api/persons'

function getAll() {
  return axios.get(baseURL).then(response => response.data)
}

function create(newEntry) {
  return axios.post(baseURL, newEntry).then(response => response.data)
}

function remove(entry) {
  return axios.delete(`${baseURL}/${entry.id}`)
}

function update(entry, newNumber) {
  return axios
    .patch(`${baseURL}/${entry.id}`, { number: newNumber })
    .then(response => response.data)
}

export default { getAll, create, remove, update }
