import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCard from '@/components/book/BookCard';
import { getBookById, allBooks, getAuthorById } from '@/lib/data/books';
import { bookAuthors } from '@/lib/data/books';

interface BookPageProps {
  params: {
    id: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.id);
  
  if (!book) {
    notFound();
  }

  const author = bookAuthors.find(a => a.books.includes(book.id));
  const relatedBooks = allBooks
    .filter(b => b.id !== book.id && (b.category === book.category || b.tags.some(tag => book.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/books" className="hover:text-emerald-400 transition-colors">Books</Link></li>
            <li>/</li>
            <li className="text-white">{book.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Book Details */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Book Cover */}
                <div className="relative">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                    {book.amazonRank && book.amazonRank <= 10 && (
                      <div className="absolute -top-2 -right-2">
                        <span className="px-3 py-1 text-sm font-bold bg-orange-500 text-white rounded-full shadow-lg">
                          #{book.amazonRank} Bestseller
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Info */}
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{book.title}</h1>
                  {book.subtitle && (
                    <h2 className="text-xl text-slate-300 mb-4">{book.subtitle}</h2>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="font-medium text-slate-300 w-20">Author:</span>
                      <span className="text-white">{book.author}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-slate-300 w-20">Rating:</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="ml-1 font-semibold">{book.rating}</span>
                        <span className="ml-1 text-slate-400">({book.reviewCount.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-slate-300 w-20">Pages:</span>
                      <span className="text-white">{book.pageCount}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-slate-300 w-20">Level:</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        book.targetAudience === 'beginner' ? 'bg-emerald-900/50 text-emerald-300 border-emerald-700/50' :
                        book.targetAudience === 'intermediate' ? 'bg-yellow-900/50 text-yellow-300 border-yellow-700/50' :
                        'bg-red-900/50 text-red-300 border-red-700/50'
                      }`}>
                        {book.targetAudience.charAt(0).toUpperCase() + book.targetAudience.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <span className="font-medium text-slate-300 mb-2 block">Topics:</span>
                    <div className="flex flex-wrap gap-2">
                      {book.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">About This Book</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">{book.description}</p>
                <p className="text-slate-400 leading-relaxed">{book.summary}</p>
              </div>

              {/* Key Takeaways */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  {book.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white text-sm font-bold rounded-full flex items-center justify-center mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-slate-300">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros and Cons */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Pros & Cons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-3">✓ Pros</h4>
                    <ul className="space-y-2">
                      {book.prosAndCons.pros.map((pro, index) => (
                        <li key={index} className="text-slate-300 text-sm flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">✗ Cons</h4>
                    <ul className="space-y-2">
                      {book.prosAndCons.cons.map((con, index) => (
                        <li key={index} className="text-slate-300 text-sm flex items-start">
                          <span className="text-red-400 mr-2 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Author Bio (if available) */}
              {author && (
                <div className="mb-8 p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                  <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-slate-200 font-bold text-lg">{author.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{author.name}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed mb-3">{author.bio}</p>
                      <div className="text-sm">
                        <span className="font-medium text-slate-300">Key Philosophy: </span>
                        <span className="text-slate-400 italic">"{author.keyPhilosophy}"</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Purchase Options & Related */}
          <div className="space-y-6">
            {/* Purchase Options */}
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Get This Book</h3>
              <div className="space-y-3">
                <a
                  href={book.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                >
                  Buy on Amazon - ${book.price}
                </a>
                <a
                  href={book.affiliateUrl.replace('amzn.to', 'audible.com')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                >
                  Listen on Audible
                </a>
                <a
                  href={book.affiliateUrl.replace('amzn.to', 'barnesandnoble.com')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-slate-600 hover:bg-slate-700/50 text-slate-300 hover:text-white py-3 px-4 rounded-lg font-medium text-center transition-all duration-200 backdrop-blur-sm"
                >
                  Barnes & Noble
                </a>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-400 text-center">
                  We earn a commission if you purchase through our links at no extra cost to you.
                </p>
              </div>
            </div>

            {/* Book Details */}
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">Book Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Published:</span>
                  <span className="text-white">{new Date(book.publishedDate).getFullYear()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ISBN:</span>
                  <span className="text-white">{book.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category:</span>
                  <Link href={`/categories/${book.category}`} className="text-emerald-400 hover:text-emerald-300 hover:underline capitalize transition-colors">
                    {book.category.replace('-', ' ')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Books */}
            {relatedBooks.length > 0 && (
              <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">You Might Also Like</h3>
                <div className="space-y-4">
                  {relatedBooks.map((relatedBook) => (
                    <Link key={relatedBook.id} href={`/books/${relatedBook.id}`} className="block">
                      <div className="flex space-x-3 p-3 hover:bg-slate-700/30 rounded-lg transition-colors">
                        <div className="flex-shrink-0 w-12 h-16 relative">
                          <Image
                            src={relatedBook.coverImage}
                            alt={relatedBook.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white line-clamp-2">{relatedBook.title}</h4>
                          <p className="text-xs text-slate-400 mt-1">by {relatedBook.author}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="ml-1 text-xs text-slate-400">{relatedBook.rating}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}