"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { TrendingUp, Users, DollarSign, Globe } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: 25300000,
    prefix: "$",
    suffix: "+",
    label: "Total Lent",
    color: "text-emerald-500",
  },
  {
    icon: Users,
    value: 61000,
    suffix: "+",
    label: "Users",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    value: 98.5,
    suffix: "%",
    label: "Success Rate",
    color: "text-purple-500",
  },
  {
    icon: Globe,
    value: 52,
    label: "Countries",
    color: "text-orange-500",
  },
]

export function HeroStatsCard() {
  return (
    <div className="glass-strong rounded-3xl p-8 backdrop-blur-xl border border-white/20">
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className={`${stat.color} mb-3 flex justify-center`}>
                <Icon size={24} />
              </div>
              <div className="font-anton text-2xl text-white mb-1">
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} className="text-white" />
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
