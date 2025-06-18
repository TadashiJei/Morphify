import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Decentralized Lending: How Morphify is Changing the Game",
      excerpt:
        "Explore how blockchain technology is revolutionizing access to financial services for the unbanked population worldwide.",
      author: "Java Jay Bartolome",
      date: "2024-01-15",
      tags: ["DeFi", "Blockchain", "Finance"],
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Understanding On-Chain Reputation: Building Credit Without Banks",
      excerpt:
        "Learn how Morphify's innovative credit scoring system works and why it's more inclusive than traditional methods.",
      author: "Tech Team",
      date: "2024-01-10",
      tags: ["Credit", "Web3", "Innovation"],
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Morph L2: Why We Chose This Blockchain for Micro-Lending",
      excerpt:
        "Deep dive into the technical decisions behind Morphify's blockchain infrastructure and scalability solutions.",
      author: "Engineering Team",
      date: "2024-01-05",
      tags: ["Technology", "Morph", "Scalability"],
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Security First: How Smart Contracts Protect Your Assets",
      excerpt: "Understanding the security measures and audit processes that keep your funds safe on Morphify.",
      author: "Security Team",
      date: "2023-12-28",
      tags: ["Security", "Smart Contracts", "Audit"],
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Global Impact: Morphify's Mission to Bank the Unbanked",
      excerpt: "Stories from users around the world who have gained access to financial services through our platform.",
      author: "Community Team",
      date: "2023-12-20",
      tags: ["Impact", "Community", "Global"],
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Stablecoin Integration: Why We Use USDT and USDC",
      excerpt: "The benefits of stablecoin-based lending and how it reduces volatility risks for users.",
      author: "Product Team",
      date: "2023-12-15",
      tags: ["Stablecoins", "Product", "Risk Management"],
      readTime: "5 min read",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-gray-900 mb-6">
            MORPHIFY <span className="gradient-text">BLOG</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, updates, and stories from the world of decentralized finance and blockchain innovation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-strong rounded-3xl p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="neo-brutal-sm bg-primary text-white px-3 py-1 text-sm font-bold">FEATURED</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-anton text-3xl md:text-4xl text-gray-900 leading-tight">{featuredPost.title}</h2>

                  <p className="text-lg text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={16} className="text-gray-400" />
                      <span className="text-gray-600">{featuredPost.author}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="glass border border-white/30 px-3 py-1 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <button className="neo-brutal bg-primary text-white px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>

                <div className="glass rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center">
                      <Tag className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-anton text-4xl text-gray-900 mb-4">LATEST ARTICLES</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest in DeFi and blockchain technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-anton text-xl text-gray-900 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center space-x-2 text-sm">
                    <User size={14} className="text-gray-400" />
                    <span className="text-gray-600">{post.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="glass border border-white/30 px-2 py-1 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <button className="w-full neo-brutal-sm bg-white text-gray-900 px-4 py-2 font-bold text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-3xl p-12 space-y-8">
            <h2 className="font-anton text-4xl text-gray-900">STAY UPDATED</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, insights, and announcements from Morphify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="neo-brutal bg-primary text-white px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
