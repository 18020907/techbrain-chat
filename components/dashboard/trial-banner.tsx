"use client"

import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TrialBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">✓</div>
        <span className="text-sm">Activate 14-Day Free Trial to unlock all Pro features and get more value</span>
      </div>
      <div className="flex items-center space-x-3">
        <Button className="bg-green-500 hover:bg-green-600 text-white text-sm">Activate Pro Trial</Button>
        <Button variant="link" className="text-green-400 text-sm">
          View pricing
        </Button>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
