import { useState } from 'react'

export const useAuth = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')))
  return { user }
}
