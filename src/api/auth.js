import { provider } from '../libs/axiosInstance'

export const SubmitLogin = async (username, password) => {
  try {
    return await provider.post('/auth/signin/admin', { username, password })
  } catch {
    return false
  }
}

export const SubmitLogout = () => {
  localStorage.removeItem('user')
  window.location.reload()
}
