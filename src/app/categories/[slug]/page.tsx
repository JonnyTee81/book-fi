import { notFound } from 'next/navigation';
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/categories" className="hover:text-green-600">Categories</Link></li>
            <li>/</li>
            <li className="text-gray-900 capitalize">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name} Books</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          
          {/* Category Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">{booksInCategory.length}</div>
              <div className="text-sm text-gray-600">Books Available</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">{avgRating}★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">{totalReviews.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
          </div>
        </div>

        {/* Featured Books */}
        {featuredBooks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured {category.name} Books</h2>
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
              <h2 className="text-2xl font-bold text-gray-900">
                All {category.name} Books
              </h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
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
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Read {category.name} Books?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {category.slug === 'investing' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Learn proven strategies to grow your wealth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Understand market psychology and timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Build a diversified investment portfolio</span>
                    </li>
                  </>
                )}
                {category.slug === 'budgeting' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Take control of your monthly expenses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Create sustainable spending habits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Find money for savings and investments</span>
                    </li>
                  </>
                )}
                {category.slug === 'debt-management' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Eliminate debt faster with proven strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Avoid common debt traps and mistakes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Build financial freedom and peace of mind</span>
                    </li>
                  </>
                )}
                {/* Add more category-specific benefits as needed */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect For</h3>
              <ul className="space-y-3">
                {category.slug === 'investing' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">New investors starting their journey</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Those looking to improve their returns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Anyone planning for retirement</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Related Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map((relatedCategory) => (
              <Link 
                key={relatedCategory.slug} 
                href={`/categories/${relatedCategory.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {relatedCategory.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{relatedCategory.description}</p>
                <div className="text-sm text-green-600 font-medium">
                  {getBooksByCategory(relatedCategory.slug).length} books →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Master {category.name}?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start with our top-rated book and begin transforming your financial future today.
          </p>
          {featuredBooks.length > 0 && (
            <Link 
              href={`/books/${featuredBooks[0].id}`}
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start with "{featuredBooks[0].title}"
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}