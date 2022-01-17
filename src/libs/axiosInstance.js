import axios from 'axios'

export const provider = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL })
