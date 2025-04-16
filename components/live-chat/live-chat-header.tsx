"use client"

import { Search, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function LiveChatHeader() {
  return (
    <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
      <h1 className="text-xl font-semibold">Live Chat</h1>
      <div className="flex items-center space-x-4 flex-1 max-w-xl mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search through Live Chat conversations" className="pl-10 bg-gray-50 border-gray-200" />
        </div>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Settings className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  )
}
