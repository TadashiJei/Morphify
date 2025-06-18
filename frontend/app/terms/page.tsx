export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            TERMS OF <span className="gradient-text">SERVICE</span>
          </h1>
          <p className="text-xl text-gray-600">Last updated: January 15, 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">1. ACCEPTANCE OF TERMS</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Morphify's decentralized lending platform ("Service"), you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">2. DESCRIPTION OF SERVICE</h2>
              <p className="text-gray-600 leading-relaxed">
                Morphify is a decentralized finance (DeFi) platform built on the Morph L2 blockchain that facilitates
                peer-to-peer lending and borrowing of digital assets. The platform uses smart contracts to automate loan
                processes and employs on-chain reputation scoring to assess creditworthiness.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">3. USER RESPONSIBILITIES</h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">Users are responsible for:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Maintaining the security of their wallet and private keys</li>
                  <li>Ensuring compliance with local laws and regulations</li>
                  <li>Providing accurate information during the verification process</li>
                  <li>Understanding the risks associated with DeFi protocols</li>
                  <li>Making timely loan repayments as agreed upon</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">4. RISKS AND DISCLAIMERS</h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  DeFi protocols involve significant risks, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Smart contract vulnerabilities and potential exploits</li>
                  <li>Market volatility affecting asset values</li>
                  <li>Regulatory changes that may impact service availability</li>
                  <li>Technical failures or network congestion</li>
                  <li>Permanent loss of funds due to user error</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">5. LENDING AND BORROWING</h2>
              <p className="text-gray-600 leading-relaxed">
                All lending and borrowing activities are governed by smart contracts deployed on the Morph L2
                blockchain. Interest rates, loan terms, and collateral requirements are determined algorithmically based
                on market conditions and user credit scores. Users acknowledge that loan defaults may result in
                liquidation of collateral and negative impact on credit scores.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">6. CREDIT SCORING</h2>
              <p className="text-gray-600 leading-relaxed">
                Morphify's credit scoring system analyzes on-chain data to assess user creditworthiness. While we strive
                for accuracy, credit scores are provided "as is" without warranty. Users understand that credit scores
                may fluctuate based on blockchain activity and market conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">7. FEES AND CHARGES</h2>
              <p className="text-gray-600 leading-relaxed">
                Morphify may charge fees for various services, including but not limited to loan origination, platform
                usage, and early repayment. All fees are transparently displayed before transaction confirmation.
                Network gas fees are separate and paid directly to blockchain validators.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">8. INTELLECTUAL PROPERTY</h2>
              <p className="text-gray-600 leading-relaxed">
                The Morphify platform, including its software, design, and content, is protected by intellectual
                property laws. Users are granted a limited, non-exclusive license to use the platform for its intended
                purposes. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">9. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Morphify and its affiliates shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
                profits, data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">10. GOVERNING LAW</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms shall be interpreted and governed in accordance with the laws of the jurisdiction where
                Morphify is incorporated, without regard to conflict of law provisions. Any disputes shall be resolved
                through binding arbitration.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">11. MODIFICATIONS</h2>
              <p className="text-gray-600 leading-relaxed">
                Morphify reserves the right to modify these terms at any time. Users will be notified of significant
                changes through the platform interface or email. Continued use of the service after modifications
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">12. CONTACT INFORMATION</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions regarding these terms of service, please contact us at legal@morphify.io or through our
                official support channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
