"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail } from "lucide-react"

const services = [
  "Terrace Waterproofing",
  "Basement Waterproofing",
  "Bathroom Seepage Treatment",
  "Roof Heat-Proof Coating",
  "Expansion Joint Sealing",
  "Wall Crack Repair",
  "Industrial Waterproofing",
  "Water Tank Waterproofing",
  "Other",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch with Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us for a free estimate or to learn more about our waterproofing services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1442383965193!2d78.55!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzAwLjAiTiA3OMKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1621500000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mb-8"
              ></iframe>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#2e6889] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong className="block text-gray-900 mb-1">Address:</strong>
                    Door No. 8, 5-225/4, Near TKR Kaman, Defence Colony,
                    <br />
                    Rajiv Shetti Nagar, Kharmanghat, Hyderabad – 500079, Telangana
                  </p>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#2e6889] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong className="block text-gray-900 mb-1">Phone:</strong>
                    <a href="tel:07981431364" className="hover:text-[#2e6889]">
                      079814 31364
                    </a>
                  </p>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#2e6889] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong className="block text-gray-900 mb-1">Email:</strong>
                    <a href="mailto:info@himanshwaterproofing.com" className="hover:text-[#2e6889]">
                      info@himanshwaterproofing.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  Thank you for your inquiry! We'll get back to you shortly.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    type="tel"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    type="email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <Select value={formData.service} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#2e6889] hover:bg-[#1e5879]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
