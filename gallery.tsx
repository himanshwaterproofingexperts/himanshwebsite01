"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/terrace-waterproofing.webp",
    alt: "Terrace Waterproofing Project",
    tag: "Terrace",
  },
  {
    src: "/images/waterproofed-terrace.webp",
    alt: "Completed Waterproofed Terrace",
    tag: "Terrace",
  },
  {
    src: "/images/expansion-joint.webp",
    alt: "Expansion Joint Sealing",
    tag: "Expansion Joint",
  },
  {
    src: "/images/bathroom-waterproofing.webp",
    alt: "Bathroom Waterproofing",
    tag: "Bathroom",
  },
  {
    src: "/images/residential-project.webp",
    alt: "Residential Waterproofing Project",
    tag: "Residential",
  },
  {
    src: "/images/terrace-after-waterproofing.webp",
    alt: "Terrace After Waterproofing",
    tag: "Terrace",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Previous Waterproofing Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our gallery of completed waterproofing projects across Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-medium">{image.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://drive.google.com/drive/folders/your-folder-id" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#2e6889] hover:bg-[#1e5879] text-white px-6 py-2 rounded-md inline-flex items-center">
              Want to See More? <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
