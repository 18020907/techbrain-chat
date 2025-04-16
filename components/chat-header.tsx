import { MessageSquare } from "lucide-react"

export default function ChatHeader() {
  return (
    <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-6 w-6" />
        <h2 className="font-semibold text-lg">ManyChat</h2>
      </div>
      <div className="text-xs bg-green-500 px-2 py-1 rounded-full">Online</div>
    </div>
  )
}
