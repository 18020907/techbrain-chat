"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, GitBranch, MessageCircle, Radio, Settings, User, HelpCircle, ChevronDown } from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { id: "home", label: "Home", icon: Home, count: 0, href: "/dashboard" },
    { id: "contacts", label: "Contacts", icon: Users, count: 0, href: "/dashboard/contacts" },
    { id: "automation", label: "Automation", icon: GitBranch, count: 0, href: "/dashboard/automation" },
    { id: "live-chat", label: "Live Chat", icon: MessageCircle, count: 1, href: "/dashboard/live-chat" },
    { id: "broadcasting", label: "Broadcasting", icon: Radio, count: 0, href: "/dashboard/broadcasting" },
    { id: "settings", label: "Settings", icon: Settings, count: 0, href: "/dashboard/settings" },
  ]

  return (
    <div className={`bg-white border-r w-64 flex-shrink-0 ${open ? "" : "hidden"} md:block`}>
      <div className="h-full flex flex-col">
        {/* Logo and account */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl tracking-tighter">
              <span className="text-black">Many</span>
              <span className="text-black">chat</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
              T
            </div>
            <div className="ml-2 flex-1">
              <div className="text-sm font-medium">Techbrain</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm ${
                      isActive ? "text-green-600 bg-green-50" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                    {item.count > 0 && (
                      <span className="ml-auto bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.count}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="border-t p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard/profile"
                className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
              >
                <User className="h-5 w-5 mr-3" />
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/help"
                className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
              >
                <HelpCircle className="h-5 w-5 mr-3" />
                <span>Help</span>
              </Link>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-gray-500">Free contacts limit</div>
            <div className="flex items-center mt-1">
              <div className="text-sm font-medium">0/1000</div>
              <div className="ml-auto">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                  C
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm">
              Activate Pro Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
