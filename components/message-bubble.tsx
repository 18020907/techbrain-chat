import { format } from "date-fns"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        <div className="text-sm">{message.content}</div>
        <div className={`text-xs mt-1 ${isUser ? "text-blue-100" : "text-gray-500"}`}>
          {format(message.timestamp, "h:mm a")}
        </div>
      </div>
    </div>
  )
}
