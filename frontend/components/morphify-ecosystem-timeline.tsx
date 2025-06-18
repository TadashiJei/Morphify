"use client"

import {
  Building2,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Database,
  Code,
  TrendingUp,
  Coins,
  CreditCard,
  BarChart3,
} from "lucide-react"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"

const morphifyEcosystemData = [
  {
    id: 1,
    title: "Lending Pools",
    date: "Q1 2024",
    content:
      "Decentralized liquidity pools where lenders deposit stablecoins to earn competitive yields. Smart contracts automatically match lenders with borrowers based on risk profiles and credit scores.",
    category: "Core Protocol",
    icon: Building2,
    relatedIds: [2, 3, 8],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Credit Scoring",
    date: "Q1 2024",
    content:
      "AI-powered on-chain reputation system analyzing 200+ blockchain metrics to calculate Morph Credit Scores. Enables fair lending without traditional credit history requirements.",
    category: "AI & Analytics",
    icon: TrendingUp,
    relatedIds: [1, 4, 9],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Borrower Portal",
    date: "Q2 2024",
    content:
      "User-friendly interface for accessing micro-loans, managing repayments, and building credit history. Features real-time credit score tracking and loan recommendations.",
    category: "User Interface",
    icon: Users,
    relatedIds: [1, 2, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Mobile App",
    date: "Q2 2024",
    content:
      "Native iOS and Android applications providing full platform access optimized for emerging markets. Includes offline capabilities and local payment integrations.",
    category: "Mobile Platform",
    icon: Smartphone,
    relatedIds: [3, 6, 10],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Web3 Wallet",
    date: "Q3 2024",
    content:
      "Integrated wallet solution supporting multiple cryptocurrencies and seamless DeFi interactions. Features hardware wallet compatibility and multi-signature support.",
    category: "Infrastructure",
    icon: CreditCard,
    relatedIds: [3, 7, 11],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Global Network",
    date: "Q3 2024",
    content:
      "Expanding to 75+ countries with localized compliance, multi-language support, and regional partnerships. Focus on underbanked populations in emerging markets.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [4, 8, 12],
    status: "in-progress" as const,
    energy: 55,
  },
  {
    id: 7,
    title: "Security Layer",
    date: "Q4 2024",
    content:
      "Multi-layered security infrastructure including smart contract audits, insurance protocols, and real-time monitoring. $25M+ insurance coverage through DeFi partners.",
    category: "Security",
    icon: Shield,
    relatedIds: [5, 8, 1],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 8,
    title: "Morph L2 Integration",
    date: "Q4 2024",
    content:
      "Deep integration with Morph Layer 2 blockchain for ultra-low transaction fees and high throughput. Enables micro-transactions and instant settlements.",
    category: "Blockchain",
    icon: Zap,
    relatedIds: [1, 6, 7],
    status: "pending" as const,
    energy: 35,
  },
  {
    id: 9,
    title: "Analytics Dashboard",
    date: "Q1 2025",
    content:
      "Comprehensive analytics platform for lenders and borrowers featuring portfolio management, risk assessment, and market insights with real-time data visualization.",
    category: "Analytics",
    icon: BarChart3,
    relatedIds: [2, 10, 11],
    status: "pending" as const,
    energy: 25,
  },
  {
    id: 10,
    title: "API Ecosystem",
    date: "Q1 2025",
    content:
      "Developer-friendly APIs enabling third-party integrations, institutional partnerships, and custom DeFi applications built on Morphify's infrastructure.",
    category: "Developer Tools",
    icon: Code,
    relatedIds: [4, 9, 12],
    status: "pending" as const,
    energy: 20,
  },
  {
    id: 11,
    title: "DeFi Integrations",
    date: "Q2 2025",
    content:
      "Cross-protocol integrations with major DeFi platforms for yield farming, liquidity mining, and advanced financial products. Expanding the Morphify ecosystem.",
    category: "Integrations",
    icon: Coins,
    relatedIds: [5, 9, 12],
    status: "pending" as const,
    energy: 15,
  },
  {
    id: 12,
    title: "Data Intelligence",
    date: "Q2 2025",
    content:
      "Advanced machine learning models for predictive analytics, fraud detection, and personalized financial recommendations. Leveraging big data for better outcomes.",
    category: "AI & ML",
    icon: Database,
    relatedIds: [6, 10, 11],
    status: "pending" as const,
    energy: 10,
  },
]

export function MorphifyEcosystemTimeline() {
  return (
    <div className="w-full">
      <RadialOrbitalTimeline timelineData={morphifyEcosystemData} />
    </div>
  )
}
