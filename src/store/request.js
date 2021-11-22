import axios from 'axios'

const Request = axios.create({
  baseURL: 'https://api.karenpalacios.com/',
  xsrfHeaderName: 'X-CSRF-Token',
  withCredentials: true
})

Request.defaults.withCredentials = true

export default Request
