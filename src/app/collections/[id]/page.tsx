import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { getBooksByCollection, bookCollections, getFeaturedCollections } from '@/lib/data/books';

interface CollectionPageProps {
  params: {
    id: string;
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = bookCollections.find(col => col.id === params.id);
  
  if (!collection) {
    notFound();
  }

  const booksInCollection = getBooksByCollection(params.id);
  const otherCollections = getFeaturedCollections()
    .filter(col => col.id !== params.id)
    .slice(0, 3);

  // Collection stats
  const avgRating = booksInCollection.length > 0 
    ? (booksInCollection.reduce((sum, book) => sum + book.rating, 0) / booksInCollection.length).toFixed(1)
    : '0';
  
  const totalReviews = booksInCollection.reduce((sum, book) => sum + book.reviewCount, 0);
  const avgPrice = booksInCollection.length > 0 
    ? (booksInCollection.reduce((sum, book) => sum + book.price, 0) / booksInCollection.length).toFixed(2)
    : '0';

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/collections" className="hover:text-emerald-400 transition-colors">Collections</Link></li>
            <li>/</li>
            <li className="text-white">{collection.title}</li>
          </ol>
        </nav>

        {/* Collection Header */}
        <div className="text-center mb-12">
          {collection.featured && (
            <div className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Featured Collection
            </div>
          )}
          <h1 className="text-4xl font-bold text-white mb-4">{collection.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {collection.description}
          </p>
          
          {/* Collection Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{booksInCollection.length}</div>
              <div className="text-sm text-slate-300">Books</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400 mb-1">{avgRating}★</div>
              <div className="text-sm text-slate-300">Avg Rating</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400 mb-1">{totalReviews.toLocaleString()}</div>
              <div className="text-sm text-slate-300">Reviews</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-400 mb-1">${avgPrice}</div>
              <div className="text-sm text-slate-300">Avg Price</div>
            </div>
          </div>
        </div>

        {/* Collection Value Proposition */}
        <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Why This Collection?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {collection.id === 'beginner-essentials' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Fundamental financial concepts and terminology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">How to create and stick to a budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Basic investing principles and strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Debt elimination and emergency fund building</span>
                    </li>
                  </>
                )}
                {collection.id === 'investing-classics' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Timeless investment principles from legendary investors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Value investing and fundamental analysis techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">How to build a simple, effective portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Market psychology and behavioral investing</span>
                    </li>
                  </>
                )}
                {collection.id === 'fire-movement' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Strategies to achieve financial independence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">How to calculate your FI number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Extreme saving and frugal living techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Early retirement planning and execution</span>
                    </li>
                  </>
                )}
                {/* Add more collection-specific content */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Perfect For</h3>
              <ul className="space-y-3">
                {collection.id === 'beginner-essentials' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Complete beginners to personal finance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Recent graduates starting their careers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-slate-300">Anyone wanting to build financial literacy</span>
                    </li>
                  </>
                )}
                {/* Add more audience-specific content */}
              </ul>
            </div>
          </div>
        </section>

        {/* Books in Collection */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Books in This Collection</h2>
            <div className="text-slate-300">
              {booksInCollection.length} book{booksInCollection.length !== 1 ? 's' : ''}
            </div>
          </div>
          
          {booksInCollection.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {booksInCollection.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">No books found in this collection.</p>
            </div>
          )}
        </section>

        {/* Collection Bundle CTA */}
        <section className="mb-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center border border-slate-700/50 relative overflow-hidden">
          {/* Background Wave Effects */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,100 C300,50 700,150 1000,100 L1000,400 L0,400 Z" fill="url(#wave1)">
                <animateTransform attributeName="transform" type="translate" values="0,0;30,0;0,0" dur="15s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4">Get the Complete Collection</h2>
            <p className="text-xl text-slate-300 mb-6">
              Save time and money by getting all {booksInCollection.length} books in this curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-slate-600/50">
                <div className="text-sm text-slate-300">Total Value</div>
                <div className="text-xl font-bold">
                  ${booksInCollection.reduce((sum, book) => sum + book.price, 0).toFixed(2)}
                </div>
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
                View All Books
              </button>
            </div>
          </div>
        </section>

        {/* Reading Order Suggestion */}
        {booksInCollection.length > 1 && (
          <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Suggested Reading Order</h2>
            <div className="space-y-4">
              {booksInCollection.map((book, index) => (
                <div key={book.id} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{book.title}</h3>
                    <p className="text-slate-300 text-sm">by {book.author}</p>
                  </div>
                  <div className="text-sm text-slate-400">
                    {book.targetAudience}
                  </div>
                  <Link 
                    href={`/books/${book.id}`}
                    className="text-emerald-400 hover:text-emerald-300 hover:underline text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Collections */}
        {otherCollections.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8">Other Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCollections.map((otherCollection) => (
                <Link 
                  key={otherCollection.id}
                  href={`/collections/${otherCollection.id}`}
                  className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-700/50 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {otherCollection.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{otherCollection.description}</p>
                  <div className="text-sm text-emerald-400 font-medium">
                    {otherCollection.bookIds.length} books →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}