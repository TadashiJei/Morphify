import { Users, Award, Target, Globe, ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
              ABOUT <span className="gradient-text">MORPHIFY</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of decentralized finance, making lending and borrowing accessible to everyone,
              everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-anton text-4xl text-gray-900">OUR MISSION</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Morphify aims to democratize access to financial services by leveraging blockchain technology. We
                believe that everyone deserves access to fair, transparent, and efficient lending services, regardless
                of their geographic location or traditional credit history.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Globe className="w-6 h-6" />, text: "Global Reach" },
                  { icon: <Users className="w-6 h-6" />, text: "Community First" },
                  { icon: <Award className="w-6 h-6" />, text: "Innovation" },
                  { icon: <Target className="w-6 h-6" />, text: "Impact Driven" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-strong rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-anton text-2xl text-gray-900">GLOBAL IMPACT</h3>
                <p className="text-gray-600">Serving 50+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">MEET OUR FOUNDER</h2>
            <p className="text-xl text-gray-600">Leading the revolution in decentralized finance</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl border-4 border-primary shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/founder-java-jay.jpg"
                      alt="Java Jay Bartolome - Founder & Lead Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-anton text-3xl text-gray-900 mb-2">Java Jay Bartolome</h3>
                  <p className="text-primary font-medium text-lg">Founder & Lead Engineer</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="glass border border-white/30 rounded-lg px-4 py-2">
                      <div className="text-sm text-gray-600">Experience</div>
                      <div className="font-bold text-primary">8+ Years</div>
                    </div>
                    <div className="glass border border-white/30 rounded-lg px-4 py-2">
                      <div className="text-sm text-gray-600">Focus</div>
                      <div className="font-bold text-primary">FinTech</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Java Jay Bartolome is a visionary entrepreneur and blockchain engineer with over 8 years of
                    experience in fintech and decentralized systems. His passion for financial inclusion drives
                    Morphify's mission to serve the underbanked globally.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With a background in both traditional finance and cutting-edge blockchain technology, Java Jay
                    brings unique insights to the challenges of creating accessible, trustworthy DeFi solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Horizontal Scrolling */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">OUR PARTNERS</h2>
            <p className="text-xl text-gray-600">Collaborating with industry leaders</p>
          </div>

          <div className="relative">
            {/* Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
                {[
                  {
                    name: "Hacktivators",
                    description: "Developer Community & Education",
                    type: "image",
                    src: "/images/hacktivators-logo.svg",
                    category: "Community",
                    established: "2020",
                  },
                  {
                    name: "Tomeku",
                    description: "Design & User Experience",
                    type: "text",
                    displayName: "TOMEKU",
                    category: "Design",
                    established: "2019",
                  },
                  {
                    name: "JavaCraftHosting",
                    description: "Infrastructure & Cloud Solutions",
                    type: "text",
                    displayName: "JCH",
                    category: "Infrastructure",
                    established: "2018",
                  },
                  {
                    name: "Morph L2",
                    description: "Blockchain Infrastructure",
                    type: "text",
                    displayName: "MORPH",
                    category: "Blockchain",
                    established: "2023",
                  },
                  {
                    name: "DeFi Alliance",
                    description: "Strategic Partnership",
                    type: "text",
                    displayName: "DeFi",
                    category: "Finance",
                    established: "2021",
                  },
                  {
                    name: "Web3 Foundation",
                    description: "Technology & Innovation",
                    type: "text",
                    displayName: "W3F",
                    category: "Technology",
                    established: "2017",
                  },
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-center space-y-4">
                      {partner.type === "image" ? (
                        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-xl p-4 shadow-lg">
                          <img
                            src={partner.src || "/placeholder.svg"}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <span className="text-white font-anton text-lg font-bold">{partner.displayName}</span>
                        </div>
                      )}

                      <div className="space-y-2">
                        <h3 className="font-anton text-2xl text-gray-900">{partner.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Category</div>
                          <div className="font-semibold text-primary text-sm">{partner.category}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Since</div>
                          <div className="font-semibold text-gray-900 text-sm">{partner.established}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="p-3 glass border border-white/30 rounded-full hover:bg-white/20 transition-colors group">
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <button className="p-3 glass border border-white/30 rounded-full hover:bg-white/20 transition-colors group">
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6+", label: "Strategic Partners" },
              { value: "15+", label: "Countries Covered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Global Support" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <div className="font-anton text-3xl gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
