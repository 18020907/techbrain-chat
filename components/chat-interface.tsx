"use client"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ChatHeader from "./chat-header"
import MessageBubble from "./message-bubble"
import QuickReply from "./quick-reply"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

type QuickReplyOption = {
  id: string
  text: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! 👋 Welcome to our chat. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [quickReplies, setQuickReplies] = useState<QuickReplyOption[]>([
    { id: "1", text: "Tell me more" },
    { id: "2", text: "Pricing" },
    { id: "3", text: "Contact support" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setQuickReplies([])

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false)

      const botResponses = [
        "Thanks for your message! I'll help you with that.",
        "Great question! Here's what you need to know...",
        "I understand what you're looking for. Let me provide some information.",
        "Thanks for reaching out! Our team is working on this.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])

      // Add new quick replies after bot response
      setQuickReplies([
        { id: "4", text: "Tell me more" },
        { id: "5", text: "How does it work?" },
        { id: "6", text: "I need help" },
      ])
    }, 1500)
  }

  const handleQuickReply = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setQuickReplies([])

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response for quick replies
    setTimeout(() => {
      setIsTyping(false)

      let botResponse = ""

      switch (text) {
        case "Tell me more":
          botResponse =
            "Our platform helps businesses automate customer interactions through AI-powered chatbots. We offer solutions for marketing, sales, and customer support."
          break
        case "Pricing":
          botResponse =
            "We offer several pricing tiers: Free, Pro ($25/mo), and Enterprise (custom pricing). Each plan includes different features and subscriber limits."
          break
        case "Contact support":
          botResponse =
            "You can reach our support team at support@example.com or call us at (555) 123-4567 during business hours."
          break
        case "How does it work?":
          botResponse =
            "Our platform uses a visual flow builder to create conversations. You can set up automated responses, collect user information, and integrate with your existing tools."
          break
        case "I need help":
          botResponse = "I'd be happy to help! Could you please specify what you need assistance with?"
          break
        default:
          botResponse = "Thanks for your interest! Is there anything specific you'd like to know about our services?"
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])

      // Add new quick replies after bot response
      setQuickReplies([
        { id: "7", text: "Features" },
        { id: "8", text: "Integrations" },
        { id: "9", text: "Get started" },
      ])
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden bg-white shadow-lg">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
              <span>Bot is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {quickReplies.length > 0 && (
        <div className="px-4 py-2 border-t flex gap-2 overflow-x-auto">
          {quickReplies.map((reply) => (
            <QuickReply key={reply.id} text={reply.text} onClick={() => handleQuickReply(reply.text)} />
          ))}
        </div>
      )}

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon" disabled={inputValue.trim() === ""}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
