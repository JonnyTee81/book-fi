'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Simulate API call - replace with actual newsletter service
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! You\'ve been subscribed to our newsletter.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-l-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          disabled={isSubmitting || !email}
          className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-6 py-3 rounded-r-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            '→'
          )}
        </button>
      </form>

      {/* Status Messages */}
      {status !== 'idle' && (
        <div className={`mt-4 text-center text-sm ${
          status === 'success' 
            ? 'text-emerald-400' 
            : 'text-red-400'
        }`}>
          {message}
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-slate-400">
          Join 10,000+ readers • No spam • Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}