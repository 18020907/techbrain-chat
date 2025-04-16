"use client"

import type React from "react"

import { useState } from "react"
import Sidebar from "./sidebar"
import TrialBanner from "./trial-banner"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TrialBanner />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
