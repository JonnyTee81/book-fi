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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Master Personal Finance &<br />
                  Build Lasting Wealth<br />
                  with Expert-Recommended Books.
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover the best personal finance books curated by experts. From budgeting basics to advanced investing strategies, find the perfect books to transform your financial future and achieve your money goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/collections/beginner-essentials"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    Start with Basics
                  </Link>
                  <Link 
                    href="/books"
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                  >
                    Browse All Books
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
                  {/* Laptop illustration */}
                  <div className="relative mx-auto w-80 h-56 bg-gray-800 rounded-t-lg">
                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500 mb-2">BookFi</div>
                        <div className="text-sm text-gray-600">Financial Education Platform</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-4 bg-gray-700 rounded-b-lg mx-auto"></div>
                  
                  {/* Floating icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">📊</span>
                  </div>
                  <div className="absolute top-12 left-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">💰</span>
                  </div>
                  <div className="absolute bottom-12 right-8 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📈</span>
                  </div>
                  <div className="absolute bottom-4 left-8 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600">💡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{allBooks.length}</div>
                <div className="text-gray-600">Expert-Reviewed Books</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{featuredCollections.length + 7}</div>
                <div className="text-gray-600">Curated Collections</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">4.6</div>
                <div className="text-gray-600">Average Book Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              <div className="text-center text-gray-400 font-semibold">Amazon</div>
              <div className="text-center text-gray-400 font-semibold">Audible</div>
              <div className="text-center text-gray-400 font-semibold">Kindle</div>
              <div className="text-center text-gray-400 font-semibold">Goodreads</div>
              <div className="text-center text-gray-400 font-semibold">Barnes & Noble</div>
              <div className="text-center text-gray-400 font-semibold">Apple Books</div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Book Collections</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
                  <div className={`rounded-2xl p-8 text-white relative overflow-hidden transition-transform group-hover:scale-105 ${
                    index === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' :
                    index === 1 ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                    'bg-gradient-to-br from-purple-600 to-purple-700'
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
                className="text-green-600 hover:text-green-700 font-medium"
              >
                View All Collections →
              </Link>
            </div>
          </div>
        </section>

        {/* Bestselling Books */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Bestsellers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View All Books
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Financial Topic</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find exactly what you need to advance your financial education. Our books are carefully categorized to help you focus on specific areas of personal finance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              <Link href="/categories/investing" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Investing</div>
              </Link>
              
              <Link href="/categories/budgeting" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Budgeting</div>
              </Link>
              
              <Link href="/categories/debt-management" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">Debt Management</div>
              </Link>
              
              <Link href="/categories/retirement" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🏖️</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Retirement</div>
              </Link>
              
              <Link href="/categories/entrepreneurship" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Business</div>
              </Link>
              
              <Link href="/categories/real-estate" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">🏠</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">Real Estate</div>
              </Link>
              
              <Link href="/categories/financial-planning" className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Planning</div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/categories"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                View All Categories →
              </Link>
            </div>
          </div>
        </section>

        {/* Top Rated Books */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Highest Rated Books</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="text-green-600 hover:text-green-700 font-medium"
              >
                View All Top Rated Books →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Financial Transformation Today
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Join thousands of readers who have transformed their financial lives with the right books. 
              Every expert started with page one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections/beginner-essentials"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start with Beginner Books
              </Link>
              <Link 
                href="/categories"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
