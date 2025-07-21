'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { allBooks, bookCategories, bookAuthors } from '@/lib/data/books';


interface SearchResult {
  type: 'book' | 'category' | 'author';
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  relevance: number;
  data: any;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'book' | 'category' | 'author'>('all');

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    
    const searchQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search books
    allBooks.forEach(book => {
      let relevance = 0;
      
      // Title match (highest relevance)
      if (book.title.toLowerCase().includes(searchQuery)) {
        relevance += book.title.toLowerCase() === searchQuery ? 100 : 50;
      }
      
      // Author match
      if (book.author.toLowerCase().includes(searchQuery)) {
        relevance += 30;
      }
      
      // Description match
      if (book.description.toLowerCase().includes(searchQuery)) {
        relevance += 10;
      }
      
      // Tags match
      book.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchQuery)) {
          relevance += 20;
        }
      });
      
      // Category match
      if (book.category.toLowerCase().includes(searchQuery)) {
        relevance += 15;
      }

      if (relevance > 0) {
        searchResults.push({
          type: 'book',
          id: book.id,
          title: book.title,
          subtitle: `by ${book.author}`,
          description: book.description,
          url: `/books/${book.id}`,
          relevance,
          data: book,
        });
      }
    });

    // Search categories
    bookCategories.forEach(category => {
      let relevance = 0;
      
      if (category.name.toLowerCase().includes(searchQuery)) {
        relevance += category.name.toLowerCase() === searchQuery ? 80 : 40;
      }
      
      if (category.description.toLowerCase().includes(searchQuery)) {
        relevance += 15;
      }

      if (relevance > 0) {
        searchResults.push({
          type: 'category',
          id: category.slug,
          title: category.name,
          description: category.description,
          url: `/categories/${category.slug}`,
          relevance,
          data: category,
        });
      }
    });

    // Search authors
    bookAuthors.forEach(author => {
      let relevance = 0;
      
      if (author.name.toLowerCase().includes(searchQuery)) {
        relevance += author.name.toLowerCase() === searchQuery ? 80 : 40;
      }
      
      if (author.bio.toLowerCase().includes(searchQuery)) {
        relevance += 15;
      }

      if (relevance > 0) {
        searchResults.push({
          type: 'author',
          id: author.id,
          title: author.name,
          description: author.bio,
          url: `/authors/${author.id}`, // Note: This would need to be implemented
          relevance,
          data: author,
        });
      }
    });

    // Sort by relevance
    searchResults.sort((a, b) => b.relevance - a.relevance);

    setResults(searchResults);
    setLoading(false);
  }, [query]);

  // Filter results
  const filteredResults = results.filter(result => 
    filter === 'all' || result.type === filter
  );

  // Group results by type for display
  const bookResults = filteredResults.filter(r => r.type === 'book');
  const categoryResults = filteredResults.filter(r => r.type === 'category');
  const authorResults = filteredResults.filter(r => r.type === 'author');

  if (!query.trim()) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🔍</div>
        <h2 className="text-2xl font-bold text-white mb-4">Search BookFi</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">
          Find the perfect personal finance books to transform your financial future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Link href="/categories/investing" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
              Investing
            </h3>
          </Link>
          <Link href="/categories/budgeting" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
              Budgeting
            </h3>
          </Link>
          <Link href="/collections/beginner-essentials" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
              Beginner Books
            </h3>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          Search Results for "{query}"
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-slate-300">
            {loading ? 'Searching...' : `Found ${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''}`}
          </p>
          
          {/* Filter buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              All ({results.length})
            </button>
            <button
              onClick={() => setFilter('book')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'book'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              Books ({bookResults.length})
            </button>
            <button
              onClick={() => setFilter('category')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'category'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              Categories ({categoryResults.length})
            </button>
            <button
              onClick={() => setFilter('author')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'author'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              Authors ({authorResults.length})
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-6 animate-pulse border border-slate-700/50">
              <div className="h-6 bg-slate-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-slate-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="space-y-12">
          {/* Books Section */}
          {(filter === 'all' || filter === 'book') && bookResults.length > 0 && (
            <section>
              {filter === 'all' && <h2 className="text-2xl font-bold text-white mb-6">Books</h2>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {bookResults.map((result) => (
                  <BookCard key={result.id} book={result.data} />
                ))}
              </div>
            </section>
          )}

          {/* Categories Section */}
          {(filter === 'all' || filter === 'category') && categoryResults.length > 0 && (
            <section>
              {filter === 'all' && <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 backdrop-blur-sm group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-slate-300 text-sm">{result.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Authors Section */}
          {(filter === 'all' || filter === 'author') && authorResults.length > 0 && (
            <section>
              {filter === 'all' && <h2 className="text-2xl font-bold text-white mb-6">Authors</h2>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {authorResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{result.description}</p>
                    <div className="text-sm text-slate-400">
                      Books by this author: {result.data.books?.length || 0}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">📭</div>
          <h2 className="text-2xl font-bold text-white mb-4">No results found</h2>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            We couldn't find anything matching "{query}". Try searching for different keywords or browse our categories below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Link href="/books" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Browse All Books
              </h3>
            </Link>
            <Link href="/categories" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
              <div className="text-2xl mb-2">📂</div>
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                View Categories
              </h3>
            </Link>
            <Link href="/collections" className="group p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700/50">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Explore Collections
              </h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-300">Loading search results...</p>
          </div>
        }>
          <SearchResults />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}