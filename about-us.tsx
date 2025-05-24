import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experts in Long-Lasting Waterproofing Solutions</h2>
            <p className="text-lg text-gray-700 mb-6">
              Himansh Waterproofing Experts was founded in 2008 with a clear mission, to deliver premium, reliable
              waterproofing solutions across Hyderabad. Since then, we've helped protect hundreds of homes, apartments,
              and industrial spaces from leaks, water damage, and extreme heat.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Based in Kharmanghat, we're available 24/7 for urgent repairs or emergency waterproofing needs. Our team
              is known for clean workmanship, durable results, and guaranteed protection that lasts.
            </p>
            <div className="bg-[#2e6889]/10 p-4 rounded-lg border-l-4 border-[#2e6889]">
              <p className="text-gray-800">
                <span className="font-semibold">Founded:</span> 2008
                <br />
                <span className="font-semibold">Location:</span> Kharmanghat, Hyderabad
                <br />
                <span className="font-semibold">Services:</span> Residential, Commercial & Industrial Waterproofing
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/store-front.webp"
              alt="Himansh Waterproofing Experts Store"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
