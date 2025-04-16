"use client"

interface QuickReplyProps {
  text: string
  onClick: () => void
}

export default function QuickReply({ text, onClick }: QuickReplyProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm whitespace-nowrap transition-colors"
    >
      {text}
    </button>
  )
}
