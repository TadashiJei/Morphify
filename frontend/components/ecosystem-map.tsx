"use client"

import { useState } from "react"
import { Building2, Smartphone, Globe, Shield, Zap, Users } from "lucide-react"

const ecosystemNodes = [
  {
    id: "lenders",
    title: "Lenders",
    icon: <Building2 className="w-6 h-6" />,
    position: { x: 20, y: 30 },
    description: "Institutional and retail investors providing liquidity",
    stats: "15,000+ Active Lenders",
  },
  {
    id: "borrowers",
    title: "Borrowers",
    icon: <Users className="w-6 h-6" />,
    position: { x: 80, y: 30 },
    description: "Individuals and businesses accessing micro-loans",
    stats: "45,000+ Borrowers Served",
  },
  {
    id: "mobile",
    title: "Mobile App",
    icon: <Smartphone className="w-6 h-6" />,
    position: { x: 20, y: 70 },
    description: "Native mobile applications for iOS and Android",
    stats: "4.8★ App Store Rating",
  },
  {
    id: "web",
    title: "Web Platform",
    icon: <Globe className="w-6 h-6" />,
    position: { x: 50, y: 50 },
    description: "Full-featured web interface with advanced analytics",
    stats: "99.9% Uptime",
  },
  {
    id: "security",
    title: "Security Layer",
    icon: <Shield className="w-6 h-6" />,
    position: { x: 80, y: 70 },
    description: "Multi-layered security and insurance protocols",
    stats: "$10M+ Insurance Coverage",
  },
  {
    id: "blockchain",
    title: "Morph L2",
    icon: <Zap className="w-6 h-6" />,
    position: { x: 50, y: 20 },
    description: "High-performance blockchain infrastructure",
    stats: "<$0.01 Transaction Fees",
  },
]

export function EcosystemMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <section className="py-20 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl text-gray-900 mb-4">MORPHIFY ECOSYSTEM</h2>
          <p className="text-xl text-gray-600">Interconnected components powering the future of DeFi</p>
        </div>

        <div className="relative h-96 glass rounded-3xl p-8 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5ec57e" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#5ec57e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5ec57e" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Draw connections between nodes */}
            {ecosystemNodes.map((node, index) =>
              ecosystemNodes
                .slice(index + 1)
                .map((targetNode) => (
                  <line
                    key={`${node.id}-${targetNode.id}`}
                    x1={`${node.position.x}%`}
                    y1={`${node.position.y}%`}
                    x2={`${targetNode.position.x}%`}
                    y2={`${targetNode.position.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                )),
            )}
          </svg>

          {/* Ecosystem Nodes */}
          {ecosystemNodes.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white transition-all duration-300 ${
                  activeNode === node.id ? "scale-125 animate-pulse-glow" : "hover:scale-110"
                }`}
              >
                {node.icon}
              </div>

              {activeNode === node.id && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 glass-strong rounded-lg p-4 z-10 animate-slide-up">
                  <h3 className="font-anton text-lg text-gray-900 mb-2">{node.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{node.description}</p>
                  <div className="text-xs font-medium text-primary">{node.stats}</div>
                </div>
              )}
            </div>
          ))}

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-anton text-2xl">M</span>
            </div>
          </div>
        </div>

        {/* Ecosystem Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Total Value Locked", value: "$25.3M", change: "+15.2%" },
            { label: "Active Users", value: "61,000+", change: "+8.7%" },
            { label: "Loans Processed", value: "125,000+", change: "+22.1%" },
            { label: "Countries Served", value: "52", change: "+4" },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="font-anton text-2xl md:text-3xl gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
              <div className="text-green-600 text-xs font-medium">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
