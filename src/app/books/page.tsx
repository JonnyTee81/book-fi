import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { allBooks, bookCategories } from '@/lib/data/books';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Finance Books</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of the best personal finance books to transform your relationship with money and build lasting wealth.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">{allBooks.length}</div>
            <div className="text-gray-600">Expert-Reviewed Books</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{bookCategories.length}</div>
            <div className="text-gray-600">Financial Categories</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.6</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
              All Books
            </button>
            {bookCategories.map((category) => (
              <button 
                key={category.slug}
                className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full text-sm font-medium border transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Financial Journey Today</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every millionaire started with a single page. Choose a book that resonates with your goals and begin building the financial future you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Beginner Books
            </button>
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Browse Collections
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}