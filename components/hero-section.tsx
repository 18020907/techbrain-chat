import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Unleash the power
          <br />
          of chat marketing
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Drive more sales and conversions on Instagram, WhatsApp, and Messenger using automation.
        </p>

        <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
          GET STARTED FOR FREE
        </Button>

        <div className="mt-16 relative">
          <div className="max-w-sm mx-auto">
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border-8 border-black">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${i % 2 === 0 ? "bg-purple-200" : "bg-yellow-200"} ${(i + Math.floor(i / 4)) % 2 === 0 ? "bg-purple-200" : "bg-yellow-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
