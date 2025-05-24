import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Waterproofing work in progress"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hyderabad&apos;s Most Trusted Waterproofing Experts
          </h1>
          <p className="text-lg md:text-xl mb-8">Trusted Waterproofing Experts Since 2008</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button size="lg" className="bg-[#2e6889] hover:bg-[#1e5879] text-white text-lg px-8 py-6">
                Get Free Estimate
              </Button>
            </Link>
            <Link href="tel:07981431364">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8 py-6 transition-colors"
              >
                Call Us Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
