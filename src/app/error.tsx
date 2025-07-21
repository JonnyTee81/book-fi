'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Animation/Graphic */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-16 relative overflow-hidden border border-slate-700/50">
            {/* Background Wave Effects */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="errorWave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#dc2626" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <path d="M0,100 C300,50 700,150 1000,100 L1000,400 L0,400 Z" fill="url(#errorWave)">
                  <animateTransform attributeName="transform" type="translate" values="0,0;-20,0;0,0" dur="12s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
            
            <div className="relative">
              {/* Error Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-red-900/50 border border-red-700/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl">⚠️</span>
                </div>
              </div>
              
              {/* Error Message */}
              <h1 className="text-4xl font-bold text-white mb-4">
                Something went wrong!
              </h1>
            </div>
          </div>
        </div>

        <p className="text-xl text-slate-300 mb-8">
          Don't worry - even the best financial advisors encounter unexpected bumps in the road. 
          Let's get you back on track to building your wealth.
        </p>

        {/* Error Details (for development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-slate-800/50 rounded-xl p-6 mb-8 text-left border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Error Details:</h3>
            <pre className="text-sm text-slate-300 whitespace-pre-wrap break-words">
              {error.message}
            </pre>
            {error.digest && (
              <p className="text-xs text-slate-400 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="border border-slate-600 text-slate-300 hover:text-white hover:border-emerald-500 px-8 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm text-center"
          >
            Go Home
          </Link>
        </div>

        {/* Helpful Suggestions */}
        <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-slate-700/50 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-white mb-4">What you can do:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-slate-300">
                <strong>Refresh the page</strong><br />
                Sometimes a simple refresh fixes the issue
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏠</div>
              <p className="text-slate-300">
                <strong>Start over</strong><br />
                Go back to the homepage and try again
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <p className="text-slate-300">
                <strong>Browse books</strong><br />
                Continue exploring our book collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}