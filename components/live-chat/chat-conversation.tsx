"use client"

import { useState } from "react"
import { Send, Paperclip, Smile } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  content: string
  sender: "user" | "customer"
  timestamp: Date
}

export default function ChatConversation() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    },
    {
      id: "2",
      content: "I have a question about your service.",
      sender: "customer",
      timestamp: new Date(Date.now() - 1000 * 60 * 4), // 4 minutes ago
    },
    {
      id: "3",
      content: "Sure, I'd be happy to help. What would you like to know?",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 3), // 3 minutes ago
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: message,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Chat header */}
      <div className="px-6 py-3 border-b flex items-center">
        <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
          <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-sm font-medium">Minh</h3>
          <p className="text-xs text-gray-500">Aio</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Smile className="h-5 w-5" />
          </Button>
          <Button onClick={handleSendMessage} disabled={!message.trim()} className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
