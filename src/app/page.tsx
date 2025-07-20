import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { featuredBooks, getFeaturedCollections, getBestsellerBooks, allBooks } from '@/lib/data/books';
import Link from 'next/link';

export default function Home() {
  const featuredCollections = getFeaturedCollections().slice(0, 3);
  const bestsellerBooks = getBestsellerBooks().slice(0, 3);
  const topRatedBooks = allBooks
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
          {/* Background Wave Effects */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1"/>
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1"/>
                  <stop offset="50%" stopColor="#16a34a" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#15803d" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path d="M0,160 C320,100 420,200 1000,140 L1000,190 C680,150 520,250 0,190 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="10s" repeatCount="indefinite"/>
              </path>
              <path d="M0,200 C280,140 380,240 1000,180 L1000,230 C720,190 560,290 0,230 Z" fill="url(#wave2)">
                <animateTransform attributeName="transform" type="translate" values="0,0;-15,0;0,0" dur="8s" repeatCount="indefinite"/>
              </path>
              <path d="M0,280 C350,220 450,320 1000,260 L1000,310 C650,270 490,370 0,310 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;25,0;0,0" dur="12s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Master Personal Finance &<br />
                  Build Lasting 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400"> Wealth</span><br />
                  with Expert-Recommended Books.
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Discover the best personal finance books curated by experts. From budgeting basics to advanced investing strategies, find the perfect books to transform your financial future and achieve your money goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/collections/beginner-essentials"
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-emerald-500/25"
                  >
                    Start with Basics
                  </Link>
                  <Link 
                    href="/books"
                    className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-center backdrop-blur-sm"
                  >
                    Browse All Books
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden border border-slate-700/50">
                  {/* Modern Device Mockup */}
                  <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl">
                    <div className="absolute inset-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-3">BookFi</div>
                        <div className="text-sm text-slate-400 mb-4">Financial Education Platform</div>
                        <div className="flex space-x-2 justify-center">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
                    <span className="text-emerald-400 text-xl">📊</span>
                  </div>
                  <div className="absolute top-12 left-4 w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-400/30">
                    <span className="text-green-400 text-xl">💰</span>
                  </div>
                  <div className="absolute bottom-12 right-8 w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                    <span className="text-emerald-500 text-xl">📈</span>
                  </div>
                  <div className="absolute bottom-4 left-8 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-500/30">
                    <span className="text-green-500 text-xl">💡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2">{allBooks.length}</div>
                <div className="text-slate-300">Expert-Reviewed Books</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2">{featuredCollections.length + 7}</div>
                <div className="text-slate-300">Curated Collections</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2">4.6</div>
                <div className="text-slate-300">Average Book Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-12 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              <div className="text-center text-slate-400 font-semibold">Amazon</div>
              <div className="text-center text-slate-400 font-semibold">Audible</div>
              <div className="text-center text-slate-400 font-semibold">Kindle</div>
              <div className="text-center text-slate-400 font-semibold">Goodreads</div>
              <div className="text-center text-slate-400 font-semibold">Barnes & Noble</div>
              <div className="text-center text-slate-400 font-semibold">Apple Books</div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Book Collections</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Expertly curated collections designed to guide your financial education journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredCollections.map((collection, index) => (
                <Link 
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="group"
                >
                  <div className={`rounded-2xl p-8 text-white relative overflow-hidden transition-transform group-hover:scale-105 border border-slate-700/50 backdrop-blur-sm ${
                    index === 0 ? 'bg-gradient-to-br from-emerald-600/80 to-green-700/80' :
                    index === 1 ? 'bg-gradient-to-br from-blue-600/80 to-blue-700/80' :
                    'bg-gradient-to-br from-purple-600/80 to-purple-700/80'
                  }`}>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4">{collection.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{collection.description}</p>
                      <div className="text-sm font-medium">
                        {collection.bookIds.length} Books →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/collections"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                View All Collections →
              </Link>
            </div>
          </div>
        </section>

        {/* Bestselling Books */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Current Bestsellers</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                The most popular personal finance books trusted by millions of readers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bestsellerBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/books"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                View All Books
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by Financial Topic</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Find exactly what you need to advance your financial education. Our books are carefully categorized to help you focus on specific areas of personal finance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              <Link href="/categories/investing" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-blue-900/50 border border-blue-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Investing</div>
              </Link>
              
              <Link href="/categories/budgeting" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-emerald-900/50 border border-emerald-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-emerald-400 transition-colors">Budgeting</div>
              </Link>
              
              <Link href="/categories/debt-management" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-red-900/50 border border-red-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-red-400 transition-colors">Debt Management</div>
              </Link>
              
              <Link href="/categories/retirement" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-purple-900/50 border border-purple-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">🏖️</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-purple-400 transition-colors">Retirement</div>
              </Link>
              
              <Link href="/categories/entrepreneurship" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-orange-900/50 border border-orange-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-orange-400 transition-colors">Business</div>
              </Link>
              
              <Link href="/categories/real-estate" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-900/50 border border-yellow-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">🏠</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-yellow-400 transition-colors">Real Estate</div>
              </Link>
              
              <Link href="/categories/financial-planning" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-indigo-900/50 border border-indigo-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-800/50 transition-colors backdrop-blur-sm">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="font-medium text-slate-300 group-hover:text-indigo-400 transition-colors">Planning</div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/categories"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                View All Categories →
              </Link>
            </div>
          </div>
        </section>

        {/* Top Rated Books */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Highest Rated Books</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                The books our community loves most, rated 4.5+ stars by thousands of readers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topRatedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/books?sort=rating"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                View All Top Rated Books →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Background Wave Effects */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,100 C300,50 700,150 1000,100 L1000,400 L0,400 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="15s" repeatCount="indefinite"/>
              </path>
              <path d="M0,150 C400,100 600,200 1000,150 L1000,400 L0,400 Z" fill="url(#wave2)">
                <animateTransform attributeName="transform" type="translate" values="0,0;-25,0;0,0" dur="12s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Financial Transformation Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of readers who have transformed their financial lives with the right books. 
              Every expert started with page one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections/beginner-essentials"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Start with Beginner Books
              </Link>
              <Link 
                href="/categories"
                className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                Browse by Topic
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
