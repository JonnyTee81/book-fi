import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { getBestsellerBooks, allBooks } from '@/lib/data/books';

export default function BestsellersPage() {
  const bestsellerBooks = getBestsellerBooks();
  const topRatedBestsellers = bestsellerBooks
    .filter(book => book.rating >= 4.5)
    .slice(0, 6);
  
  // If no books have amazonRank, show top rated books instead
  const displayBooks = bestsellerBooks.length > 0 ? bestsellerBooks : allBooks
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Personal Finance Bestsellers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The most popular personal finance books that are transforming lives and building wealth. 
            These proven bestsellers have helped millions of readers master their money.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{displayBooks.length}</div>
            <div className="text-slate-300">Bestselling Books</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {displayBooks.length > 0 
                ? (displayBooks.reduce((sum, book) => sum + book.rating, 0) / displayBooks.length).toFixed(1)
                : '0'}★
            </div>
            <div className="text-slate-300">Average Rating</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {displayBooks.reduce((sum, book) => sum + book.reviewCount, 0).toLocaleString()}
            </div>
            <div className="text-slate-300">Total Reviews</div>
          </div>
        </div>

        {/* Amazon Bestsellers */}
        {bestsellerBooks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Amazon Bestsellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {bestsellerBooks.map((book, index) => (
                <div key={book.id} className="relative">
                  <div className="absolute -top-2 -left-2 z-10">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      #{index + 1}
                    </span>
                  </div>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Top Rated Bestsellers */}
        {topRatedBestsellers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Highest Rated Bestsellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topRatedBestsellers.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* All Time Favorites (fallback if no amazon ranks) */}
        {bestsellerBooks.length === 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">All-Time Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayBooks.map((book, index) => (
                <div key={book.id} className="relative">
                  <div className="absolute -top-2 -left-2 z-10">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      #{index + 1}
                    </span>
                  </div>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why These Books Are Bestsellers */}
        <section className="mb-16 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Why These Books Dominate the Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Proven Results</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Millions of readers have transformed their finances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Time-tested strategies that actually work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Written by recognized financial experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Practical advice you can implement immediately</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Universal Appeal</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Accessible to beginners and experts alike</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Cover all major areas of personal finance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Engaging writing that keeps you motivated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Strong word-of-mouth recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Explore More Books by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/categories/investing"
              className="bg-slate-800/50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">📈</div>
              <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                Investing
              </div>
            </Link>
            
            <Link 
              href="/categories/budgeting"
              className="bg-slate-800/50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">💰</div>
              <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                Budgeting
              </div>
            </Link>
            
            <Link 
              href="/categories/debt-management"
              className="bg-slate-800/50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">💳</div>
              <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                Debt Management
              </div>
            </Link>
            
            <Link 
              href="/categories/retirement"
              className="bg-slate-800/50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">🏖️</div>
              <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                Retirement
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/categories"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              View All Categories →
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-12 text-white border border-slate-700/50 relative overflow-hidden">
          {/* Background Wave Effects */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,100 C300,50 700,150 1000,100 L1000,400 L0,400 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="15s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Join Millions of Successful Readers</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              These bestselling books have already helped millions of people build wealth and achieve financial freedom. 
              Your transformation starts with the first page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections/beginner-essentials"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Start with Basics
              </Link>
              <Link 
                href="/books"
                className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                Browse All Books
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}