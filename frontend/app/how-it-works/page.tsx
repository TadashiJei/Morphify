import { ArrowRight, UserCheck, CreditCard, Shield, TrendingUp } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            HOW IT <span className="gradient-text">WORKS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and transparent. Learn how Morphify revolutionizes lending and borrowing through blockchain
            technology.
          </p>
        </div>
      </section>

      {/* For Lenders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">FOR LENDERS</h2>
            <p className="text-xl text-gray-600">Earn competitive returns while supporting financial inclusion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <UserCheck className="w-8 h-8" />,
                title: "Connect Wallet",
                description: "Link your Web3 wallet and verify your identity on the Morph L2 network",
              },
              {
                step: "02",
                icon: <CreditCard className="w-8 h-8" />,
                title: "Deposit Stablecoins",
                description: "Add USDT, USDC, or other stablecoins to the lending pool with flexible terms",
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Earn Returns",
                description: "Receive automated interest payments as borrowers repay their loans",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-strong rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-4 left-4 neo-brutal-sm bg-primary text-white px-3 py-1 font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-primary mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="font-anton text-2xl text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Borrowers Section */}
      <section className="py-20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">FOR BORROWERS</h2>
            <p className="text-xl text-gray-600">Access micro-loans based on your on-chain reputation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Shield className="w-8 h-8" />,
                title: "Build Reputation",
                description: "Establish your Morph Credit Score through verified on-chain activities and transactions",
              },
              {
                step: "02",
                icon: <CreditCard className="w-8 h-8" />,
                title: "Request Loan",
                description: "Apply for micro-loans with terms tailored to your credit score and needs",
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Repay & Improve",
                description: "Make timely repayments to improve your credit score and access larger loans",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-4 left-4 neo-brutal-sm bg-emerald-600 text-white px-3 py-1 font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-emerald-600 mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="font-anton text-2xl text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">POWERED BY MORPH L2</h2>
            <p className="text-xl text-gray-600">Advanced blockchain technology for secure, efficient transactions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-anton text-xl text-gray-900 mb-3">Low Transaction Costs</h3>
                <p className="text-gray-600">
                  Morph L2's optimized infrastructure ensures micro-transactions remain economically viable
                </p>
              </div>
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-anton text-xl text-gray-900 mb-3">Smart Contract Security</h3>
                <p className="text-gray-600">Automated loan management with built-in security and transparency</p>
              </div>
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-anton text-xl text-gray-900 mb-3">Cross-Chain Compatibility</h3>
                <p className="text-gray-600">Seamless integration with multiple blockchain networks and assets</p>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-anton text-2xl text-gray-900">SECURE & SCALABLE</h3>
                <p className="text-gray-600">Built on enterprise-grade blockchain infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
