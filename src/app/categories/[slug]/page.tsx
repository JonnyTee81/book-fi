import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { getBooksByCategory, bookCategories, allBooks } from '@/lib/data/books';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = bookCategories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found | BookFi',
      description: 'The requested category could not be found.',
    };
  }

  const booksInCategory = getBooksByCategory(params.slug);
  const categoryDescription = `${category.description} Browse ${booksInCategory.length} expert-reviewed books.`;

  return {
    title: `${category.name} Books - Personal Finance Education | BookFi`,
    description: categoryDescription,
    keywords: `${category.name}, personal finance books, ${category.slug.replace('-', ' ')}, financial education, money management`,
    openGraph: {
      title: `Best ${category.name} Books for Personal Finance`,
      description: categoryDescription,
      type: 'website',
      url: `https://book-fi.vercel.app/categories/${category.slug}`,
      images: [
        {
          url: '/images/og-category.jpg',
          width: 1200,
          height: 630,
          alt: `${category.name} Books Collection`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Books - Personal Finance Education`,
      description: categoryDescription,
      images: ['/images/og-category.jpg'],
    },
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = bookCategories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const booksInCategory = getBooksByCategory(params.slug);
  const featuredBooks = booksInCategory.slice(0, 3);
  const otherBooks = booksInCategory.slice(3);
  
  // Get related categories (categories with similar books)
  const relatedCategories = bookCategories
    .filter(cat => cat.slug !== params.slug)
    .slice(0, 3);

  // Category-specific stats
  const avgRating = booksInCategory.length > 0 
    ? (booksInCategory.reduce((sum, book) => sum + book.rating, 0) / booksInCategory.length).toFixed(1)
    : '0';
  
  const totalReviews = booksInCategory.reduce((sum, book) => sum + book.reviewCount, 0);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/categories" className="hover:text-emerald-400 transition-colors">Categories</Link></li>
            <li>/</li>
            <li className="text-white capitalize">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{category.name} Books</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          
          {/* Category Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{booksInCategory.length}</div>
              <div className="text-sm text-slate-300">Books Available</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400 mb-1">{avgRating}★</div>
              <div className="text-sm text-slate-300">Average Rating</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400 mb-1">{totalReviews.toLocaleString()}</div>
              <div className="text-sm text-slate-300">Total Reviews</div>
            </div>
          </div>
        </div>

        {/* Featured Books */}
        {featuredBooks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured {category.name} Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* All Books in Category */}
        {booksInCategory.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                All {category.name} Books
              </h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-slate-600 bg-slate-800/50 text-slate-300 rounded-lg text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Sort by Rating</option>
                  <option>Sort by Price</option>
                  <option>Sort by Popularity</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {booksInCategory.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Category-Specific Recommendations */}
        <section className="mb-16 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Why Read {category.name} Books?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {category.slug === 'investing' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Learn proven strategies to grow your wealth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Understand market psychology and timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Build a diversified investment portfolio</span>
                    </li>
                  </>
                )}
                {category.slug === 'budgeting' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Take control of your monthly expenses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Create sustainable spending habits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Find money for savings and investments</span>
                    </li>
                  </>
                )}
                {category.slug === 'debt-management' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Eliminate debt faster with proven strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Avoid common debt traps and mistakes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Build financial freedom and peace of mind</span>
                    </li>
                  </>
                )}
                {/* Add more category-specific benefits as needed */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Perfect For</h3>
              <ul className="space-y-3">
                {category.slug === 'investing' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">New investors starting their journey</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Those looking to improve their returns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Anyone planning for retirement</span>
                    </li>
                  </>
                )}
                {/* Add more audience-specific content */}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map((relatedCategory) => (
              <Link 
                key={relatedCategory.slug} 
                href={`/categories/${relatedCategory.slug}`}
                className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-700/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {relatedCategory.name}
                </h3>
                <p className="text-slate-300 text-sm mb-4">{relatedCategory.description}</p>
                <div className="text-sm text-emerald-400 font-medium">
                  {getBooksByCategory(relatedCategory.slug).length} books →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-12 text-white border border-slate-700/50 relative overflow-hidden">
          {/* Background Wave Effects */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1"/>
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path d="M0,100 C300,50 700,150 1000,100 L1000,400 L0,400 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="15s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to Master {category.name}?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start with our top-rated book and begin transforming your financial future today.
            </p>
            {featuredBooks.length > 0 && (
              <Link 
                href={`/books/${featuredBooks[0].id}`}
                className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Start with "{featuredBooks[0].title}"
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}