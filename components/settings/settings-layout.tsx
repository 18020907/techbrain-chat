"use client"

import type React from "react"

import { useState } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import TrialBanner from "@/components/dashboard/trial-banner"
import SettingsSidebar from "./settings-sidebar"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TrialBanner />
        <div className="flex flex-1 overflow-hidden">
          <SettingsSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  )
}
