"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Small Business Owner",
    location: "Singapore",
    content:
      "Morphify helped me access credit when traditional banks wouldn't. The on-chain reputation system is revolutionary - it actually sees my real financial behavior, not just paperwork.",
    rating: 5,
    avatar: "SC",
    loanAmount: "$2,500",
    creditScore: 785,
  },
  {
    id: 2,
    name: "Miguel Rodriguez",
    role: "Freelance Developer",
    location: "Mexico City",
    content:
      "As a freelancer, getting loans was impossible before Morphify. Now I can access funds for equipment and projects based on my actual transaction history. Game changer!",
    rating: 5,
    avatar: "MR",
    loanAmount: "$1,800",
    creditScore: 720,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Student & Entrepreneur",
    location: "Mumbai",
    content:
      "The micro-lending feature is perfect for students like me. I built my credit score through small transactions and now have access to larger loans for my startup.",
    rating: 5,
    avatar: "PP",
    loanAmount: "$950",
    creditScore: 680,
  },
  {
    id: 4,
    name: "James Thompson",
    role: "DeFi Investor",
    location: "London",
    content:
      "I've been lending on Morphify for 8 months. The returns are consistent, and the platform's transparency gives me confidence in every transaction.",
    rating: 5,
    avatar: "JT",
    loanAmount: "$15,000",
    creditScore: 850,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-5xl text-gray-900 mb-4">WHAT OUR USERS SAY</h2>
          <p className="text-xl text-gray-600">Real stories from our global community</p>
        </div>

        <div className="relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* User Info */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{testimonials[currentIndex].avatar}</span>
                </div>
                <h3 className="font-anton text-2xl text-gray-900 mb-1">{testimonials[currentIndex].name}</h3>
                <p className="text-primary font-medium mb-1">{testimonials[currentIndex].role}</p>
                <p className="text-gray-500 text-sm mb-4">{testimonials[currentIndex].location}</p>

                <div className="space-y-2">
                  <div className="glass border border-white/30 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Loan Amount</div>
                    <div className="font-bold text-gray-900">{testimonials[currentIndex].loanAmount}</div>
                  </div>
                  <div className="glass border border-white/30 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Credit Score</div>
                    <div className="font-bold text-primary">{testimonials[currentIndex].creditScore}</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-1 justify-center lg:justify-start">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 glass border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 glass border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
