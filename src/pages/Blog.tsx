import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 EHR Optimization Strategies That Boost Practice Efficiency",
    excerpt: "Discover proven techniques to streamline your electronic health records and reduce documentation time while improving patient care quality.",
    content: "Electronic Health Records (EHR) systems are essential tools for modern medical practices, but many healthcare providers struggle with inefficient workflows that can hinder productivity and patient care...",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "EHR Optimization",
    tags: ["EHR", "Efficiency", "Healthcare Technology", "Best Practices"],
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "5-ehr-optimization-strategies",
    author: {
      name: "Dr. Sarah Mitchell",
      title: "Healthcare Technology Consultant",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  },
  {
    id: 2,
    title: "How Virtual Medical Scribes Are Transforming Healthcare",
    excerpt: "Learn how virtual scribes are helping physicians focus on patient care while maintaining accurate and comprehensive medical documentation.",
    content: "The healthcare industry is experiencing a documentation crisis. Physicians are spending more time on paperwork than with patients, leading to burnout and decreased satisfaction...",
    date: "2024-12-12",
    readTime: "7 min read",
    category: "Virtual Scribes",
    tags: ["Virtual Scribes", "Documentation", "Physician Burnout", "Patient Care"],
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "virtual-medical-scribes-transforming-healthcare",
    author: {
      name: "Michael Chen",
      title: "Operations Director",
      image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  },
  {
    id: 3,
    title: "Revenue Cycle Management: Best Practices for 2024",
    excerpt: "Maximize your practice's financial health with these essential revenue cycle management strategies and industry best practices.",
    content: "Effective revenue cycle management is crucial for the financial sustainability of any medical practice. With changing regulations and payer requirements...",
    date: "2024-12-08",
    readTime: "6 min read",
    category: "Revenue Cycle",
    tags: ["Revenue Cycle", "Financial Management", "Medical Billing", "Practice Management"],
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "revenue-cycle-management-best-practices-2024",
    author: {
      name: "Lisa Rodriguez",
      title: "Revenue Cycle Specialist",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  },
  {
    id: 4,
    title: "The Future of Healthcare Technology: Trends to Watch",
    excerpt: "Explore emerging healthcare technologies that will shape the future of medical practice management and patient care.",
    content: "Healthcare technology continues to evolve at a rapid pace, bringing new opportunities for improved patient outcomes and operational efficiency...",
    date: "2024-12-05",
    readTime: "8 min read",
    category: "Healthcare Technology",
    tags: ["Healthcare Technology", "Innovation", "Future Trends", "Digital Health"],
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "future-healthcare-technology-trends",
    author: {
      name: "Dr. James Wilson",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  },
  {
    id: 5,
    title: "HIPAA Compliance in the Digital Age: What You Need to Know",
    excerpt: "Stay compliant with HIPAA regulations while leveraging modern technology solutions for your healthcare practice.",
    content: "As healthcare practices increasingly adopt digital technologies, maintaining HIPAA compliance becomes more complex yet more critical than ever...",
    date: "2024-12-01",
    readTime: "6 min read",
    category: "Compliance",
    tags: ["HIPAA", "Compliance", "Data Security", "Healthcare Regulations"],
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "hipaa-compliance-digital-age",
    author: {
      name: "Dr. Maria Garcia",
      title: "Compliance Specialist",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  },
  {
    id: 6,
    title: "Maximizing Patient Satisfaction Through Technology",
    excerpt: "Learn how the right technology solutions can enhance patient experience and improve satisfaction scores for your practice.",
    content: "Patient satisfaction is a key metric for healthcare practices, influencing everything from patient retention to online reviews and referrals...",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Patient Experience",
    tags: ["Patient Satisfaction", "Technology", "Patient Experience", "Healthcare Quality"],
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "maximizing-patient-satisfaction-technology",
    author: {
      name: "Sarah Williams",
      title: "Patient Experience Manager",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  }
];

const categories = ["All", "EHR Optimization", "Virtual Scribes", "Revenue Cycle", "Healthcare Technology", "Compliance", "Patient Experience"];

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Healthcare Insights & Expertise
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed mb-8">
              Stay informed with the latest trends, tips, and best practices in healthcare 
              technology, practice management, and industry insights from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">No articles found</h3>
              <p className="text-neutral-500">Try adjusting your search criteria or browse all articles.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="inline-flex items-center text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.image}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-neutral-900">{post.author.name}</div>
                            <div className="text-xs text-neutral-500">{post.author.title}</div>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 group-hover:gap-2"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                          currentPage === page
                            ? 'bg-primary-500 text-white'
                            : 'bg-white text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Healthcare Insights
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest healthcare technology trends, 
            practice management tips, and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-neutral-900 focus:ring-2 focus:ring-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};