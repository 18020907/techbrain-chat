"use client"

import type React from "react"

import { useState } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import TrialBanner from "@/components/dashboard/trial-banner"
import LiveChatHeader from "./live-chat-header"

export default function LiveChatLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TrialBanner />
        <LiveChatHeader />
        <main className="flex-1 overflow-hidden flex">{children}</main>
      </div>
    </div>
  )
}
