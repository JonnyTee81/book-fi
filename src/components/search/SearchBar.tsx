'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { allBooks, bookCategories, bookAuthors } from '@/lib/data/books';

interface SearchResult {
  type: 'book' | 'category' | 'author';
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  image?: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search books
    allBooks.forEach(book => {
      const titleMatch = book.title.toLowerCase().includes(query);
      const authorMatch = book.author.toLowerCase().includes(query);
      const descriptionMatch = book.description.toLowerCase().includes(query);
      const tagsMatch = book.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (titleMatch || authorMatch || descriptionMatch || tagsMatch) {
        searchResults.push({
          type: 'book',
          id: book.id,
          title: book.title,
          subtitle: `by ${book.author}`,
          description: book.description.slice(0, 100) + '...',
          url: `/books/${book.id}`,
          image: book.coverImage,
        });
      }
    });

    // Search categories
    bookCategories.forEach(category => {
      const nameMatch = category.name.toLowerCase().includes(query);
      const descriptionMatch = category.description.toLowerCase().includes(query);
      
      if (nameMatch || descriptionMatch) {
        searchResults.push({
          type: 'category',
          id: category.slug,
          title: category.name,
          description: category.description,
          url: `/categories/${category.slug}`,
        });
      }
    });

    // Search authors
    bookAuthors.forEach(author => {
      const nameMatch = author.name.toLowerCase().includes(query);
      const bioMatch = author.bio.toLowerCase().includes(query);
      
      if (nameMatch || bioMatch) {
        searchResults.push({
          type: 'author',
          id: author.id,
          title: author.name,
          description: author.bio.slice(0, 100) + '...',
          url: `/authors/${author.id}`, // Note: This would need to be implemented
        });
      }
    });

    // Sort results by relevance (books first, then exact matches)
    searchResults.sort((a, b) => {
      if (a.type === 'book' && b.type !== 'book') return -1;
      if (a.type !== 'book' && b.type === 'book') return 1;
      
      const aExact = a.title.toLowerCase().includes(query);
      const bExact = b.title.toLowerCase().includes(query);
      
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      
      return 0;
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
    setSelectedIndex(-1);
    setIsOpen(true);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          router.push(results[selectedIndex].url);
          setIsOpen(false);
          setQuery('');
        } else if (query.trim()) {
          // Go to search results page
          router.push(`/search?q=${encodeURIComponent(query)}`);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get result type icon
  const getResultIcon = (type: string) => {
    switch (type) {
      case 'book': return '📚';
      case 'category': return '📂';
      case 'author': return '👤';
      default: return '🔍';
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder="Search books, authors, topics..."
          className="w-full px-4 py-2 pl-10 pr-4 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 backdrop-blur-sm"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-slate-400 text-lg">🔍</span>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <>
              {results.map((result, index) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={result.url}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className={`block px-4 py-3 hover:bg-slate-700/50 transition-colors border-b border-slate-700/30 last:border-b-0 ${
                    selectedIndex === index ? 'bg-slate-700/50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {result.image ? (
                      <div className="w-12 h-16 flex-shrink-0">
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 flex-shrink-0 bg-slate-700 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{getResultIcon(result.type)}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white font-medium truncate">{result.title}</h4>
                        <span className="text-xs px-2 py-1 bg-slate-600 text-slate-300 rounded-full capitalize">
                          {result.type}
                        </span>
                      </div>
                      {result.subtitle && (
                        <p className="text-slate-400 text-sm truncate">{result.subtitle}</p>
                      )}
                      <p className="text-slate-400 text-sm line-clamp-2">{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* View All Results Link */}
              {query.trim() && (
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="block px-4 py-3 text-center text-emerald-400 hover:text-emerald-300 hover:bg-slate-700/30 transition-colors border-t border-slate-700/30"
                >
                  View all results for "{query}" →
                </Link>
              )}
            </>
          ) : query.trim() ? (
            <div className="px-4 py-6 text-center">
              <div className="text-slate-400 mb-2">No results found for "{query}"</div>
              <div className="text-sm text-slate-500">
                Try searching for book titles, authors, or financial topics
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}