import { Home, Building2, Droplets, Thermometer, Wrench, Hammer, Factory, Container } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Home className="h-10 w-10 text-[#2e6889]" />,
    title: "Terrace Waterproofing",
    description: "Complete protection for your roof and terrace from water leakage",
  },
  {
    icon: <Building2 className="h-10 w-10 text-[#2e6889]" />,
    title: "Basement Waterproofing",
    description: "Keep your basement dry and protected from moisture and flooding",
  },
  {
    icon: <Droplets className="h-10 w-10 text-[#2e6889]" />,
    title: "Bathroom Seepage Treatment",
    description: "Eliminate bathroom leaks and prevent water damage to walls",
  },
  {
    icon: <Thermometer className="h-10 w-10 text-[#2e6889]" />,
    title: "Roof Heat-Proof Coating",
    description: "Reduce indoor temperatures with our specialized heat-resistant coatings",
  },
  {
    icon: <Wrench className="h-10 w-10 text-[#2e6889]" />,
    title: "Expansion Joint Sealing",
    description: "Professional sealing of expansion joints to prevent water infiltration",
  },
  {
    icon: <Hammer className="h-10 w-10 text-[#2e6889]" />,
    title: "Wall Crack Repair",
    description: "Effective solutions for repairing and preventing wall cracks",
  },
  {
    icon: <Factory className="h-10 w-10 text-[#2e6889]" />,
    title: "Industrial Waterproofing",
    description: "Specialized waterproofing solutions for factories and industrial buildings",
  },
  {
    icon: <Container className="h-10 w-10 text-[#2e6889]" />,
    title: "Water Tank Waterproofing",
    description: "Food-grade waterproofing for drinking water tanks and storage",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive waterproofing solutions for all types of buildings in Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="#contact" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-[#2e6889] border-[#2e6889] hover:bg-[#2e6889] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
