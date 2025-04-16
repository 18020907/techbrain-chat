import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white p-8 flex flex-col">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/placeholder.svg?height=40&width=160&text=Manychat"
              alt="Manychat Logo"
              width={160}
              height={40}
              className="h-10"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="max-w-md mx-auto text-center">
            <Image
              src="/placeholder.svg?height=200&width=200&text=Illustration"
              alt="Illustration"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />

            <h1 className="text-4xl font-bold text-gray-800 mb-4">Where would you like to start?</h1>

            <p className="text-gray-600">Don't worry, you can connect other channels later.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 p-8">
        <div className="flex justify-end items-center mb-12">
          <div className="flex items-center mr-6">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>English</span>
          </div>

          <Link href="/signin">
            <Button variant="outline" className="rounded-full px-6">
              SIGN IN
            </Button>
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <PlatformCard
            icon="/placeholder.svg?height=40&width=40&text=IG"
            name="Instagram"
            description="Supercharge your social media marketing with Instagram Automation."
            color="bg-gradient-to-r from-purple-500 to-pink-500"
          />

          <PlatformCard
            icon="/placeholder.svg?height=40&width=40&text=TT"
            name="TikTok"
            description="Elevate your marketing with TikTok's seamless automation."
            color="bg-black"
          />

          <PlatformCard
            icon="/placeholder.svg?height=40&width=40&text=WA"
            name="WhatsApp"
            description="Choose the most popular mobile messaging app in the world and reach 2 billion users."
            color="bg-green-500"
          />

          <PlatformCard
            icon="/placeholder.svg?height=40&width=40&text=FB"
            name="Facebook Messenger"
            description="Create Facebook Messenger automation to keep customers happy."
            color="bg-blue-500"
          />

          <PlatformCard
            icon="/placeholder.svg?height=40&width=40&text=TG"
            name="Telegram"
            description="Power up your business with Telegram automation."
            color="bg-blue-400"
          />
        </div>
      </div>
    </div>
  )
}

interface PlatformCardProps {
  icon: string
  name: string
  description: string
  color: string
}

function PlatformCard({ icon, name, description, color }: PlatformCardProps) {
  return (
    <Card className="mb-4 p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} text-white mr-4`}>
          <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Card>
  )
}
