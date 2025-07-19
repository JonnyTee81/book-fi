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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/collections" className="hover:text-green-600">Collections</Link></li>
            <li>/</li>
            <li className="text-gray-900">{collection.title}</li>
          </ol>
        </nav>

        {/* Collection Header */}
        <div className="text-center mb-12">
          {collection.featured && (
            <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Featured Collection
            </div>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{collection.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {collection.description}
          </p>
          
          {/* Collection Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">{booksInCollection.length}</div>
              <div className="text-sm text-gray-600">Books</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">{avgRating}★</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">{totalReviews.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-1">${avgPrice}</div>
              <div className="text-sm text-gray-600">Avg Price</div>
            </div>
          </div>
        </div>

        {/* Collection Value Proposition */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Collection?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {collection.id === 'beginner-essentials' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Fundamental financial concepts and terminology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">How to create and stick to a budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Basic investing principles and strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Debt elimination and emergency fund building</span>
                    </li>
                  </>
                )}
                {collection.id === 'investing-classics' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Timeless investment principles from legendary investors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Value investing and fundamental analysis techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">How to build a simple, effective portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Market psychology and behavioral investing</span>
                    </li>
                  </>
                )}
                {collection.id === 'fire-movement' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Strategies to achieve financial independence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">How to calculate your FI number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Extreme saving and frugal living techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Early retirement planning and execution</span>
                    </li>
                  </>
                )}
                {/* Add more collection-specific content */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect For</h3>
              <ul className="space-y-3">
                {collection.id === 'beginner-essentials' && (
                  <>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Complete beginners to personal finance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Recent graduates starting their careers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Anyone wanting to build financial literacy</span>
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
            <h2 className="text-2xl font-bold text-gray-900">Books in This Collection</h2>
            <div className="text-gray-600">
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
              <p className="text-gray-500">No books found in this collection.</p>
            </div>
          )}
        </section>

        {/* Collection Bundle CTA */}
        <section className="mb-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get the Complete Collection</h2>
          <p className="text-xl opacity-90 mb-6">
            Save time and money by getting all {booksInCollection.length} books in this curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-gray-900 px-6 py-3 rounded-lg">
              <div className="text-sm text-gray-600">Total Value</div>
              <div className="text-xl font-bold">
                ${booksInCollection.reduce((sum, book) => sum + book.price, 0).toFixed(2)}
              </div>
            </div>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View All Books
            </button>
          </div>
        </section>

        {/* Reading Order Suggestion */}
        {booksInCollection.length > 1 && (
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Suggested Reading Order</h2>
            <div className="space-y-4">
              {booksInCollection.map((book, index) => (
                <div key={book.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{book.title}</h3>
                    <p className="text-gray-600 text-sm">by {book.author}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {book.targetAudience}
                  </div>
                  <Link 
                    href={`/books/${book.id}`}
                    className="text-green-600 hover:underline text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCollections.map((otherCollection) => (
                <Link 
                  key={otherCollection.id}
                  href={`/collections/${otherCollection.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {otherCollection.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{otherCollection.description}</p>
                  <div className="text-sm text-green-600 font-medium">
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