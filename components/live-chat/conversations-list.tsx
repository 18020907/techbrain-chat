"use client"

import { useState } from "react"
import { ChevronDown, Filter, List, CheckSquare, User, Users, LayoutList, Search, Facebook } from "lucide-react"

export default function ConversationsList() {
  const [activeTab, setActiveTab] = useState("unassigned")
  const [expandedSections, setExpandedSections] = useState({
    conversations: true,
    channels: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const conversationTabs = [
    { id: "unassigned", label: "Unassigned", icon: CheckSquare, count: 1 },
    { id: "you", label: "You", icon: User, count: 0 },
    { id: "team", label: "Team", icon: Users, count: 0 },
    { id: "all", label: "All", icon: LayoutList, count: 1 },
  ]

  const channelTabs = [
    { id: "all-channels", label: "All channels", icon: Search, count: 0 },
    { id: "facebook", label: "Facebook", icon: Facebook, count: 0 },
  ]

  const conversations = [
    {
      id: "1",
      name: "Minh",
      platform: "Aio",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "24d",
      isSelected: true,
    },
  ]

  return (
    <div className="w-80 border-r bg-white flex flex-col overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium">Conversations</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <Filter className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <List className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center px-4 py-2 border-b bg-gray-50">
        <span className="text-sm text-gray-600">Unassigned</span>
        <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
        <span className="ml-auto text-sm text-gray-600">Open 1</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Conversations Section */}
        <div className="mb-4">
          <div
            className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("conversations")}
          >
            <span className="text-sm font-medium">Conversations</span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                expandedSections.conversations ? "" : "-rotate-90"
              }`}
            />
          </div>

          {expandedSections.conversations && (
            <div className="space-y-1">
              {conversationTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center px-4 py-2 w-full text-left ${
                    activeTab === tab.id ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-sm">{tab.label}</span>
                  <span className="ml-auto text-xs text-gray-500">{tab.count}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Channels Section */}
        <div>
          <div
            className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("channels")}
          >
            <span className="text-sm font-medium">Channels</span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${expandedSections.channels ? "" : "-rotate-90"}`}
            />
          </div>

          {expandedSections.channels && (
            <div className="space-y-1">
              {channelTabs.map((tab) => (
                <button key={tab.id} className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-50">
                  <tab.icon className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Conversation List */}
      <div className="border-t overflow-y-auto flex-1">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 border-b cursor-pointer ${conversation.isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                <img
                  src={conversation.avatar || "/placeholder.svg"}
                  alt={conversation.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium truncate">{conversation.name}</h4>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{conversation.platform}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
