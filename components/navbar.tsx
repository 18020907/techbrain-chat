import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 border-b">
      <div className="flex items-center">
        <Link href="/" className="mr-8">
          <div className="font-bold text-2xl tracking-tighter">
            <span className="text-black">Many</span>
            <span className="text-black">chat</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" className="text-sm font-medium">
            En <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <Link href="#" className="text-sm font-medium hover:text-gray-600">
          PRODUCT
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-gray-600">
          SOLUTIONS
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-gray-600">
          AGENCIES
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-gray-600">
          PRICING
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-gray-600">
          RESOURCES
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="outline" className="hidden md:inline-flex rounded-full">
          SIGN IN
        </Button>
        <Button className="rounded-full bg-black text-white hover:bg-gray-800">GET STARTED</Button>
      </div>
    </nav>
  )
}
