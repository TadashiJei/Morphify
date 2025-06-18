"use client"

import { Scene } from "@/components/ui/hero-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"
import { Testimonials } from "@/components/testimonials"
import { FeatureShowcase } from "@/components/feature-showcase"
import { InteractiveChart } from "@/components/interactive-chart"
import { MorphifyEcosystemTimeline } from "@/components/morphify-ecosystem-timeline"
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Sparkles,
  Target,
  Award,
  Play,
  ChevronDown,
  Cpu,
  DollarSign,
  Users,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Multi-layered protection with $25M+ insurance coverage.",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Sub-second transactions with <$0.01 fees on Morph L2.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Serving 52 countries with 24/7 multilingual support.",
  },
  {
    icon: TrendingUp,
    title: "AI Credit Scoring",
    description: "Advanced on-chain reputation analysis for fair lending.",
  },
  {
    icon: Cpu,
    title: "Smart Contracts",
    description: "Audited protocols ensuring transparent operations.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by the community, for financial inclusion.",
  },
]

export default function HomePage() {
  return (
    <div className="pt-16 relative">
      {/* Revolutionary Hero Section with 3D Scene */}
      <section className="min-h-screen w-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-gray-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Additional beige gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-stone-50/60 to-amber-50/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(94,197,126,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.08),transparent_50%)]" />

        <div className="w-full max-w-7xl space-y-16 relative z-20">
          <div className="flex flex-col items-center text-center space-y-12">
            <Badge
              variant="secondary"
              className="backdrop-blur-sm bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 px-6 py-3 rounded-full text-sm font-bold shadow-lg"
            >
              ✨ Live on Morph L2 • Trusted by 61K+ Users
            </Badge>

            <div className="space-y-8 flex items-center justify-center flex-col">
              <h1 className="font-anton text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl leading-[0.9]">
                <span className="block text-gray-900">EMPOWERING</span>
                <span className="block bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">
                  DeFi LENDING
                </span>
                <span className="block text-gray-900">FOR EVERYONE</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed font-medium">
                Revolutionary decentralized borrowing & lending platform built on blockchain technology. Access
                micro-loans with on-chain reputation scoring. Experience the future of finance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                <Button className="text-lg px-12 py-6 rounded-2xl bg-primary text-white border border-primary/20 shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 relative z-10">
                  <span className="flex items-center space-x-3">
                    <span>Start Lending</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
                <Button className="text-lg px-12 py-6 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-900 border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105 relative z-10">
                  <span className="flex items-center space-x-3">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </span>
                </Button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: DollarSign, value: 25300000, prefix: "$", suffix: "M+", label: "Total Lent" },
                { icon: Users, value: 61000, suffix: "+", label: "Active Users" },
                { icon: TrendingUp, value: 98.5, suffix: "%", label: "Success Rate" },
                { icon: Globe, value: 52, label: "Countries" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="glass-strong backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-anton text-3xl text-gray-900 mb-1">
                      <AnimatedCounter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        className="text-gray-900"
                      />
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-strong backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 h-48 flex flex-col justify-start items-start space-y-4 hover:bg-white/30 transition-all duration-300 group shadow-lg"
              >
                <feature.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-anton font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Scene Background */}
        <div className="absolute inset-0 opacity-30 z-0">
          <Scene />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 glass-strong relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">PLATFORM METRICS</h2>
            <p className="text-xl text-gray-600">Real-time statistics from our growing ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: 25300000,
                label: "Total Volume Lent",
                prefix: "$",
                suffix: "+",
                description: "Cumulative lending volume",
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                number: 61000,
                label: "Active Users",
                suffix: "+",
                description: "Verified global users",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                number: 98.5,
                label: "Repayment Rate",
                suffix: "%",
                description: "On-time loan repayments",
                icon: <Award className="w-6 h-6" />,
              },
              {
                number: 52,
                label: "Countries Served",
                description: "Global market presence",
                icon: <Target className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="font-anton text-4xl md:text-5xl gradient-text mb-2">
                  <AnimatedCounter end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morphify Ecosystem Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-anton text-4xl md:text-5xl text-gray-900 mb-4">MORPHIFY ECOSYSTEM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interconnected platform components and their development roadmap. Click on any component to
            discover its features and connections.
          </p>
        </div>
        <MorphifyEcosystemTimeline />
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Interactive Analytics */}
      <InteractiveChart />

      {/* Testimonials */}
      <Testimonials />

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-600/20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-strong rounded-3xl p-12 space-y-8 morphing-border">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-full mx-auto flex items-center justify-center animate-bounce-gentle">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h2 className="font-anton text-4xl md:text-5xl text-gray-900">READY TO START YOUR DeFi JOURNEY?</h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of users already earning and borrowing on Morphify's revolutionary decentralized platform.
              Experience the future of finance today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/how-it-works">
                <button className="neo-brutal bg-primary text-white px-8 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center space-x-2 group">
                  <span>Learn How It Works</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <button className="neo-brutal bg-white text-gray-900 px-8 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                View Documentation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[
                { title: "Instant Setup", description: "Get started in under 2 minutes" },
                { title: "24/7 Support", description: "Round-the-clock assistance" },
                { title: "Zero Hidden Fees", description: "Transparent pricing always" },
              ].map((feature, index) => (
                <div key={index} className="glass border border-white/30 rounded-lg p-4">
                  <h3 className="font-anton text-lg text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
