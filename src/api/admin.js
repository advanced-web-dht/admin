import { provider } from '../libs/axiosInstance'

export const GetAdminList = async (sort, search) => {
  try {
    const url = `/admin?sort=${sort}&${search && 'search=' + search}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}

export const GetAdmin = async (id) => {
  try {
    const url = `/admin/${id}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}

export const PostAdmin = async (newAdmin) => {
  try {
    const url = '/admin'
    await provider.post(url, newAdmin)
    return true
  } catch {
    return false
  }
}
