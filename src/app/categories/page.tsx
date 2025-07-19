import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { bookCategories, getBooksByCategory } from '@/lib/data/books';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of personal finance books organized by topic. 
            Find exactly what you need to advance your financial education.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bookCategories.map((category) => {
            const booksInCategory = getBooksByCategory(category.slug);
            const avgRating = booksInCategory.length > 0 
              ? (booksInCategory.reduce((sum, book) => sum + book.rating, 0) / booksInCategory.length).toFixed(1)
              : '0';

            return (
              <Link 
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  {/* Category Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">
                      {category.slug === 'investing' && '📈'}
                      {category.slug === 'budgeting' && '💰'}
                      {category.slug === 'real-estate' && '🏠'}
                      {category.slug === 'entrepreneurship' && '💼'}
                      {category.slug === 'retirement' && '🏖️'}
                      {category.slug === 'debt-management' && '💳'}
                      {category.slug === 'financial-planning' && '📊'}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-lg font-bold text-green-600">{booksInCategory.length}</div>
                      <div className="text-sm text-gray-500">Books</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{avgRating}★</div>
                      <div className="text-sm text-gray-500">Avg Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-green-600 font-medium text-sm group-hover:underline">
                    Explore {category.name} →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Popular Categories Highlight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Most Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top 3 categories by book count */}
            {bookCategories
              .map(cat => ({
                ...cat,
                bookCount: getBooksByCategory(cat.slug).length
              }))
              .sort((a, b) => b.bookCount - a.bookCount)
              .slice(0, 3)
              .map((category) => (
                <div key={category.slug} className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-green-100 mb-4 text-sm">{category.description}</p>
                  <div className="text-2xl font-bold mb-2">{category.bookCount} Books</div>
                  <Link 
                    href={`/categories/${category.slug}`}
                    className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our recommended learning path to build a solid foundation in personal finance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start with Basics</h3>
              <p className="text-gray-600 text-sm mb-4">Build financial literacy with fundamental concepts.</p>
              <Link href="/categories/financial-planning" className="text-green-600 hover:underline text-sm font-medium">
                Financial Planning →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Master Money Management</h3>
              <p className="text-gray-600 text-sm mb-4">Learn budgeting and debt elimination strategies.</p>
              <Link href="/categories/budgeting" className="text-blue-600 hover:underline text-sm font-medium">
                Budgeting →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grow Your Wealth</h3>
              <p className="text-gray-600 text-sm mb-4">Discover investing strategies to build long-term wealth.</p>
              <Link href="/categories/investing" className="text-purple-600 hover:underline text-sm font-medium">
                Investing →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}