import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4">
      <div className="text-center max-w-lg p-10 rounded-3xl bg-dark-900 border border-neutral-800 shadow-card-dark">
        <span className="font-syne font-extrabold text-7xl gold-text-gradient block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-syne font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
          The page or digital asset you are looking for has been moved or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-dark-950 font-syne font-bold text-sm shadow-gold-glow transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
