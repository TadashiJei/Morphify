import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            PRIVACY <span className="gradient-text">POLICY</span>
          </h1>
          <p className="text-xl text-gray-600">Last updated: January 15, 2024</p>
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2 text-primary">
              <Shield size={20} />
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Lock size={20} />
              <span className="font-medium">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">OUR PRIVACY PRINCIPLES</h2>
            <p className="text-xl text-gray-600">Built on transparency, security, and user control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Transparency",
                description: "We clearly explain what data we collect and how it's used",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Security",
                description: "Your data is protected with enterprise-grade encryption",
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "User Control",
                description: "You have full control over your personal information",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">{principle.icon}</div>
                <h3 className="font-anton text-2xl text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 glass-strong">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">1. INFORMATION WE COLLECT</h2>
              <div className="space-y-3">
                <h3 className="font-semibold text-xl text-gray-800">On-Chain Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a blockchain-based platform, we analyze publicly available on-chain data including wallet
                  addresses, transaction history, and smart contract interactions to calculate credit scores and
                  facilitate lending services.
                </p>

                <h3 className="font-semibold text-xl text-gray-800">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information you voluntarily provide, such as email addresses for
                  notifications, KYC documentation for compliance, and communication preferences.
                </p>

                <h3 className="font-semibold text-xl text-gray-800">Technical Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  We automatically collect technical information including IP addresses, browser types, device
                  information, and usage patterns to improve our service and ensure security.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">2. HOW WE USE YOUR INFORMATION</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Calculate and maintain your Morph Credit Score</li>
                <li>Facilitate lending and borrowing transactions</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve platform security and prevent fraud</li>
                <li>Send important service notifications and updates</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">3. DATA SHARING AND DISCLOSURE</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only
                in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  With service providers who assist in platform operations (under strict confidentiality agreements)
                </li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">4. DATA SECURITY</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure storage with industry-standard encryption protocols</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for account access</li>
                <li>Continuous monitoring for suspicious activities</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">5. YOUR PRIVACY RIGHTS</h2>
              <p className="text-gray-600 leading-relaxed">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access: Request copies of your personal data</li>
                <li>Rectification: Request correction of inaccurate information</li>
                <li>Erasure: Request deletion of your personal data</li>
                <li>Portability: Request transfer of your data to another service</li>
                <li>Objection: Object to processing of your personal data</li>
                <li>Restriction: Request limitation of data processing</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">6. BLOCKCHAIN AND IMMUTABILITY</h2>
              <p className="text-gray-600 leading-relaxed">
                Please note that certain information recorded on the blockchain (such as transaction history and smart
                contract interactions) is immutable and cannot be deleted or modified. This is an inherent
                characteristic of blockchain technology and is necessary for the integrity and security of the
                decentralized system.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">7. COOKIES AND TRACKING</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide
                personalized content. You can control cookie preferences through your browser settings, though some
                features may not function properly if cookies are disabled.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">8. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-gray-600 leading-relaxed">
                As a global platform, your information may be transferred to and processed in countries other than your
                own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable
                privacy laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">9. DATA RETENTION</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes outlined in this
                policy, comply with legal obligations, resolve disputes, and enforce our agreements. On-chain data
                remains permanently recorded on the blockchain.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">10. CHILDREN'S PRIVACY</h2>
              <p className="text-gray-600 leading-relaxed">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child, we will
                take steps to delete such information promptly.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">11. POLICY UPDATES</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy periodically to reflect changes in our practices or applicable laws.
                We will notify users of significant changes through the platform interface or email. Your continued use
                of the service constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-3xl text-gray-900">12. CONTACT US</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about this privacy policy or to exercise your privacy rights, please contact our Data
                Protection Officer at privacy@morphify.io or through our official support channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-3xl p-12 space-y-8">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-anton text-4xl text-gray-900">QUESTIONS ABOUT YOUR DATA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our privacy team is here to help. Contact us for any questions about how we handle your personal
              information.
            </p>
            <button className="neo-brutal bg-primary text-white px-8 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
