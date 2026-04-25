import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function InputTask() {
  return(
    <div className="flex-col flex gap-8 items-center w-full m-4">

      <div className="w-full flex-col justify-center items-center text-white pt-10">
        <h1 className="text-3xl font-semibold">Your Tasks</h1>
        <span className="text-zinc-400 text-sm">Stay focused on what matters today.</span>
      </div>

      <div className="flex w-full gap-1 items-center justify-center">
        <Input placeholder='Add a new task...' 
          className="h-12 rounded-[12px] text-white bg-[#171723] border-[1px]
        border-[#9797a557] border-solid focus:border-purple-500"/>
        
        <Button
          className="w-12 h-12 flex justify-center items-center 
          bg-gradient-to-r from-[#8047e1] to-[#9e68fc] 
          shadow-2xl shadow-[#8047e1] rounded-[12px] 
          text-white cursor-pointer"
        >
          <Plus size={20} strokeWidth={3} />
        </Button>
      </div>
    </div>
  )
}