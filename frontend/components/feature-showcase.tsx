"use client"

import { useState } from "react"
import { Shield, Zap, Globe, TrendingUp, Cpu, Users } from "lucide-react"
import { motion } from "motion/react"
import MorphifyFlowDiagram from "@/components/ui/morphify-flow-diagram"

const features = [
  {
    id: "security",
    icon: <Shield className="w-8 h-8" />,
    title: "Military-Grade Security",
    description: "Multi-layered security with smart contract audits, insurance coverage, and real-time monitoring.",
    details: [
      "Smart contracts audited by leading security firms",
      "Multi-signature wallet protection",
      "Real-time fraud detection and prevention",
      "Insurance coverage up to $25M through DeFi protocols",
      "Cold storage for platform reserves",
    ],
    color: "from-red-500 to-pink-500",
    stats: { value: "99.9%", label: "Security Score" },
  },
  {
    id: "speed",
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast Transactions",
    description: "Powered by Morph L2 for instant settlements and minimal gas fees.",
    details: [
      "Sub-second transaction confirmations",
      "Gas fees under $0.01 per transaction",
      "99.9% uptime guaranteed",
      "Automatic transaction batching for efficiency",
      "Cross-chain bridge integration",
    ],
    color: "from-yellow-500 to-orange-500",
    stats: { value: "<1s", label: "Transaction Time" },
  },
  {
    id: "global",
    icon: <Globe className="w-8 h-8" />,
    title: "Global Accessibility",
    description: "Serving users in 50+ countries with 24/7 multilingual support.",
    details: [
      "Available in 15+ languages",
      "Compliance with local regulations",
      "Mobile-first design for emerging markets",
      "Offline transaction capabilities",
      "Local payment method integration",
    ],
    color: "from-blue-500 to-cyan-500",
    stats: { value: "52", label: "Countries" },
  },
  {
    id: "ai",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI-Powered Credit Scoring",
    description: "Advanced algorithms analyze 200+ on-chain metrics for accurate credit assessment.",
    details: [
      "Real-time credit score updates",
      "Machine learning risk assessment",
      "Behavioral pattern analysis",
      "Cross-protocol reputation tracking",
      "Predictive default modeling",
    ],
    color: "from-purple-500 to-indigo-500",
    stats: { value: "200+", label: "Data Points" },
  },
  {
    id: "smart",
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Contract Automation",
    description: "Fully automated lending protocols with transparent, audited smart contracts.",
    details: [
      "Automated loan matching and execution",
      "Self-executing repayment schedules",
      "Transparent fee structures",
      "Immutable lending terms",
      "Decentralized governance integration",
    ],
    color: "from-green-500 to-emerald-500",
    stats: { value: "100%", label: "Automated" },
  },
  {
    id: "community",
    icon: <Users className="w-8 h-8" />,
    title: "Community-Driven Platform",
    description: "Built by the community, for financial inclusion and democratized access to credit.",
    details: [
      "Community governance and voting",
      "Open-source development",
      "User feedback integration",
      "Transparent roadmap planning",
      "Global developer contributions",
    ],
    color: "from-teal-500 to-cyan-500",
    stats: { value: "61K+", label: "Active Users" },
  },
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState("security")

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-emerald-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="font-anton text-4xl md:text-5xl text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ADVANCED FEATURES
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge technology meets user-friendly design to deliver the ultimate DeFi experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Flow Diagram */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MorphifyFlowDiagram
              title="Advanced DeFi Technology Stack"
              circleText="DeFi"
              badgeTexts={{
                first: "SECURE",
                second: "FAST",
                third: "SMART",
                fourth: "DeFi",
              }}
              buttonTexts={{
                first: "Morphify",
                second: "Morph L2",
              }}
              lightColor="#5ec57e"
            />
          </motion.div>

          {/* Feature Navigation */}
          <div className="space-y-4">
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`p-4 rounded-xl transition-all duration-300 text-left ${
                    activeFeature === feature.id
                      ? "glass-strong scale-105 border-2 border-primary shadow-lg"
                      : "glass border border-white/30 hover:bg-white/20"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-anton text-sm text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-anton text-2xl gradient-text">{feature.stats.value}</div>
                    <div className="text-xs text-gray-600">{feature.stats.label}</div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Feature Details */}
            <motion.div
              className="glass-strong rounded-3xl p-8"
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${currentFeature.color} text-white`}>
                  {currentFeature.icon}
                </div>
                <h3 className="font-anton text-3xl text-gray-900">{currentFeature.title}</h3>
              </div>

              <p className="text-lg text-gray-600 mb-8">{currentFeature.description}</p>

              <div className="space-y-4">
                <h4 className="font-anton text-xl text-gray-900">Key Features:</h4>
                <ul className="space-y-3">
                  {currentFeature.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 glass border border-white/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Feature Status</span>
                  <motion.span
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    Live & Active
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
