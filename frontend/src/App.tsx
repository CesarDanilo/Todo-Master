import { RouterProvider, createRouter } from '@tanstack/react-router'
// Importa a árvore que o TanStack Router gera sozinho
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from "@/components/ui/sonner"
// Cria a instância do roteador
const router = createRouter({ routeTree })

// Registra o roteador para segurança de tipos (TypeScript)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

function App() {
  return (
    // Provedor que espalha as rotas por toda a aplicação
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors closeButton />
    </QueryClientProvider>
  )
}

export default App