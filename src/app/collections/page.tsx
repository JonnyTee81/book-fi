import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { bookCollections, getFeaturedCollections, getBooksByCollection } from '@/lib/data/books';

export default function CollectionsPage() {
  const featuredCollections = getFeaturedCollections();
  const allCollections = bookCollections;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curated Book Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expertly curated collections of personal finance books designed to guide your learning journey 
            and help you achieve specific financial goals.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">{allCollections.length}</div>
            <div className="text-gray-600">Expert Collections</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{featuredCollections.length}</div>
            <div className="text-gray-600">Featured Sets</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {allCollections.reduce((total, collection) => total + collection.bookIds.length, 0)}
            </div>
            <div className="text-gray-600">Total Books</div>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => {
              const booksInCollection = getBooksByCollection(collection.id);
              const avgRating = booksInCollection.length > 0 
                ? (booksInCollection.reduce((sum, book) => sum + book.rating, 0) / booksInCollection.length).toFixed(1)
                : '0';

              return (
                <Link 
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-sm text-gray-500">{collection.bookIds.length} books</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {collection.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  {/* Collection Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{avgRating}★</div>
                      <div className="text-sm text-gray-500">Avg Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">
                        ${booksInCollection.length > 0 
                          ? (booksInCollection.reduce((sum, book) => sum + book.price, 0) / booksInCollection.length).toFixed(0)
                          : '0'}
                      </div>
                      <div className="text-sm text-gray-500">Avg Price</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-green-600 font-medium text-sm group-hover:underline">
                    Explore Collection →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* All Collections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allCollections.map((collection) => {
              const booksInCollection = getBooksByCollection(collection.id);
              const avgRating = booksInCollection.length > 0 
                ? (booksInCollection.reduce((sum, book) => sum + book.rating, 0) / booksInCollection.length).toFixed(1)
                : '0';

              return (
                <Link 
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">
                        {collection.id.includes('beginner') && '🌱'}
                        {collection.id.includes('investing') && '📈'}
                        {collection.id.includes('mindset') && '🧠'}
                        {collection.id.includes('debt') && '💳'}
                        {collection.id.includes('fire') && '🔥'}
                        {collection.id.includes('entrepreneur') && '💼'}
                        {collection.id.includes('behavioral') && '🔬'}
                        {collection.id.includes('wealth') && '💰'}
                        {collection.id.includes('young') && '🎓'}
                        {!collection.id.includes('beginner') && 
                         !collection.id.includes('investing') && 
                         !collection.id.includes('mindset') && 
                         !collection.id.includes('debt') && 
                         !collection.id.includes('fire') && 
                         !collection.id.includes('entrepreneur') && 
                         !collection.id.includes('behavioral') && 
                         !collection.id.includes('wealth') && 
                         !collection.id.includes('young') && '📚'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {collection.title}
                      </h3>
                      {collection.featured && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500">{collection.bookIds.length} books</span>
                        <span className="text-gray-500">★ {avgRating}</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Collection Benefits */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Curated Collections?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert-curated collections save you time and ensure you're reading the right books in the right order.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Goal-Focused</h3>
              <p className="text-gray-600 text-sm">
                Each collection is designed around specific financial goals and learning objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time-Saving</h3>
              <p className="text-gray-600 text-sm">
                Skip the research phase and jump straight into high-quality, vetted content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Progressive Learning</h3>
              <p className="text-gray-600 text-sm">
                Books are ordered to build upon each other for maximum learning impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Financial Education Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Choose a collection that matches your goals and begin building the financial knowledge that will transform your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/collections/beginner-essentials"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start with Basics
            </Link>
            <Link 
              href="/collections/investing-classics"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn Investing
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}