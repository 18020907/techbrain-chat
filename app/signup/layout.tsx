import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | ManyChat",
  description: "Create your ManyChat account and start automating your marketing",
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
