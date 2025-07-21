import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BookLoading() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-4 bg-slate-700 rounded w-12 animate-pulse"></div>
            <div>/</div>
            <div className="h-4 bg-slate-700 rounded w-16 animate-pulse"></div>
            <div>/</div>
            <div className="h-4 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Book Details Skeleton */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Book Cover Skeleton */}
                <div className="aspect-[3/4] bg-slate-700 rounded-lg animate-pulse"></div>

                {/* Book Info Skeleton */}
                <div>
                  <div className="h-8 bg-slate-700 rounded w-3/4 mb-4 animate-pulse"></div>
                  <div className="h-6 bg-slate-700 rounded w-1/2 mb-6 animate-pulse"></div>
                  
                  <div className="space-y-3 mb-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-4 bg-slate-700 rounded w-20 mr-4 animate-pulse"></div>
                        <div className="h-4 bg-slate-700 rounded w-32 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  {/* Tags Skeleton */}
                  <div className="mb-6">
                    <div className="h-4 bg-slate-700 rounded w-16 mb-2 animate-pulse"></div>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-6 bg-slate-700 rounded-full w-20 animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-slate-700 rounded w-40 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-700 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-4/5 animate-pulse"></div>
                </div>
              </div>

              {/* Key Takeaways Skeleton */}
              <div className="mb-8">
                <div className="h-6 bg-slate-700 rounded w-32 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-slate-700 rounded-full mr-3 animate-pulse"></div>
                      <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Options Skeleton */}
          <div className="space-y-6">
            {/* Purchase Options Skeleton */}
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-6 bg-slate-700 rounded w-32 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Book Details Skeleton */}
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-5 bg-slate-700 rounded w-28 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 bg-slate-700 rounded w-20 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-24 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Books Skeleton */}
            <div className="bg-slate-800/50 rounded-2xl shadow-lg p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="h-5 bg-slate-700 rounded w-36 mb-4 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex space-x-3">
                    <div className="w-12 h-16 bg-slate-700 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-slate-700 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}