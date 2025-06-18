import { Code, Book, Zap, Shield, Copy, ExternalLink } from "lucide-react"

export default function DevelopersPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            DEVELOPER <span className="gradient-text">API</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the future of DeFi with Morphify's powerful APIs. Access lending pools, credit scores, and transaction
            data programmatically.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className="neo-brutal-sm bg-primary text-white px-4 py-2 font-bold text-sm">v2.1.0</span>
            <span className="glass border border-white/30 px-4 py-2 text-sm">REST API</span>
            <span className="glass border border-white/30 px-4 py-2 text-sm">GraphQL</span>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">QUICK START</h2>
            <p className="text-xl text-gray-600">Get up and running with Morphify API in minutes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-4">1. GET API KEY</h3>
                <p className="text-gray-600 mb-4">
                  Register for a free developer account and get your API key instantly.
                </p>
                <button className="neo-brutal bg-primary text-white px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  Get API Key
                </button>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-4">2. MAKE YOUR FIRST CALL</h3>
                <p className="text-gray-600 mb-4">Test the API with a simple request to get platform statistics.</p>
                <div className="glass border border-white/30 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-500">// Example request</div>
                  <div className="text-primary">curl -H "Authorization: Bearer YOUR_API_KEY"</div>
                  <div className="text-primary">https://api.morphify.io/v2/stats</div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8">
                <h3 className="font-anton text-2xl text-gray-900 mb-4">3. EXPLORE ENDPOINTS</h3>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive API documentation and interactive examples.
                </p>
                <button className="neo-brutal bg-white text-gray-900 px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center space-x-2">
                  <Book size={20} />
                  <span>View Documentation</span>
                </button>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-anton text-2xl text-gray-900">CODE EXAMPLE</h3>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Copy size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-green-400">// Initialize Morphify SDK</div>
                <div className="text-blue-400">import</div> <div className="text-white">{"{ MorphifyAPI }"}</div>{" "}
                <div className="text-blue-400">from</div> <div className="text-yellow-300">'@morphify/sdk'</div>
                <br />
                <div className="text-blue-400">const</div> <div className="text-white">morphify = </div>
                <div className="text-blue-400">new</div> <div className="text-white">MorphifyAPI({"{"}</div>
                <div className="text-white ml-4">apiKey: </div>
                <div className="text-yellow-300">'your-api-key'</div>
                <div className="text-white">,</div>
                <div className="text-white ml-4">network: </div>
                <div className="text-yellow-300">'morph-mainnet'</div>
                <div className="text-white">{"});"}</div>
                <br />
                <div className="text-green-400">// Get user credit score</div>
                <div className="text-blue-400">const</div> <div className="text-white">creditScore = </div>
                <div className="text-blue-400">await</div> <div className="text-white">morphify.getCreditScore(</div>
                <div className="text-white ml-4"></div>
                <div className="text-yellow-300">'0x1234...abcd'</div>
                <div className="text-white">);</div>
                <br />
                <div className="text-green-400">// Create lending offer</div>
                <div className="text-blue-400">const</div> <div className="text-white">offer = </div>
                <div className="text-blue-400">await</div>{" "}
                <div className="text-white">morphify.createLendingOffer({"{"}</div>
                <div className="text-white ml-4">amount: </div>
                <div className="text-orange-400">1000</div>
                <div className="text-white">,</div>
                <div className="text-white ml-4">token: </div>
                <div className="text-yellow-300">'USDT'</div>
                <div className="text-white">,</div>
                <div className="text-white ml-4">interestRate: </div>
                <div className="text-orange-400">5.5</div>
                <div className="text-white">,</div>
                <div className="text-white ml-4">duration: </div>
                <div className="text-orange-400">30</div> <div className="text-green-400">// days</div>
                <div className="text-white">{"});"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">API ENDPOINTS</h2>
            <p className="text-xl text-gray-600">Comprehensive API coverage for all Morphify features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Authentication",
                endpoints: [
                  { method: "POST", path: "/auth/login", description: "Authenticate user" },
                  { method: "POST", path: "/auth/refresh", description: "Refresh access token" },
                  { method: "POST", path: "/auth/logout", description: "Logout user" },
                ],
              },
              {
                category: "Credit Scores",
                endpoints: [
                  { method: "GET", path: "/credit/{address}", description: "Get credit score" },
                  { method: "GET", path: "/credit/{address}/history", description: "Get score history" },
                  { method: "POST", path: "/credit/calculate", description: "Calculate new score" },
                ],
              },
              {
                category: "Lending",
                endpoints: [
                  { method: "GET", path: "/lending/offers", description: "List lending offers" },
                  { method: "POST", path: "/lending/offers", description: "Create lending offer" },
                  { method: "GET", path: "/lending/pools", description: "Get lending pools" },
                ],
              },
              {
                category: "Borrowing",
                endpoints: [
                  { method: "GET", path: "/borrowing/requests", description: "List borrow requests" },
                  { method: "POST", path: "/borrowing/requests", description: "Create borrow request" },
                  { method: "GET", path: "/borrowing/loans", description: "Get active loans" },
                ],
              },
              {
                category: "Transactions",
                endpoints: [
                  { method: "GET", path: "/transactions", description: "List transactions" },
                  { method: "GET", path: "/transactions/{id}", description: "Get transaction details" },
                  { method: "POST", path: "/transactions/webhook", description: "Transaction webhook" },
                ],
              },
              {
                category: "Analytics",
                endpoints: [
                  { method: "GET", path: "/analytics/stats", description: "Platform statistics" },
                  { method: "GET", path: "/analytics/volume", description: "Trading volume data" },
                  { method: "GET", path: "/analytics/users", description: "User analytics" },
                ],
              },
            ].map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <h3 className="font-anton text-xl text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="glass border border-white/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded ${
                            endpoint.method === "GET"
                              ? "bg-green-100 text-green-800"
                              : endpoint.method === "POST"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                      </div>
                      <p className="text-xs text-gray-600">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">SDKs & TOOLS</h2>
            <p className="text-xl text-gray-600">Official SDKs and developer tools for popular languages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "JavaScript/TypeScript", icon: "JS", status: "Available", color: "bg-yellow-500" },
              { name: "Python", icon: "PY", status: "Available", color: "bg-blue-500" },
              { name: "Go", icon: "GO", status: "Beta", color: "bg-cyan-500" },
              { name: "Rust", icon: "RS", status: "Coming Soon", color: "bg-orange-500" },
            ].map((sdk, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${sdk.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{sdk.icon}</span>
                </div>
                <h3 className="font-anton text-lg text-gray-900 mb-2">{sdk.name}</h3>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    sdk.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : sdk.status === "Beta"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {sdk.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits & Support */}
      <section className="py-20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-anton text-2xl text-gray-900 mb-6">RATE LIMITS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Free Tier</span>
                  <span className="font-semibold text-gray-900">1,000 requests/hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Developer Tier</span>
                  <span className="font-semibold text-gray-900">10,000 requests/hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enterprise Tier</span>
                  <span className="font-semibold text-primary">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-anton text-2xl text-gray-900 mb-6">DEVELOPER SUPPORT</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">24/7 API monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">99.9% uptime SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Interactive API explorer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Dedicated developer Discord</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
