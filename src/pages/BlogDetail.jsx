import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { BLOG_POSTS, AGENCY_INFO } from '../data/agencyData';

export default function BlogDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWaUrl = `https://wa.me/?text=${encodeURIComponent(
    `Check out this article from THEVISUAL.IN: "${post.title}" - ${window.location.href}`
  )}`;

  return (
    <div className="pt-24 pb-20">
      
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      <article className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/30">
            {post.category}
          </span>
          <span className="text-xs text-neutral-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gold-accent" />
            <span>{post.readTime}</span>
          </span>
          <span className="text-xs text-neutral-500">•</span>
          <span className="text-xs text-neutral-400">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight mb-8">
          {post.title}
        </h1>

        {/* Share buttons */}
        <div className="py-4 border-y border-neutral-800 flex items-center justify-between gap-4 mb-10 text-xs">
          <span className="text-neutral-400">Published by <strong>THEVISUAL.IN Studio</strong></span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-dark-900 border border-neutral-800 hover:border-gold-400 text-neutral-300 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Link'}</span>
            </button>

            <a
              href={shareWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Share</span>
            </a>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-syne font-bold text-white pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Bottom Author Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-dark-900 border border-neutral-800 flex items-center gap-5 shadow-card-dark">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-600 to-gold-400 p-0.5 shrink-0">
            <div className="w-full h-full rounded-[14px] bg-dark-950 flex items-center justify-center font-syne font-bold text-xl text-gold-accent">
              TV
            </div>
          </div>
          <div>
            <h4 className="text-base font-syne font-bold text-white">THEVISUAL.IN Editorial</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Practical guides on modern web design, branding, and creative technologies curated by Founder Ankit.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <h3 className="text-xl font-syne font-bold text-white mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 hover:border-gold-400/30 transition-all block group"
                >
                  <span className="text-[11px] font-semibold text-gold-accent block mb-2">
                    {r.category}
                  </span>
                  <h4 className="text-base font-syne font-bold text-white group-hover:text-gold-light mb-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
