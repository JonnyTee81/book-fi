import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800/50 rounded-2xl shadow-lg p-8 border border-slate-700/50 backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-white mb-8">Affiliate Disclosure</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-blue-300 mb-2">Full Transparency</h2>
              <p className="text-blue-200">
                BookFi is committed to honest, transparent recommendations. We only recommend books we genuinely believe will help you achieve your financial goals.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-white mb-4">What Are Affiliate Links?</h2>
            <p className="text-slate-300 mb-6">
              When you click on certain links to books and make a purchase, we may receive a small commission from the retailer at no additional cost to you. These are called affiliate links, and they help support our work in providing free, high-quality financial education content.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Our Affiliate Partners</h2>
            <p className="text-slate-300 mb-4">We participate in affiliate programs with:</p>
            <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
              <li><strong>Amazon Associates:</strong> We earn from qualifying purchases made through our Amazon links</li>
              <li><strong>Barnes & Noble:</strong> We may earn commissions on books purchased through B&N links</li>
              <li><strong>Audible:</strong> We may receive compensation for audiobook purchases</li>
              <li><strong>Apple Books:</strong> We may earn from purchases made through Apple Books links</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-4">How We Choose Books to Recommend</h2>
            <p className="text-slate-300 mb-4">Our book recommendations are based on:</p>
            <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
              <li>Proven track record of helping readers improve their finances</li>
              <li>Author expertise and credibility in personal finance</li>
              <li>Positive reader reviews and community feedback</li>
              <li>Practical, actionable advice that produces real results</li>
              <li>Relevance to different experience levels and financial goals</li>
            </ul>

            <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Our Promise to You</h3>
              <p className="text-emerald-200">
                We will never recommend a book solely because it offers a higher commission. Our primary goal is to help you succeed financially, and we believe the books we recommend will genuinely help you achieve that success.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-white mb-4">What This Means for You</h2>
            <div className="space-y-4 text-slate-300 mb-6">
              <div className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">✓</span>
                <span><strong>No Extra Cost:</strong> You pay the same price whether you use our links or not</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">✓</span>
                <span><strong>Support Our Work:</strong> Your purchases help us continue providing free content</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">✓</span>
                <span><strong>Honest Reviews:</strong> Our opinions remain unbiased and authentic</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">✓</span>
                <span><strong>Quality Focus:</strong> We only recommend books we truly believe in</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-white mb-4">Your Choice</h2>
            <p className="text-slate-300 mb-6">
              You are never obligated to purchase through our affiliate links. You can always search for the books independently and purchase them directly from any retailer of your choice. We simply appreciate your support when you do choose to use our links.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Price Comparison</h2>
            <p className="text-slate-300 mb-6">
              We strive to show you multiple purchasing options so you can find the best price. Prices may vary between retailers, and we encourage you to compare prices to find the best deal for your budget.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Updates to This Disclosure</h2>
            <p className="text-slate-300 mb-6">
              We may update this disclosure from time to time to reflect changes in our affiliate partnerships or policies. We encourage you to review this page periodically.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">Questions?</h2>
            <p className="text-slate-300 mb-6">
              If you have any questions about our affiliate relationships or this disclosure, please don't hesitate to contact us. We believe in complete transparency and are happy to discuss our practices with you.
            </p>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 mt-8 backdrop-blur-sm">
              <p className="text-sm text-slate-400">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                <strong>Contact:</strong> For questions about this disclosure, please visit our <a href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}