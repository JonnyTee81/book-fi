import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { allBooks, bookCollections } from '@/lib/data/books';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About BookFi</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're on a mission to democratize financial education by helping you discover the best personal finance books 
            that will transform your relationship with money and build lasting wealth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To make financial literacy accessible to everyone by curating and recommending the highest-quality personal finance books. 
              We believe that the right book at the right time can completely change someone's financial trajectory and life outcomes.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
              A world where everyone has access to proven financial wisdom and the knowledge needed to build wealth, achieve financial independence, 
              and live the life they've always dreamed of.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We carefully curate, review, and organize the best personal finance books to help you find exactly what you need for your financial journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg text-center border border-slate-700/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-emerald-900/50 border border-emerald-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Curation</h3>
              <p className="text-slate-300">
                We research and evaluate hundreds of financial books to identify only the most valuable, proven, and actionable content.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg text-center border border-slate-700/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-900/50 border border-blue-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Organized Collections</h3>
              <p className="text-slate-300">
                We organize books into thoughtful collections and learning paths that guide you from beginner to advanced concepts.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg text-center border border-slate-700/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-900/50 border border-purple-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Honest Reviews</h3>
              <p className="text-slate-300">
                We provide detailed, unbiased reviews with key takeaways, pros and cons, and recommendations for who should read each book.
              </p>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="mb-16 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-8">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quality Over Quantity</h3>
              <p className="text-slate-300 mb-6">
                We'd rather recommend 10 life-changing books than 100 mediocre ones. Every book in our collection has been carefully selected for its potential to create real financial transformation.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-4">Transparency First</h3>
              <p className="text-slate-300">
                We're completely transparent about our affiliate relationships and only recommend books we genuinely believe will help you succeed financially.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Accessibility for All</h3>
              <p className="text-slate-300 mb-6">
                Financial education shouldn't be limited to the wealthy. We organize content for all experience levels and income situations.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-4">Practical Focus</h3>
              <p className="text-slate-300">
                We prioritize books with actionable advice you can implement immediately, not just theoretical concepts.
              </p>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">BookFi by the Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{allBooks.length}</div>
              <div className="text-slate-300">Curated Books</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">{bookCollections.length}</div>
              <div className="text-slate-300">Collections</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-slate-300">Categories</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-400 mb-2">4.6</div>
              <div className="text-slate-300">Avg Rating</div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We're committed to helping you find the financial books that will make the biggest difference in your life. 
              Every recommendation is made with your success in mind.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold mb-2">Personalized Recommendations</div>
                <div className="text-sm opacity-90">Books matched to your goals and experience level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-semibold mb-2">Continuously Updated</div>
                <div className="text-sm opacity-90">Regular reviews and new book additions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold mb-2">Community Focused</div>
                <div className="text-sm opacity-90">Building a community of financially empowered readers</div>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We're Different</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Unlike generic book recommendation sites, we focus exclusively on personal finance and provide the context you need to choose the right book for your situation.
            </p>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-4">❌ What Others Do</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• List hundreds of books without context</li>
                  <li>• Focus on newest releases over proven classics</li>
                  <li>• Provide superficial one-line reviews</li>
                  <li>• Mix financial advice with unrelated topics</li>
                  <li>• Prioritize affiliate commissions over quality</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">✅ What We Do</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Carefully curate only the best books</li>
                  <li>• Focus on time-tested, proven content</li>
                  <li>• Provide detailed analysis and key takeaways</li>
                  <li>• Specialize exclusively in personal finance</li>
                  <li>• Recommend only books we truly believe in</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're just starting out or looking to advance your knowledge, we have the perfect books to guide your path to financial success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/collections/beginner-essentials"
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Start with Beginner Books
            </Link>
            <Link 
              href="/books"
              className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Browse All Books
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}