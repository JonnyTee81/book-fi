import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Affiliate Disclosure</h1>
          
          <div className="prose prose-gray max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Full Transparency</h2>
              <p className="text-blue-800">
                BookFi is committed to honest, transparent recommendations. We only recommend books we genuinely believe will help you achieve your financial goals.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">What Are Affiliate Links?</h2>
            <p className="text-gray-700 mb-6">
              When you click on certain links to books and make a purchase, we may receive a small commission from the retailer at no additional cost to you. These are called affiliate links, and they help support our work in providing free, high-quality financial education content.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Affiliate Partners</h2>
            <p className="text-gray-700 mb-4">We participate in affiliate programs with:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Amazon Associates:</strong> We earn from qualifying purchases made through our Amazon links</li>
              <li><strong>Barnes & Noble:</strong> We may earn commissions on books purchased through B&N links</li>
              <li><strong>Audible:</strong> We may receive compensation for audiobook purchases</li>
              <li><strong>Apple Books:</strong> We may earn from purchases made through Apple Books links</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Choose Books to Recommend</h2>
            <p className="text-gray-700 mb-4">Our book recommendations are based on:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Proven track record of helping readers improve their finances</li>
              <li>Author expertise and credibility in personal finance</li>
              <li>Positive reader reviews and community feedback</li>
              <li>Practical, actionable advice that produces real results</li>
              <li>Relevance to different experience levels and financial goals</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Our Promise to You</h3>
              <p className="text-green-800">
                We will never recommend a book solely because it offers a higher commission. Our primary goal is to help you succeed financially, and we believe the books we recommend will genuinely help you achieve that success.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">What This Means for You</h2>
            <div className="space-y-4 text-gray-700 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span><strong>No Extra Cost:</strong> You pay the same price whether you use our links or not</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span><strong>Support Our Work:</strong> Your purchases help us continue providing free content</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span><strong>Honest Reviews:</strong> Our opinions remain unbiased and authentic</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span><strong>Quality Focus:</strong> We only recommend books we truly believe in</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Choice</h2>
            <p className="text-gray-700 mb-6">
              You are never obligated to purchase through our affiliate links. You can always search for the books independently and purchase them directly from any retailer of your choice. We simply appreciate your support when you do choose to use our links.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Price Comparison</h2>
            <p className="text-gray-700 mb-6">
              We strive to show you multiple purchasing options so you can find the best price. Prices may vary between retailers, and we encourage you to compare prices to find the best deal for your budget.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Disclosure</h2>
            <p className="text-gray-700 mb-6">
              We may update this disclosure from time to time to reflect changes in our affiliate partnerships or policies. We encourage you to review this page periodically.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our affiliate relationships or this disclosure, please don't hesitate to contact us. We believe in complete transparency and are happy to discuss our practices with you.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
                <strong>Contact:</strong> For questions about this disclosure, please visit our <a href="/contact" className="text-green-600 hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}