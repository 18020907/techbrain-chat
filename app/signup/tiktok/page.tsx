import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TikTokSignupPage() {
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
              src="/placeholder.svg?height=200&width=200&text=TikTok"
              alt="TikTok"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />

            <h1 className="text-4xl font-bold text-gray-800 mb-4">Connect with TikTok</h1>

            <p className="text-gray-600">Elevate your marketing with TikTok's seamless automation.</p>
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
          <h2 className="text-2xl font-bold mb-6">Create your account</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" />
              <p className="text-xs text-gray-500">Password must be at least 8 characters</p>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Create Account</Button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-2">
              <p>
                By signing up, you agree to our{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">Or connect with</p>

            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
                Google
              </Button>

              <Button variant="outline" className="flex-1">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
