import { Brain, Clock, BadgeDollarSign, Wrench, UserCheck, Heart } from "lucide-react"

const reasons = [
  {
    icon: <Brain className="h-12 w-12 text-[#2e6889]" />,
    title: "15+ Years of Experience",
    description: "Local experts in Hyderabad",
  },
  {
    icon: <Clock className="h-12 w-12 text-[#2e6889]" />,
    title: "24/7 Availability",
    description: "Always on-call, even at night",
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12 text-[#2e6889]" />,
    title: "Transparent Pricing",
    description: "No hidden charges",
  },
  {
    icon: <Wrench className="h-12 w-12 text-[#2e6889]" />,
    title: "Advanced Methods",
    description: "Latest chemicals & materials",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-[#2e6889]" />,
    title: "Skilled Technicians",
    description: "Professionally trained & courteous",
  },
  {
    icon: <Heart className="h-12 w-12 text-[#2e6889]" />,
    title: "100s of Happy Clients",
    description: "Across Telangana",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Himansh Waterproofing Experts?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver quality waterproofing solutions with guaranteed results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mb-3">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
