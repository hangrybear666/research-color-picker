import axios from 'axios'
const baseUrl = `https://research-col-pick-json-srv.herokuapp.com/colors`
// const baseUrl = `http://localhost:3001/colors`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }