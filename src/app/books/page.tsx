'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import FilterSort from '@/components/book/FilterSort';
import { allBooks, bookCategories } from '@/lib/data/books';
import { Book } from '@/types';


export default function BooksPage() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(allBooks);
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

        {/* Filter and Sort */}
        <FilterSort 
          books={allBooks} 
          onFilteredBooksChange={setFilteredBooks}
        />

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-300">
            Showing {filteredBooks.length} of {allBooks.length} books
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">No books found</h3>
            <p className="text-slate-300 mb-8">
              Try adjusting your filters or search criteria to find more books.
            </p>
            <button
              onClick={() => setFilteredBooks(allBooks)}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Show All Books
            </button>
          </div>
        )}

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