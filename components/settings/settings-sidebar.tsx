"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/dashboard/settings/${path}`
  }

  const categories = [
    {
      title: "Main",
      items: [
        { id: "general", label: "General", href: "/dashboard/settings" },
        { id: "notifications", label: "Notifications", href: "/dashboard/settings/notifications" },
        { id: "users", label: "Team Members", href: "/dashboard/settings/team" },
        { id: "logs", label: "Logs", href: "/dashboard/settings/logs" },
        { id: "billing", label: "Billing", href: "/dashboard/settings/billing" },
        { id: "display-preferences", label: "Display", href: "/dashboard/settings/display" },
      ],
    },
    {
      title: "Inbox",
      items: [
        { id: "chat-behavior", label: "Live Chat Behavior", href: "/dashboard/settings/chat-behavior" },
        { id: "auto-assignment", label: "Auto-Assignment", href: "/dashboard/settings/auto-assignment" },
      ],
    },
    {
      title: "Channels",
      items: [
        {
          id: "instagram",
          label: "Instagram",
          href: "/dashboard/settings/instagram",
          icon: <div className="w-4 h-4 rounded-full bg-pink-500 mr-2 flex-shrink-0"></div>,
        },
        {
          id: "tiktok",
          label: "TikTok",
          href: "/dashboard/settings/tiktok",
          icon: <div className="w-4 h-4 rounded-full bg-black mr-2 flex-shrink-0"></div>,
        },
        {
          id: "whatsapp",
          label: "WhatsApp",
          href: "/dashboard/settings/whatsapp",
          icon: <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>,
        },
        {
          id: "messenger",
          label: "Messenger",
          href: "/dashboard/settings/messenger",
          icon: <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>,
        },
        {
          id: "sms",
          label: "SMS",
          href: "/dashboard/settings/sms",
          icon: <div className="w-4 h-4 rounded-full bg-teal-500 mr-2 flex-shrink-0"></div>,
        },
        {
          id: "email",
          label: "Email",
          href: "/dashboard/settings/email",
          icon: <div className="w-4 h-4 rounded-full bg-purple-500 mr-2 flex-shrink-0"></div>,
        },
        {
          id: "telegram",
          label: "Telegram",
          href: "/dashboard/settings/telegram",
          icon: <div className="w-4 h-4 rounded-full bg-blue-400 mr-2 flex-shrink-0"></div>,
        },
      ],
    },
    {
      title: "Automation",
      items: [
        { id: "customFields", label: "Fields", href: "/dashboard/settings/fields" },
        { id: "tags", label: "Tags", href: "/dashboard/settings/tags" },
      ],
    },
    {
      title: "Extensions",
      items: [
        { id: "public-api", label: "API", href: "/dashboard/settings/api" },
        { id: "apps", label: "Apps", href: "/dashboard/settings/apps" },
        { id: "integrations", label: "Integrations", href: "/dashboard/settings/integrations" },
        { id: "payment", label: "Payments", href: "/dashboard/settings/payments" },
        { id: "templates", label: "Installed Templates", href: "/dashboard/settings/templates" },
      ],
    },
  ]

  return (
    <div className="w-64 border-r bg-white overflow-y-auto flex-shrink-0">
      {categories.map((category) => (
        <div key={category.title} className="mb-4">
          <h3 className="px-6 pt-4 pb-1 text-xs font-semibold text-gray-500">{category.title}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center px-6 py-2 text-sm ${
                    pathname === item.href || (item.id === "general" && pathname === "/dashboard/settings")
                      ? "text-green-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
