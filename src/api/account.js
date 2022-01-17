import { provider } from '../libs/axiosInstance'

export const GetAccounts = async (sort, search) => {
  try {
    const url = `/accounts?sort=${sort}&${search && 'search=' + search}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}

export const GetAccount = async (id) => {
  try {
    const url = `/account/${id}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}
