import { Mail, MapPin, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            GET IN <span className="gradient-text">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Morphify? We're here to help. Reach out to our team for support, partnerships, or
            general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="font-anton text-3xl text-gray-900 mb-8">SEND US A MESSAGE</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Press & Media</option>
                    <option>Bug Report</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full neo-brutal bg-primary text-white px-6 py-4 font-bold text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-6">CONTACT INFORMATION</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">hello@morphify.io</p>
                      <p className="text-gray-600">support@morphify.io</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                      <p className="text-gray-600">Available 24/7 through our AI assistant</p>
                      <p className="text-gray-600">Human support: Mon-Fri, 9AM-6PM UTC</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                      <p className="text-gray-600">Decentralized Global Network</p>
                      <p className="text-gray-600">Built on Morph L2 Blockchain</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-6">RESPONSE TIMES</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">General Inquiries</span>
                    <span className="font-semibold text-gray-900">24-48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Technical Support</span>
                    <span className="font-semibold text-gray-900">4-12 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Partnership Inquiries</span>
                    <span className="font-semibold text-gray-900">3-5 business days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Critical Issues</span>
                    <span className="font-semibold text-primary">Immediate</span>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-6">SOCIAL MEDIA</h3>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="glass border border-white/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="font-semibold text-gray-900">Twitter</div>
                    <div className="text-sm text-gray-600">@MorphifyDeFi</div>
                  </a>
                  <a
                    href="#"
                    className="glass border border-white/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="font-semibold text-gray-900">Discord</div>
                    <div className="text-sm text-gray-600">Join Community</div>
                  </a>
                  <a
                    href="#"
                    className="glass border border-white/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="font-semibold text-gray-900">Telegram</div>
                    <div className="text-sm text-gray-600">Official Channel</div>
                  </a>
                  <a
                    href="#"
                    className="glass border border-white/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="font-semibold text-gray-900">LinkedIn</div>
                    <div className="text-sm text-gray-600">Company Page</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 glass-strong">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I get started with Morphify?",
                answer:
                  "Simply connect your Web3 wallet, complete the verification process, and you can start lending or borrowing immediately.",
              },
              {
                question: "What cryptocurrencies does Morphify support?",
                answer:
                  "We primarily support stablecoins like USDT, USDC, and DAI to minimize volatility risks for our users.",
              },
              {
                question: "How is my credit score calculated?",
                answer:
                  "Your Morph Credit Score is based on verifiable on-chain activities, transaction history, and repayment behavior within our ecosystem.",
              },
              {
                question: "Is my money safe on Morphify?",
                answer:
                  "Yes, all funds are secured by audited smart contracts on the Morph L2 blockchain, with multiple security layers and insurance coverage.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <h3 className="font-anton text-xl text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
