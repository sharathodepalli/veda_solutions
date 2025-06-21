import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Mail } from 'lucide-react';
import blogData from '../../data/blog.json';

export const BlogTeasers: React.FC = () => {
  const [email, setEmail] = useState('');
  const blogPosts = blogData.posts.slice(0, 3); // Show only first 3 posts

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and best practices in healthcare 
            technology and practice management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-200 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  <Link to={`/blog/${post.slug}`} className="block">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 group-hover:gap-2"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mb-16">
          <Link
            to="/blog"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Healthcare Insights
          </h3>
          <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest healthcare technology trends, 
            practice management tips, and industry insights delivered to your inbox.
          </p>
          
          <form 
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="max-w-md mx-auto"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="newsletter" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl text-neutral-900 focus:ring-2 focus:ring-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
            <p className="text-sm text-neutral-300 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};