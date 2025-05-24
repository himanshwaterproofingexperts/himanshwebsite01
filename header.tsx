"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md h-24 md:h-28" : "bg-white/95 backdrop-blur-sm h-28 md:h-36"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-full w-auto">
              <Image
                src="/images/logo.png"
                alt="Himansh Water Proofing Experts - ESTD 2008"
                width={600}
                height={144}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          <nav className="hidden xl:flex items-center space-x-8">
            <Link href="#services" className="text-gray-800 hover:text-[#2e6889] transition-colors font-medium text-lg">
              Services
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-[#2e6889] transition-colors font-medium text-lg">
              About
            </Link>
            <Link href="#gallery" className="text-gray-800 hover:text-[#2e6889] transition-colors font-medium text-lg">
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-800 hover:text-[#2e6889] transition-colors font-medium text-lg"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-[#2e6889] transition-colors font-medium text-lg">
              Contact
            </Link>
          </nav>

          <div className="hidden xl:flex items-center space-x-4">
            <Link
              href="tel:07981431364"
              className="flex items-center text-[#2e6889] hover:text-[#1e5879] transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">079814 31364</span>
            </Link>
            <Button className="bg-[#2e6889] hover:bg-[#1e5879] transition-colors">Get Free Estimate</Button>
          </div>

          <button className="xl:hidden text-gray-800 p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg py-6 px-4 absolute top-full left-0 right-0 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-gray-800 hover:text-[#2e6889] transition-colors py-3 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-800 hover:text-[#2e6889] transition-colors py-3 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-gray-800 hover:text-[#2e6889] transition-colors py-3 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-800 hover:text-[#2e6889] transition-colors py-3 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-[#2e6889] transition-colors py-3 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t pt-4 mt-4">
              <Link
                href="tel:07981431364"
                className="flex items-center text-[#2e6889] py-3 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                <span>079814 31364</span>
              </Link>
              <Button
                className="bg-[#2e6889] hover:bg-[#1e5879] transition-colors w-full mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Estimate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
