import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface TasksCardProps{
  title: string
}

export function TasksCard({title}: TasksCardProps) {
  const [selected, setSelected] = useState(false)

  return (
    <Card
      onClick={() => setSelected(!selected)}
      className={`w-full cursor-pointer transition-all duration-200
      bg-[#141424] border rounded-2xl p-4
      ${
        selected
          ? "border-purple-500 shadow-lg shadow-purple-500/10"
          : "border-white/10"
      }`}
    >
      <CardContent className="flex items-start gap-4 p-0">
        
        {/* Checkbox */}
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-full mt-1
          border transition-all
          ${
            selected
              ? "bg-purple-500 border-purple-500"
              : "border-white/20"
          }`}
        >
          {selected && <Check size={14} className="text-white" />}
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-3">
          <p
            className={`text-sm leading-relaxed transition-all
            ${selected ? "text-white/60 line-through" : "text-white"}`}
          >
            {title}
          </p>

          <Badge
            className="w-fit bg-red-500/10 text-red-400 border border-red-500/20 
                       rounded-full px-3 py-1 text-xs font-medium"
          >
            🔥 URGENT
          </Badge>
        </div>

      </CardContent>
    </Card>
  )
}