'use client';

import { useState } from 'react';
import { Book } from '@/types';

interface FilterSortProps {
  books: Book[];
  onFilteredBooksChange: (books: Book[]) => void;
}

export interface FilterOptions {
  category: string;
  targetAudience: string;
  priceRange: string;
  rating: string;
  sortBy: string;
}

export default function FilterSort({ books, onFilteredBooksChange }: FilterSortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    targetAudience: 'all',
    priceRange: 'all',
    rating: 'all',
    sortBy: 'rating',
  });

  // Get unique categories and audiences from books
  const categories = Array.from(new Set(books.map(book => book.category)));
  const targetAudiences = Array.from(new Set(books.map(book => book.targetAudience)));

  // Apply filters and sorting
  const applyFiltersAndSort = (newFilters: FilterOptions) => {
    let filteredBooks = [...books];

    // Apply filters
    if (newFilters.category !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.category === newFilters.category);
    }

    if (newFilters.targetAudience !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.targetAudience === newFilters.targetAudience);
    }

    if (newFilters.priceRange !== 'all') {
      filteredBooks = filteredBooks.filter(book => {
        switch (newFilters.priceRange) {
          case 'under-10': return book.price < 10;
          case '10-20': return book.price >= 10 && book.price < 20;
          case '20-30': return book.price >= 20 && book.price < 30;
          case 'over-30': return book.price >= 30;
          default: return true;
        }
      });
    }

    if (newFilters.rating !== 'all') {
      const minRating = parseFloat(newFilters.rating);
      filteredBooks = filteredBooks.filter(book => book.rating >= minRating);
    }

    // Apply sorting
    switch (newFilters.sortBy) {
      case 'rating':
        filteredBooks.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filteredBooks.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredBooks.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        filteredBooks.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'title':
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'newest':
        filteredBooks.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      default:
        break;
    }

    onFilteredBooksChange(filteredBooks);
  };

  // Handle filter change
  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFiltersAndSort(newFilters);
  };

  // Reset filters
  const resetFilters = () => {
    const defaultFilters: FilterOptions = {
      category: 'all',
      targetAudience: 'all',
      priceRange: 'all',
      rating: 'all',
      sortBy: 'rating',
    };
    setFilters(defaultFilters);
    applyFiltersAndSort(defaultFilters);
  };

  // Count active filters
  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => 
    key !== 'sortBy' && value !== 'all'
  ).length;

  return (
    <div className="mb-8">
      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-colors backdrop-blur-sm"
          >
            <span className="text-lg">⚙️</span>
            <span>Filters & Sort</span>
            {activeFiltersCount > 0 && (
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          {/* Desktop Sort */}
          <div className="hidden md:flex items-center space-x-2">
            <label className="text-slate-300 text-sm font-medium">Sort by:</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm"
            >
              <option value="rating">Highest Rated</option>
              <option value="popularity">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title">Title A-Z</option>
              <option value="author">Author A-Z</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Reset Filters */}
        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden md:block'} bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </option>
              ))}
            </select>
          </div>

          {/* Target Audience Filter */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Level</label>
            <select
              value={filters.targetAudience}
              onChange={(e) => handleFilterChange('targetAudience', e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Levels</option>
              {targetAudiences.map(audience => (
                <option key={audience} value={audience}>
                  {audience.charAt(0).toUpperCase() + audience.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Any Price</option>
              <option value="under-10">Under $10</option>
              <option value="10-20">$10 - $20</option>
              <option value="20-30">$20 - $30</option>
              <option value="over-30">Over $30</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Minimum Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Any Rating</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.0">4.0+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
              <option value="3.0">3.0+ Stars</option>
            </select>
          </div>

          {/* Mobile Sort */}
          <div className="md:hidden">
            <label className="block text-slate-300 text-sm font-medium mb-2">Sort by</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="rating">Highest Rated</option>
              <option value="popularity">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title">Title A-Z</option>
              <option value="author">Author A-Z</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-slate-400">Active filters:</span>
              {Object.entries(filters).map(([key, value]) => {
                if (key === 'sortBy' || value === 'all') return null;
                
                let displayValue = value;
                if (key === 'targetAudience') displayValue = value.charAt(0).toUpperCase() + value.slice(1);
                if (key === 'category') displayValue = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                if (key === 'priceRange') {
                  const priceLabels: { [key: string]: string } = {
                    'under-10': 'Under $10',
                    '10-20': '$10-$20',
                    '20-30': '$20-$30',
                    'over-30': 'Over $30'
                  };
                  displayValue = priceLabels[value] || value;
                }
                if (key === 'rating') displayValue = `${value}+ Stars`;

                return (
                  <span
                    key={key}
                    className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30"
                  >
                    {displayValue}
                    <button
                      onClick={() => handleFilterChange(key as keyof FilterOptions, 'all')}
                      className="ml-2 hover:text-emerald-300 transition-colors"
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}