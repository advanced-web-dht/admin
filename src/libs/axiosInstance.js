import axios from 'axios'

export const provider = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL })

provider.interceptors.request.use((req) => {
  const user = localStorage.getItem('user')
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).accessToken}`
  }
  return req
})
