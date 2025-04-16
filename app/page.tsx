import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Partners from "@/components/partners"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Partners />
    </main>
  )
}
