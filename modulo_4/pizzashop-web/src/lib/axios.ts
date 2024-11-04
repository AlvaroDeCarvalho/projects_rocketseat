import axios from 'axios'

axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
})
