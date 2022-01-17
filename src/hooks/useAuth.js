import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')))

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   setUser(user)
  // }, [])
  return { user }
}
