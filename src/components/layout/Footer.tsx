import Link from 'next/link';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Financial Future</h2>
            <p className="text-slate-300 max-w-3xl mx-auto mb-8">
              Join thousands of readers who are building wealth and achieving financial independence through the power of expert-recommended personal finance books. Start your journey today with our curated collection of life-changing financial education.
            </p>
            
            <NewsletterSignup />
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-slate-900 font-bold text-sm">📚</span>
              </div>
              <span className="text-xl font-bold">BookFi</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              We curate and recommend the best personal finance books to help you build wealth, achieve financial independence, and transform your relationship with money. Our expert reviews and organized collections make finding the right book simple.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Popular Topics</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/categories/investing" className="hover:text-emerald-400 transition-colors">Investing</Link></li>
              <li><Link href="/categories/budgeting" className="hover:text-emerald-400 transition-colors">Budgeting</Link></li>
              <li><Link href="/categories/debt-management" className="hover:text-emerald-400 transition-colors">Debt Management</Link></li>
              <li><Link href="/categories/retirement" className="hover:text-emerald-400 transition-colors">Retirement Planning</Link></li>
              <li><Link href="/categories/entrepreneurship" className="hover:text-emerald-400 transition-colors">Entrepreneurship</Link></li>
              <li><Link href="/categories/real-estate" className="hover:text-emerald-400 transition-colors">Real Estate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/books" className="hover:text-emerald-400 transition-colors">All Books</Link></li>
              <li><Link href="/collections" className="hover:text-emerald-400 transition-colors">Collections</Link></li>
              <li><Link href="/bestsellers" className="hover:text-emerald-400 transition-colors">Bestsellers</Link></li>
              <li><Link href="/categories" className="hover:text-emerald-400 transition-colors">Categories</Link></li>
              <li><Link href="/disclosure" className="hover:text-emerald-400 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <div className="text-sm text-slate-400 space-y-3">
              <p>Ready to transform your financial future?</p>
              <Link href="/collections/beginner-essentials" className="block bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm">
                Start with Beginner Books →
              </Link>
              <div className="flex space-x-4 mt-4">
                <span className="text-xl hover:scale-110 transition-transform cursor-pointer">📘</span>
                <span className="text-xl hover:scale-110 transition-transform cursor-pointer">🐦</span>
                <span className="text-xl hover:scale-110 transition-transform cursor-pointer">💼</span>
                <span className="text-xl hover:scale-110 transition-transform cursor-pointer">📷</span>
                <span className="text-xl hover:scale-110 transition-transform cursor-pointer">📌</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>Copyright © 2024 BookFi All Rights Reserved.</p>
          <p className="mt-2">We might receive compensation when you buy through our affiliate links. <Link href="/disclosure" className="text-emerald-400 hover:text-emerald-300 transition-colors">Learn more</Link></p>
        </div>
      </div>
    </footer>
  );
}