import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Himansh Waterproofing</h3>
            <p className="text-gray-300 mb-4">
              Hyderabad's most trusted waterproofing experts since 2008. Providing quality waterproofing solutions for
              residential, commercial, and industrial buildings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Terrace Waterproofing</li>
              <li className="text-gray-300">Basement Waterproofing</li>
              <li className="text-gray-300">Bathroom Seepage Treatment</li>
              <li className="text-gray-300">Roof Heat-Proof Coating</li>
              <li className="text-gray-300">Wall Crack Repair</li>
              <li className="text-gray-300">Industrial Waterproofing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#2e6889] mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Door No. 8, 5-225/4, Near TKR Kaman, Defence Colony, Rajiv Shetti Nagar, Kharmanghat, Hyderabad –
                  500079
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#2e6889] mr-2 flex-shrink-0" />
                <a href="tel:07981431364" className="text-gray-300 hover:text-white transition-colors">
                  079814 31364
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#2e6889] mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@himanshwaterproofing.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@himanshwaterproofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Himansh Waterproofing Experts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
