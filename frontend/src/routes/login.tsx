import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Eye, EyeOff, User, Lock, SquareCheckBig } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex h-screen w-full">
      <main
        className="relative flex w-full items-center justify-center overflow-y-auto px-4
        bg-[radial-gradient(ellipse_at_top,_#3b2d63_0%,_#1a1633_45%,_#0c0c16_85%)]"
      >
        {/* overlay lateral escuro */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* card */}
        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 shadow-xl">

          {/* topo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
              <span className="text-purple-400 font-bold"><SquareCheckBig /></span>
            </div>
            <span className="text-white font-medium text-lg">Tasker</span>
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Sign in to pick up where you left off.
          </p>

          {/* form */}
          <form className="mt-8 space-y-5">
            {/* username */}
            <div>
              <label className="text-xs text-zinc-400">USERNAME</label>
              <div className="mt-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus-within:border-purple-400">
                <User className="w-4 h-4 text-zinc-400 mr-2" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* password */}
            <div>
              <label className="text-xs text-zinc-400">PASSWORD</label>
              <div className="mt-1 flex items-center rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus-within:border-purple-400">
                <Lock className="w-4 h-4 text-zinc-400 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
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

            {/* options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-400">
                <input type="checkbox" className="accent-purple-500" />
                Remember me
              </label>
              <button
                type="button"
                className="text-[#8047e1] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* botão */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#8047e1] to-[#9e68fc] shadow-2xl shadow-[#8047e1] py-3 font-semibold text-white hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* footer */}
          <p className="mt-6 text-center text-sm text-zinc-400">
            New here?{' '}
            <span className="text-[#8047e1] hover:underline cursor-pointer">
              Continue as guest
            </span>
          </p>
        </div>
      </main>
    </div>
  )
}