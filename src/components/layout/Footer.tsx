import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why choose BookFi?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
            </p>
            
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <span className="text-xl font-bold">BookFi</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              At BookFi, we provides education on social media networks, information 
              technology skills to help everyone access to technological 
              knowledge to access sustainable technology and help share them 
              become successful at that, and it will provide them 
              more training opportunities skills.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Editor's Choice</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link href="/marketing" className="hover:text-white transition-colors">Marketing</Link></li>
              <li><Link href="/seo" className="hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/design" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="/office-productivity" className="hover:text-white transition-colors">Office Productivity</Link></li>
              <li><Link href="/teaching-academics" className="hover:text-white transition-colors">Teaching & Academics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/become-instructor" className="hover:text-white transition-colors">Become Instructor</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Feel free to get in touch with us via phone or send us a message</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@bookfi.com</p>
              <div className="flex space-x-4 mt-4">
                <span className="text-xl">📘</span>
                <span className="text-xl">🐦</span>
                <span className="text-xl">💼</span>
                <span className="text-xl">📷</span>
                <span className="text-xl">📌</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © 2024 BookFi All Rights Reserved.</p>
          <p className="mt-2">We might receive compensation when you buy through our affiliate links.</p>
        </div>
      </div>
    </footer>
  );
}