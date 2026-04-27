import { ArrowLeft, UserRound } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between h-12 w-full">
      <div className="flex justify-center items-center h-10 w-10 bg-purple-500/20 
      text-purple-400 rounded-[12px] border-[1px]
      border-[#9797a557] border-solid cursor-pointer">
        <ArrowLeft />
      </div>
      <div className="flex justify-center items-center gap-4">
        <span className="text-[12px] font-semibold text-zinc-400">3 OPEN</span>
        <div className="flex justify-center items-center h-10 w-10
        bg-purple-500/20 rounded-[12px] 
        text-purple-400 cursor-pointer">
          <UserRound />
        </div>
      </div>
    </div>
  )
}