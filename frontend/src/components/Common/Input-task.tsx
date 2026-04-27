import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"

interface InputTaskProps {
  task: string
  setTask: (value: string) => void
  onAddTask: () => void
}

export function InputTask({ task, setTask, onAddTask }: InputTaskProps) {
  return (
    <div className="flex-col flex gap-8 items-center w-full m-4">

      <div className="w-full flex-col justify-center items-center text-white pt-10">
        <h1 className="text-3xl font-semibold">Your Tasks</h1>
        <span className="text-zinc-400 text-sm">Stay focused on what matters today.</span>
      </div>

      <div className="flex w-full gap-1 items-center justify-center">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add a new task...'
          className="h-12 rounded-[12px] text-white bg-[#171723] border-[1px]
        border-[#9797a557] border-solid focus:border-purple-500"/>

        <Button
          onClick={onAddTask}
          className="w-12 h-12 flex justify-center items-center 
          bg-purple-500/20 hover:bg-purple-500/40  text-purple-400 rounded-[12px] 
          cursor-pointer"
        >
          <Plus size={20} strokeWidth={3} />
        </Button>
      </div>
    </div>
  )
}