import axios from 'axios'
const baseUrl = `https://research-col-pick-json-srv.herokuapp.com/colors`
// const baseUrl = `http://localhost:3001/colors`

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { create, getAll }