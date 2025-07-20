import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-slate-900 font-bold text-sm">📚</span>
              </div>
              <span className="text-xl font-bold text-white">BookFi</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/books" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Books
            </Link>
            <Link href="/categories" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/collections" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Collections
            </Link>
            <Link href="/bestsellers" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              Bestsellers
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/collections/beginner-essentials"
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}