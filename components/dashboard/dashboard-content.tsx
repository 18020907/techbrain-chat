import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function DashboardContent() {
  const cards = [
    {
      title: "Capture customer data with a lead magnet",
      description: "Use a lead magnet to capture qualified emails",
      icon: "📋",
      tag: "Flow Builder",
    },
    {
      title: "Use a quiz to qualify leads",
      description: "Run a quiz for your audience",
      icon: "🎯",
      tag: "Flow Builder",
      isPro: true,
    },
    {
      title: "Automate conversations with AI",
      description: "Get AI to collect your follower's info, share details or tell it how to reply",
      icon: "🤖",
      tag: "Flow Builder",
      isAI: true,
    },
  ]

  return (
    <div className="px-8 py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Hello, Minh!</h2>
        <div className="flex items-center text-sm text-gray-600">
          <span>1 connected channel</span>
          <span className="mx-2">•</span>
          <span>1 contact</span>
          <button className="ml-2 text-blue-500 hover:underline">See Insights</button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Start Here</h3>
        <button className="text-blue-500 hover:underline flex items-center text-sm">
          Explore all Templates
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} className="overflow-hidden border hover:shadow-md transition-shadow">
            <div className="p-6">
              <h4 className="text-lg font-medium mb-2">{card.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span>{card.icon}</span>
                <span className="ml-2">{card.tag}</span>
              </div>
              {card.isPro && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">PRO</span>}
              {card.isAI && <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">AI</span>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
