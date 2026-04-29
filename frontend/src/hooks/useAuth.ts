import { useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

const TOKEN_KEY = 'access_token'

// função pura (pode usar fora de componente)
export const isLoggedIn = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}

export function useAuth() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState<boolean>(isLoggedIn())

  useEffect(() => {
    setAuthenticated(isLoggedIn())
  }, [])

  const login = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
    setAuthenticated(true)
    navigate({ to: '/' })
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setAuthenticated(false)
    navigate({ to: '/login' })
  }

  return {
    isLoggedIn: authenticated,
    login,
    logout,
  }
}

export default useAuth