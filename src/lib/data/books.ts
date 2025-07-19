import { Book, BookCollection, Author } from '@/types';
import comprehensiveBooks from './comprehensive-books.json';
import collections from './collections.json';
import authors from './authors.json';

export const allBooks: Book[] = comprehensiveBooks as Book[];

export const featuredBooks: Book[] = allBooks.filter(book => 
  ['1', '2', '3', '4', '5'].includes(book.id)
);

export const bookCollections: BookCollection[] = collections as BookCollection[];

export const bookAuthors: Author[] = authors as Author[];

export const bookCategories = [
  { slug: 'investing', name: 'Investing', description: 'Learn to grow your wealth through smart investments' },
  { slug: 'budgeting', name: 'Budgeting', description: 'Master your money with effective budgeting strategies' },
  { slug: 'real-estate', name: 'Real Estate', description: 'Build wealth through property investment' },
  { slug: 'entrepreneurship', name: 'Entrepreneurship', description: 'Start and grow your own business' },
  { slug: 'retirement', name: 'Retirement Planning', description: 'Secure your financial future' },
  { slug: 'debt-management', name: 'Debt Management', description: 'Strategies to eliminate debt and stay debt-free' },
  { slug: 'financial-planning', name: 'Financial Planning', description: 'Comprehensive guides to financial success' }
] as const;

// Helper functions
export const getBooksByCategory = (category: string): Book[] => {
  return allBooks.filter(book => book.category === category);
};

export const getBooksByCollection = (collectionId: string): Book[] => {
  const collection = bookCollections.find(c => c.id === collectionId);
  if (!collection) return [];
  return allBooks.filter(book => collection.bookIds.includes(book.id));
};

export const getAuthorById = (authorId: string): Author | undefined => {
  return bookAuthors.find(author => author.id === authorId);
};

export const getBookById = (bookId: string): Book | undefined => {
  return allBooks.find(book => book.id === bookId);
};

export const getFeaturedCollections = (): BookCollection[] => {
  return bookCollections.filter(collection => collection.featured);
};

export const getTopRatedBooks = (limit: number = 5): Book[] => {
  return allBooks
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getBestsellerBooks = (): Book[] => {
  return allBooks
    .filter(book => book.amazonRank)
    .sort((a, b) => (a.amazonRank || 999) - (b.amazonRank || 999));
};