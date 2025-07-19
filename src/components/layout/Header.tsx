import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BookFi</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/books" className="text-gray-600 hover:text-green-600 font-medium">
              Books
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-green-600 font-medium">
              Categories
            </Link>
            <Link href="/collections" className="text-gray-600 hover:text-green-600 font-medium">
              Collections
            </Link>
            <Link href="/bestsellers" className="text-gray-600 hover:text-green-600 font-medium">
              Bestsellers
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600 font-medium">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/collections/beginner-essentials"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}