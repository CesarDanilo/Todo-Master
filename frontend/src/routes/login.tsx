import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Eye, EyeOff, User, Lock, SquareCheckBig } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const navigate = useNavigate()

  // 🔵 LOGIN
  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/v1/auth/login',
        {
          email,
          password,
        }
      )
      return res.data
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token)
      navigate({ to: '/' })
    },
    onError: (err: any) => {
      console.error(err.response?.data || err.message)
      alert(JSON.stringify(err.response?.data))
    },
  })

  // 🟢 REGISTER
  const registerMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/v1/auth/register',
        {
          email,
          password,
          full_name: fullName,
        }
      )
      return res.data
    },
    onSuccess: () => {
      alert('Conta criada com sucesso!')
      setIsRegister(false)
      setPassword('')
      setFullName('')
    },
    onError: (err: any) => {
      console.error(err.response?.data || err.message)
      alert(JSON.stringify(err.response?.data))
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isRegister) {
      registerMutation.mutate()
    } else {
      loginMutation.mutate()
    }
  }

  const isLoading =
    loginMutation.isPending || registerMutation.isPending

  return (
    <div className="flex h-screen w-full">
      <main className="relative flex w-full items-center justify-center overflow-y-auto px-4
        bg-[radial-gradient(ellipse_at_top,_#3b2d63_0%,_#1a1633_45%,_#0c0c16_85%)]">

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 shadow-xl">

          <div className="flex items-center gap-3 mb-6">
            <SquareCheckBig className="text-purple-400 w-10 h-10" />
            <span className="text-white font-medium text-lg">Tasker</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            {isRegister ? 'Create account' : 'Welcome back'}
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            {isRegister
              ? 'Create your account to start using Tasker.'
              : 'Sign in to pick up where you left off.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* full name (só register) */}
            {isRegister && (
              <div>
                <label className="text-xs text-zinc-400">FULL NAME</label>
                <div className="mt-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus-within:border-purple-400">
                  <User className="w-4 h-4 text-zinc-400 mr-2" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                  />
                </div>
              </div>
            )}

            {/* email */}
            <div>
              <label className="text-xs text-zinc-400">EMAIL</label>
              <div className="mt-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <User className="w-4 h-4 text-zinc-400 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* password */}
            <div>
              <label className="text-xs text-zinc-400">PASSWORD</label>
              <div className="mt-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <Lock className="w-4 h-4 text-zinc-400 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-[#8047e1] to-[#9e68fc]
              py-3 font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {isLoading
                ? 'Processing...'
                : isRegister
                  ? 'Create account'
                  : 'Login'}
            </button>
          </form>

          {/* toggle */}
          <p className="mt-6 text-center text-sm text-zinc-400">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#8047e1] hover:underline"
            >
              {isRegister ? 'Sign in' : 'Create account'}
            </button>
          </p>

        </div>
      </main>
    </div>
  )
}