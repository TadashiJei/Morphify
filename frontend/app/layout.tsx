import type React from "react"
import type { Metadata } from "next"
import { Anton, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingElements } from "@/components/floating-elements"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Morphify - Revolutionary DeFi Lending Platform | Morph L2 Blockchain",
  description:
    "🚀 Revolutionary decentralized lending platform on Morph L2! Access micro-loans with AI credit scoring. 61K+ users, $25M+ lent, 52 countries. Join the DeFi revolution today! 💰",
  keywords: [
    "DeFi lending platform",
    "decentralized finance",
    "Morph L2 blockchain",
    "micro-loans",
    "AI credit scoring",
    "cryptocurrency lending",
    "Web3 finance",
    "blockchain lending",
    "stablecoin loans",
    "financial inclusion",
    "unbanked solutions",
    "smart contracts",
    "yield farming",
    "liquidity pools",
    "on-chain reputation",
    "Java Jay Bartolome",
    "Morphify DeFi",
    "decentralized borrowing",
    "crypto lending protocol",
    "DeFi innovation",
  ],
  authors: [{ name: "Java Jay Bartolome", url: "https://morphify.io/about" }],
  creator: "Java Jay Bartolome - Morphify Founder",
  publisher: "Morphify - DeFi Lending Platform",
  category: "Finance Technology",
  classification: "DeFi, Blockchain, Financial Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://morphify.io"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    title: "Morphify - Revolutionary DeFi Lending Platform | 61K+ Users, $25M+ Volume",
    description:
      "🚀 Join 61,000+ users on Morphify! Revolutionary DeFi lending with AI credit scoring on Morph L2. $25M+ lent across 52 countries. Start earning or borrowing today! 💰",
    url: "https://morphify.io",
    siteName: "Morphify - DeFi Lending Platform",
    images: [
      {
        url: "/images/morphify-social.png",
        width: 1200,
        height: 630,
        alt: "Morphify - Revolutionary DeFi Lending Platform on Morph L2 Blockchain",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morphify - Revolutionary DeFi Lending Platform 🚀",
    description:
      "Join 61K+ users earning & borrowing on Morphify! AI credit scoring, Morph L2 blockchain, $25M+ volume. The future of DeFi is here! 💰 #DeFi #Blockchain",
    site: "@MorphifyDeFi",
    creator: "@JavaJayBartolome",
    images: ["/images/morphify-social.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "morphify-defi-lending-platform-verification",
    yandex: "morphify-blockchain-lending-verification",
  },
  other: {
    "msapplication-TileColor": "#5ec57e",
    "theme-color": "#5ec57e",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Morphify DeFi",
    "application-name": "Morphify",
    "mobile-web-app-capable": "yes",
    "msapplication-starturl": "/",
    "msapplication-tap-highlight": "no",
    // Rich Snippets
    "og:price:amount": "0",
    "og:price:currency": "USD",
    "product:price:amount": "0",
    "product:price:currency": "USD",
    // Business Info
    "business:contact_data:street_address": "Decentralized Global Network",
    "business:contact_data:locality": "Blockchain",
    "business:contact_data:region": "Web3",
    "business:contact_data:country_name": "Global",
    // App Info
    "al:web:url": "https://morphify.io",
    "al:web:should_fallback": "true",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#5ec57e" />
        <meta name="color-scheme" content="light" />

        {/* Discord/Embed Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="Morphify - Decentralized Finance Platform" />

        {/* Reddit Specific */}
        <meta property="og:image:secure_url" content="https://morphify.io/images/morphify-social.png" />

        {/* LinkedIn */}
        <meta property="og:image:type" content="image/png" />

        {/* Telegram */}
        <meta property="telegram:channel" content="@MorphifyOfficial" />

        {/* WhatsApp */}
        <meta property="og:image:alt" content="Morphify DeFi Platform - Empowering Financial Inclusion" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "FinancialService"],
              name: "Morphify",
              alternateName: "Morphify DeFi",
              description: "Revolutionary decentralized lending platform on Morph L2 blockchain with AI credit scoring",
              url: "https://morphify.io",
              logo: "https://morphify.io/images/morphify-social.png",
              image: "https://morphify.io/images/morphify-social.png",
              foundingDate: "2024",
              foundingLocation: "Global Blockchain Network",
              slogan: "Empowering DeFi. Simplifying Trust.",
              keywords: "DeFi, lending, blockchain, Morph L2, cryptocurrency, financial inclusion",
              sameAs: [
                "https://twitter.com/MorphifyDeFi",
                "https://linkedin.com/company/morphify",
                "https://github.com/morphify-defi",
                "https://discord.gg/morphify",
                "https://t.me/MorphifyOfficial",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-MORPHIFY",
                contactType: "customer service",
                email: "hello@morphify.io",
                availableLanguage: ["English", "Spanish", "French"],
              },
              founder: {
                "@type": "Person",
                name: "Java Jay Bartolome",
                jobTitle: "Founder & Lead Engineer",
                image: "https://morphify.io/images/founder-java-jay.jpg",
              },
              serviceType: "Decentralized Finance Platform",
              areaServed: {
                "@type": "Place",
                name: "Global - 52 Countries",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
              offers: {
                "@type": "Offer",
                description: "DeFi lending and borrowing services",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100">
        <ScrollProgress />
        <FloatingElements />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
