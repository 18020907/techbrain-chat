import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | ManyChat",
  description: "ManyChat Dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
