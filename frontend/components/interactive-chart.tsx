"use client"

import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useState } from "react"

const data = {
  volume: [
    { month: "Jan", value: 1200000 },
    { month: "Feb", value: 1800000 },
    { month: "Mar", value: 2400000 },
    { month: "Apr", value: 3200000 },
    { month: "May", value: 4100000 },
    { month: "Jun", value: 5300000 },
    { month: "Jul", value: 6800000 },
    { month: "Aug", value: 8200000 },
    { month: "Sep", value: 9700000 },
    { month: "Oct", value: 11500000 },
    { month: "Nov", value: 13200000 },
    { month: "Dec", value: 15000000 },
  ],
  users: [
    { month: "Jan", value: 1250 },
    { month: "Feb", value: 2100 },
    { month: "Mar", value: 3400 },
    { month: "Apr", value: 5200 },
    { month: "May", value: 7800 },
    { month: "Jun", value: 11200 },
    { month: "Jul", value: 15600 },
    { month: "Aug", value: 21300 },
    { month: "Sep", value: 28700 },
    { month: "Oct", value: 37500 },
    { month: "Nov", value: 48200 },
    { month: "Dec", value: 61000 },
  ],
  creditScores: [
    { range: "300-500", count: 2500, color: "#ef4444" },
    { range: "500-650", count: 8200, color: "#f97316" },
    { range: "650-750", count: 15600, color: "#eab308" },
    { range: "750-850", count: 12300, color: "#22c55e" },
    { range: "850+", count: 3400, color: "#5ec57e" },
  ],
}

export function InteractiveChart() {
  const [activeChart, setActiveChart] = useState<"volume" | "users">("volume")

  return (
    <section className="py-20 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl text-gray-900 mb-4">PLATFORM ANALYTICS</h2>
          <p className="text-xl text-gray-600">Real-time insights into our growing ecosystem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Chart */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-anton text-2xl text-gray-900">GROWTH METRICS</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveChart("volume")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeChart === "volume"
                      ? "bg-primary text-white"
                      : "glass border border-white/30 text-gray-600 hover:bg-white/20"
                  }`}
                >
                  Volume
                </button>
                <button
                  onClick={() => setActiveChart("users")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeChart === "users"
                      ? "bg-primary text-white"
                      : "glass border border-white/30 text-gray-600 hover:bg-white/20"
                  }`}
                >
                  Users
                </button>
              </div>
            </div>

            <ChartContainer
              config={{
                value: {
                  label: activeChart === "volume" ? "Volume ($)" : "Users",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data[activeChart]}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5ec57e" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5ec57e" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="value" stroke="#5ec57e" strokeWidth={3} fill="url(#colorGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Credit Score Distribution */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-anton text-2xl text-gray-900 mb-6">CREDIT SCORE DISTRIBUTION</h3>
            <div className="space-y-4">
              {data.creditScores.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{item.range}</span>
                    <span className="font-bold text-gray-900">{item.count.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${(item.count / Math.max(...data.creditScores.map((d) => d.count))) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 glass border border-white/30 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Average Credit Score</div>
              <div className="font-anton text-3xl text-primary">742</div>
              <div className="text-sm text-green-600">↗ +12 points this month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
