import { useNavigate } from '@tanstack/react-router'

// Função exportada para uso fora de componentes (como no beforeLoad do Router)
export const isLoggedIn = () => {
  const token = localStorage.getItem('access_token') // Ou o nome que você definiu no seu backend
  return !!token // Retorna true se o token existir
}

export function useAuth() {
  const navigate = useNavigate()

  const login = (token: string) => {
    localStorage.setItem('access_token', token)
    navigate({ to: '/' })
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    navigate({ to: '/login' })
  }

  return {
    isLoggedIn: isLoggedIn(),
    login,
    logout,
  }
}

export default useAuth