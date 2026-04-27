import { Header } from '@/components/Common/Header'
import { InputTask } from '@/components/Common/Input-task'
import { TasksCard } from '@/components/Common/Tasks-cards'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [taskList, setTaskList] = useState<string[]>([])
  const [task, setTask] = useState<string>("")

  const handleAddTask = () => {
    if (task.trim() === "") return

    setTaskList((prev) => [...prev, task])
    setTask("")
  }

  return (
    <div className="flex flex-col h-full w-lg items-center">
      <Header />
      <InputTask task={task} setTask={setTask} onAddTask={handleAddTask} />
      <div className="w-full flex flex-col gap-3">
        {
          taskList.map((item, index) => (
            <TasksCard key={index} title={item} />
          ))
        }
      </div>
    </div>
  )
}
