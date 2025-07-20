import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { allBooks, bookCategories } from '@/lib/data/books';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Personal Finance Books</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our curated collection of the best personal finance books to transform your relationship with money and build lasting wealth.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{allBooks.length}</div>
            <div className="text-slate-300">Expert-Reviewed Books</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">{bookCategories.length}</div>
            <div className="text-slate-300">Financial Categories</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">4.6</div>
            <div className="text-slate-300">Average Rating</div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-sm font-medium shadow-lg">
              All Books
            </button>
            {bookCategories.map((category) => (
              <button 
                key={category.slug}
                className="px-4 py-2 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-full text-sm font-medium border border-slate-600 transition-all duration-200 backdrop-blur-sm"
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
        <div className="mt-16 text-center bg-slate-800/50 rounded-2xl p-12 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Financial Journey Today</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Every millionaire started with a single page. Choose a book that resonates with your goals and begin building the financial future you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
              View Beginner Books
            </button>
            <button className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm">
              Browse Collections
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}