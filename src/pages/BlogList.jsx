import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Search, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Website Development', 'Branding', 'AI & Innovation'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Digital Knowledge Hub</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-syne font-extrabold text-white">
          Insights &{' '}
          <span className="gold-text-gradient">Articles.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Actionable perspectives on modern web development, luxury branding, short-form video, and practical AI automation for growing brands.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles by topic..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-gold-400"
          />
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-dark-950 font-bold shadow-gold-glow'
                  : 'bg-dark-900 border border-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group rounded-3xl bg-dark-900 border border-neutral-800 hover:border-gold-400/40 p-7 transition-all duration-300 hover:-translate-y-1 shadow-card-dark flex flex-col justify-between block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-400/10 text-gold-accent border border-gold-400/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-syne font-bold text-white group-hover:text-gold-light transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">{post.date}</span>
                  <span className="text-gold-accent font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            No articles found matching your query. Try selecting another category or clear the search.
          </div>
        )}
      </section>

    </div>
  );
}
