"use client"

import { useEffect, useState, useRef } from "react"
import { Building, Clock, Home, Star } from "lucide-react"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  onComplete?: () => void
}

function Counter({ end, duration, suffix = "", onComplete }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      countRef.current = Math.floor(progress * end)
      setCount(countRef.current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else if (onComplete) {
        onComplete()
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frameRef.current = requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      observer.disconnect()
    }
  }, [end, duration, onComplete])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section id="stats-section" className="py-20 bg-[#2e6889] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Hundreds Across Hyderabad</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Since 2008, we've delivered lasting protection and peace of mind to homes, businesses, and factories. Our
            numbers speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10">
            <Building className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              <Counter end={320} duration={2000} suffix="+" />
            </h3>
            <p className="text-lg">Completed Projects</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10">
            <Clock className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              <Counter end={15} duration={1500} suffix="+ Years" />
            </h3>
            <p className="text-lg">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10">
            <Home className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              <Counter end={500} duration={2500} suffix="+" />
            </h3>
            <p className="text-lg">Properties Protected</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10">
            <Star className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">
              <Counter end={100} duration={1800} suffix="%" />
            </h3>
            <p className="text-lg">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
