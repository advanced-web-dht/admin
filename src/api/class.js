import { provider } from '../libs/axiosInstance'

export const GetAllClasses = async (sort, search) => {
  try {
    const url = `/classes/admin?sort=${sort}&${search && 'search=' + search}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}

export const GetClass = async (id) => {
  try {
    const url = `/classes/${id}/admin`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}
