export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  coverImage: string;
  affiliateUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: BookCategory;
  publishedDate: string;
  isbn: string;
  pageCount: number;
  amazonRank?: number;
  keyTakeaways: string[];
  targetAudience: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  summary: string;
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
  books: string[];
  expertise: string[];
  website?: string;
  netWorth: string;
  keyPhilosophy: string;
}

export type BookCategory = 
  | 'investing'
  | 'budgeting'
  | 'real-estate'
  | 'entrepreneurship'
  | 'retirement'
  | 'debt-management'
  | 'financial-planning';

export interface AffiliateLink {
  id: string;
  bookId: string;
  provider: 'amazon' | 'barnes-noble' | 'audible' | 'apple-books';
  url: string;
  trackingId: string;
  price?: number;
}

export interface BookCollection {
  id: string;
  title: string;
  description: string;
  bookIds: string[];
  category?: BookCategory;
  featured: boolean;
}

export interface BookReview {
  id: string;
  bookId: string;
  title: string;
  content: string;
  rating: number;
  author: string;
  datePublished: string;
}