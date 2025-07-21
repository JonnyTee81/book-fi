import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CollectionLoading() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-4 bg-slate-700 rounded w-12 animate-pulse"></div>
            <div>/</div>
            <div className="h-4 bg-slate-700 rounded w-20 animate-pulse"></div>
            <div>/</div>
            <div className="h-4 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>
        </nav>

        {/* Collection Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-6 bg-slate-700 rounded w-40 mx-auto mb-4 animate-pulse"></div>
          <div className="h-10 bg-slate-700 rounded w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded w-80 mx-auto mb-8 animate-pulse"></div>
          
          {/* Collection Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 shadow-lg border border-slate-700/50 backdrop-blur-sm">
                <div className="h-8 bg-slate-700 rounded w-12 mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-16 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Value Proposition Skeleton */}
        <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <div className="h-8 bg-slate-700 rounded w-48 mb-6 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="h-6 bg-slate-700 rounded w-32 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mr-3 mt-2 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-6 bg-slate-700 rounded w-24 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mr-3 mt-2 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-2/3 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books in Collection Skeleton */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="h-8 bg-slate-700 rounded w-64 animate-pulse"></div>
            <div className="h-6 bg-slate-700 rounded w-16 animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl shadow-lg border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                {/* Image skeleton */}
                <div className="h-64 bg-slate-700 animate-pulse"></div>
                {/* Content skeleton */}
                <div className="p-4">
                  <div className="h-5 bg-slate-700 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-1/2 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-full mb-3 animate-pulse"></div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 bg-slate-700 rounded w-16 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-12 animate-pulse"></div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-8 bg-slate-700 rounded animate-pulse"></div>
                    <div className="h-8 bg-slate-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bundle CTA Skeleton */}
        <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm text-center">
          <div className="h-8 bg-slate-700 rounded w-80 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded w-96 mx-auto mb-6 animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-16 bg-slate-700 rounded-lg w-32 animate-pulse"></div>
            <div className="h-12 bg-slate-700 rounded-xl w-40 animate-pulse"></div>
          </div>
        </section>

        {/* Reading Order Skeleton */}
        <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <div className="h-8 bg-slate-700 rounded w-56 mb-6 animate-pulse"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-5 bg-slate-700 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded w-20 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-24 animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}