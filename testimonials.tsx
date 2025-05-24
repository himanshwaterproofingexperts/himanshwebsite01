import { Star, StarHalf } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Himansh Waterproofing did an excellent job on my terrace. No more leaks during monsoon season! Their team was professional and completed the work on time.",
  },
  {
    name: "Priya Sharma",
    rating: 4.5,
    review:
      "We had severe bathroom seepage issues that multiple contractors couldn't fix. Himansh team solved it permanently. Very satisfied with their expertise.",
  },
  {
    name: "Venkat Reddy",
    rating: 5,
    review:
      "I hired them for my factory waterproofing. Their industrial-grade solutions are top-notch. The team is knowledgeable and uses quality materials.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {testimonial.rating % 1 !== 0 && <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />}
                </div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
