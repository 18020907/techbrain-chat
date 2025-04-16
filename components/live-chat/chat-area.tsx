"use client"

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <div className="mx-auto w-48 h-48 mb-6">
            <img
              src="/placeholder.svg?height=192&width=192&text=Chat"
              alt="Chat illustration"
              className="w-full h-full"
            />
          </div>
          <p className="text-gray-600">Select a conversation to start messaging</p>
        </div>
      </div>
    </div>
  )
}
