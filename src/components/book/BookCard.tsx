import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const targetAudienceBadge = {
    beginner: { label: 'Beginner', color: 'bg-green-100 text-green-800' },
    intermediate: { label: 'Intermediate', color: 'bg-yellow-100 text-yellow-800' },
    advanced: { label: 'Advanced', color: 'bg-red-100 text-red-800' }
  };

  const badge = targetAudienceBadge[book.targetAudience];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${badge.color}`}>
            {badge.label}
          </span>
        </div>
        {book.amazonRank && book.amazonRank <= 10 && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs font-bold bg-orange-500 text-white rounded-full">
              #{book.amazonRank} Bestseller
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
        {book.subtitle && (
          <p className="text-gray-500 text-sm mb-1">{book.subtitle}</p>
        )}
        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
            <span className="ml-1 text-xs text-gray-500">({book.reviewCount.toLocaleString()})</span>
          </div>
          <span className="font-semibold text-green-600">${book.price}</span>
        </div>

        {book.keyTakeaways && book.keyTakeaways.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-700 mb-1">Key Takeaway:</p>
            <p className="text-xs text-gray-600 italic">"{book.keyTakeaways[0]}"</p>
          </div>
        )}
        
        <div className="mt-4 space-y-2">
          <Link
            href={`/books/${book.id}`}
            className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
          <a
            href={book.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}