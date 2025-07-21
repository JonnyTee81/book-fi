import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Error Animation/Graphic */}
          <div className="relative mb-12">
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-16 relative overflow-hidden border border-slate-700/50">
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
                {/* 404 Display */}
                <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-6">
                  404
                </div>
                
                {/* Book Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-emerald-900/50 border border-emerald-700/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">📚</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Looks like you've wandered into uncharted financial territory. 
            The page you're looking for doesn't exist, but we have plenty of great books to help you navigate back to success.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Go Home
            </Link>
            <Link 
              href="/books"
              className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Browse Books
            </Link>
            <Link 
              href="/collections"
              className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              View Collections
            </Link>
          </div>

          {/* Helpful Suggestions */}
          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/categories/investing"
                className="group p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
              >
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  Investing Books
                </h3>
                <p className="text-slate-400 text-sm">
                  Learn to grow your wealth
                </p>
              </Link>
              
              <Link 
                href="/categories/budgeting"
                className="group p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
              >
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  Budgeting Books
                </h3>
                <p className="text-slate-400 text-sm">
                  Master your money management
                </p>
              </Link>
              
              <Link 
                href="/collections/beginner-essentials"
                className="group p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
              >
                <div className="text-2xl mb-2">🌱</div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  Beginner Collection
                </h3>
                <p className="text-slate-400 text-sm">
                  Start your financial journey
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}