import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react';
import faqsData from '../data/faqs.json';

const categories = ["All", "EHR Support", "Virtual Scribes", "Revenue Cycle", "Medical Coding", "Security", "Support", "Training", "General"];

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  const faqs = faqsData.faqs;

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-200 leading-relaxed mb-8">
            Find answers to common questions about our healthcare technology solutions and services. 
            Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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

      {/* FAQ List */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">No FAQs found</h3>
              <p className="text-neutral-500">Try adjusting your search criteria or browse all categories.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">
                        {faq.question}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-neutral-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-500" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-neutral-100 pt-4">
                        <p className="text-neutral-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {faq.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600">
              Our team is here to help with any additional questions or specific concerns about your practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-neutral-600 mb-6">
                Get personalized answers and learn how our solutions can benefit your specific practice.
              </p>
              <a
                href="/request-quote"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-block"
              >
                Request Free Consultation
              </a>
            </div>
            
            <div className="bg-accent-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Contact Support
              </h3>
              <p className="text-neutral-600 mb-6">
                Reach out to our support team for immediate assistance with any questions or concerns.
              </p>
              <a
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-block"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};