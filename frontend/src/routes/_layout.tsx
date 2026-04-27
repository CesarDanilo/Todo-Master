import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { isLoggedIn } from "@/hooks/useAuth" // Importe a função síncrona

export const Route = createFileRoute('/_layout')({
  beforeLoad: async () => {
    // Se não estiver logado, redireciona para o login antes de carregar o componente
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex justify-center items-center overflow-y-auto w-full pt-8
        bg-[radial-gradient(ellipse_at_top,_#3b2d63_0%,_#1a1633_45%,_#0c0c16_85%)]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/60 
        before:via-transparent before:to-black/60 before:pointer-events-none">      
        <Outlet />
      </main>
    </div>
  )
}