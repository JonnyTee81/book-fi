import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const targetAudienceBadge = {
    beginner: { label: 'Beginner', color: 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50' },
    intermediate: { label: 'Intermediate', color: 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50' },
    advanced: { label: 'Advanced', color: 'bg-red-900/50 text-red-300 border border-red-700/50' }
  };

  const badge = targetAudienceBadge[book.targetAudience];

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-700/50 backdrop-blur-sm group">
      <div className="relative h-64 w-full">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${badge.color}`}>
            {badge.label}
          </span>
        </div>
        {book.amazonRank && book.amazonRank <= 10 && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full backdrop-blur-sm">
              #{book.amazonRank} Bestseller
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-emerald-300 transition-colors">{book.title}</h3>
        {book.subtitle && (
          <p className="text-slate-400 text-sm mb-1">{book.subtitle}</p>
        )}
        <p className="text-slate-400 text-sm mb-2">by {book.author}</p>
        <p className="text-slate-300 text-sm mb-3 line-clamp-2">{book.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-slate-300">{book.rating}</span>
            <span className="ml-1 text-xs text-slate-400">({book.reviewCount.toLocaleString()})</span>
          </div>
          <span className="font-semibold text-emerald-400">${book.price}</span>
        </div>

        {book.keyTakeaways && book.keyTakeaways.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-slate-300 mb-1">Key Takeaway:</p>
            <p className="text-xs text-slate-400 italic">"{book.keyTakeaways[0]}"</p>
          </div>
        )}
        
        <div className="mt-4 space-y-2">
          <Link
            href={`/books/${book.id}`}
            className="block w-full text-center border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 py-2 px-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </Link>
          <a
            href={book.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}