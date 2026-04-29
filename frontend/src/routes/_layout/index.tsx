import { Header } from '@/components/Common/Header'
import { InputTask } from '@/components/Common/Input-task'
import { TasksCard } from '@/components/Common/Tasks-cards'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

type Task = {
  id: string
  title: string
  description: string
  is_completed: boolean
  priority: string
}

function RouteComponent() {
  const [task, setTask] = useState('')
  const queryClient = useQueryClient()

  // 🔥 GET TASKS (CORRETO)
  const { data: taskList = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await api.get('/task/')
      return res.data
    },
  })

  // 🔥 CREATE TASK
  const createTaskMutation = useMutation({
    mutationFn: async (newTask: string) => {
      const res = await api.post('/task/', {
        title: newTask,
        description: 'descrição',
        is_completed: false,
        priority: 'medium',
      })

      return res.data
    },

    onSuccess: () => {
      setTask('')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },

    onError: (err: any) => {
      console.error(err.response?.data || err.message)
      alert('Erro ao criar tarefa')
    },
  })

  const handleAddTask = () => {
    if (!task.trim()) return
    createTaskMutation.mutate(task)
  }

  return (
    <div className="flex flex-col h-full w-lg items-center">
      <Header />

      <InputTask
        task={task}
        setTask={setTask}
        onAddTask={handleAddTask}
      />

      <div className="w-full flex flex-col gap-3">
        {taskList.map((item: Task) => (
          <TasksCard key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  )
}