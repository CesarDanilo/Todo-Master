import { Header } from '@/components/Common/Header'
import { InputTask } from '@/components/Common/Input-task'
import { TasksCard } from '@/components/Common/Tasks-cards'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col h-full w-lg items-center">
      <Header />
      <InputTask />
      <TasksCard />
    </div>
  )
}
