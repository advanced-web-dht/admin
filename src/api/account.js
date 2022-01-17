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
    const url = `/accounts/${id}`
    const { data } = await provider.get(url)
    return data
  } catch {
    return false
  }
}

export const MapStudentId = async (studentId, id) => {
  try {
    const url = `/accounts/${id}/studentId`
    await provider.put(url, { studentId })
    return true
  } catch {
    return false
  }
}

export const UnmapStudentId = async (id) => {
  try {
    const url = `/accounts/${id}/studentId`
    await provider.delete(url)
    return true
  } catch {
    return false
  }
}

export const BlockAccount = async (id) => {
  try {
    const url = `/accounts/${id}/blocked`
    await provider.patch(url)
    return true
  } catch {
    return false
  }
}

export const UnblockAccount = async (id) => {
  try {
    const url = `/accounts/${id}/unblock`
    await provider.patch(url)
    return true
  } catch {
    return false
  }
}
