import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
  fullTestimonial: string;
  image: string;
  service: string;
  results: string[];
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Family Medicine Physician",
    company: "Johnson Family Practice",
    rating: 5,
    quote: "Vedha Solutions transformed our practice efficiency. Their EHR optimization reduced our documentation time by 40%.",
    fullTestimonial: "Before working with Vedha Solutions, our practice was drowning in paperwork and inefficient workflows. The EHR system we had was supposed to make things easier, but it felt like it was working against us. The team at Vedha Solutions completely transformed our approach to documentation and patient care. Their EHR optimization reduced our documentation time by 40%, allowing us to see more patients while maintaining the quality of care our patients deserve. The staff training was exceptional, and the ongoing support has been invaluable. I can't imagine running our practice without their expertise.",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "EHR/EMR Support & Optimization",
    results: [
      "40% reduction in documentation time",
      "Increased patient capacity by 25%",
      "Improved staff satisfaction",
      "Enhanced compliance scores"
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Internal Medicine Physician",
    company: "Metro Health Clinic",
    rating: 5,
    quote: "The virtual scribe service has been a game-changer. I can focus entirely on my patients while knowing documentation is handled professionally.",
    fullTestimonial: "The virtual scribe service from Vedha Solutions has revolutionized how I practice medicine. Previously, I was spending 2-3 hours after each clinic day completing notes and documentation. Now, with their virtual scribes handling real-time documentation during patient visits, I can focus entirely on my patients without worrying about missing important details in the medical record. The scribes are incredibly well-trained, understand medical terminology perfectly, and maintain the highest standards of accuracy and professionalism. This service has not only improved my work-life balance but has also enhanced the quality of patient interactions.",
    image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "Virtual Medical Scribes",
    results: [
      "2-3 hours saved daily on documentation",
      "Improved patient interaction quality",
      "Better work-life balance",
      "100% documentation accuracy"
    ],
    videoUrl: "https://example.com/testimonial-video-2"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "Practice Manager",
    company: "Riverside Medical Group",
    rating: 5,
    quote: "Their revenue cycle management service increased our collections by 25% in just six months. The team is knowledgeable and responsive.",
    fullTestimonial: "When we partnered with Vedha Solutions for revenue cycle management, our practice was struggling with claim denials, slow collections, and administrative overhead that was eating into our profitability. Within just six months, their RCM service increased our collections by 25% and dramatically reduced our accounts receivable aging. The team's expertise in medical billing, their proactive approach to denial management, and their detailed financial reporting have given us complete visibility into our revenue cycle. They've essentially become an extension of our team, and their responsiveness to our questions and concerns has been outstanding.",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "Revenue Cycle Management",
    results: [
      "25% increase in collections",
      "Reduced claim denial rate by 60%",
      "Faster payment processing",
      "Improved cash flow management"
    ]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Pediatrician",
    company: "Wilson Pediatrics",
    rating: 5,
    quote: "Exceptional support and expertise. Vedha Solutions helped us transition to a new EHR system seamlessly with minimal disruption.",
    fullTestimonial: "Transitioning to a new EHR system is every practice's nightmare, but Vedha Solutions made it feel seamless. Their team managed every aspect of our EHR transition - from data migration to staff training to workflow optimization. What impressed me most was their attention to detail and their ability to anticipate potential issues before they became problems. The transition was completed ahead of schedule with minimal disruption to our patient care. Their ongoing support has ensured that we're getting the maximum benefit from our new system. I wouldn't hesitate to recommend them to any practice considering an EHR change.",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "EHR/EMR Support & Optimization",
    results: [
      "Seamless EHR transition",
      "Zero data loss during migration",
      "Staff productivity maintained",
      "Completed ahead of schedule"
    ]
  },
  {
    id: 5,
    name: "Maria Garcia",
    title: "Office Manager",
    company: "Central Valley Clinic",
    rating: 5,
    quote: "The medical coding audit identified significant opportunities for improved reimbursement. Their expertise saved us thousands.",
    fullTestimonial: "We engaged Vedha Solutions for a comprehensive medical coding audit after noticing inconsistencies in our reimbursements. Their certified coders conducted a thorough review of our coding practices and identified numerous opportunities for improvement. Not only did they find coding errors that were costing us revenue, but they also provided extensive training for our staff to prevent future issues. The audit process was professional and educational, and the results were immediate - we saw a significant improvement in our reimbursement rates within the first month of implementing their recommendations.",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "Medical Coding & Auditing",
    results: [
      "15% increase in reimbursement rates",
      "Improved coding accuracy",
      "Enhanced compliance",
      "Staff education and training"
    ]
  },
  {
    id: 6,
    name: "Dr. Patricia Martinez",
    title: "Orthopedic Surgeon",
    company: "Advanced Orthopedics",
    rating: 5,
    quote: "The staffing solutions provided by Vedha Solutions helped us maintain operations during a critical transition period.",
    fullTestimonial: "When our practice manager unexpectedly left during a busy period, Vedha Solutions quickly provided us with a qualified temporary administrator who seamlessly stepped into the role. Their staffing team understood our specific needs and found candidates with the right healthcare experience and cultural fit for our practice. The temporary placement worked so well that we eventually hired them permanently. The level of screening and support provided by Vedha Solutions made what could have been a disruptive situation into a smooth transition.",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    service: "Clinical & Administrative Staffing",
    results: [
      "Seamless staff transition",
      "Minimal operational disruption",
      "Quality candidate matching",
      "Successful permanent placement"
    ]
  }
];

const serviceCategories = [
  "All Services",
  "EHR/EMR Support & Optimization",
  "Virtual Medical Scribes",
  "Revenue Cycle Management",
  "Medical Coding & Auditing",
  "Clinical & Administrative Staffing"
];

export const Testimonials: React.FC = () => {
  const [selectedService, setSelectedService] = useState("All Services");
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-accent-500 fill-current' : 'text-neutral-300'
        }`}
      />
    ));
  };

  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedService === "All Services" || testimonial.service === selectedService
  );

  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, startIndex + testimonialsPerPage);

  // Calculate statistics
  const totalTestimonials = testimonials.length;
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
  const satisfactionRate = Math.round((fiveStarCount / totalTestimonials) * 100);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed mb-8">
              Discover how healthcare practices across the country have transformed their operations 
              and improved patient care with Vedha Solutions.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">{totalTestimonials}+</div>
                <div className="text-neutral-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">{averageRating.toFixed(1)}</div>
                <div className="text-neutral-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">{satisfactionRate}%</div>
                <div className="text-neutral-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Filter by Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setSelectedService(service);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                    selectedService === service
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-200">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-900">{testimonial.name}</h3>
                    <p className="text-neutral-600 text-sm">{testimonial.title}</p>
                    <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-primary-200 absolute -top-2 -left-2" />
                  <blockquote className="text-neutral-700 italic pl-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary-900 mb-2">Key Results:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {testimonial.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-3 h-3 text-green-500 mr-2 fill-current" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpandedTestimonial(testimonial.id)}
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-200"
                  >
                    Read Full Story
                  </button>
                  {testimonial.videoUrl && (
                    <button className="flex items-center text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors duration-200">
                      <Play className="w-4 h-4 mr-1" />
                      Watch Video
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-neutral-300 text-neutral-600 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      currentPage === page
                        ? 'bg-primary-500 text-white'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-neutral-300 text-neutral-600 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Expanded Testimonial Modal */}
      {expandedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary-900">Client Success Story</h2>
                <button
                  onClick={() => setExpandedTestimonial(null)}
                  className="text-neutral-500 hover:text-neutral-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            {(() => {
              const testimonial = testimonials.find(t => t.id === expandedTestimonial);
              if (!testimonial) return null;
              
              return (
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <div className="relative mb-6">
                        <Quote className="w-12 h-12 text-primary-200 absolute -top-4 -left-4" />
                        <blockquote className="text-lg text-neutral-700 italic pl-8 leading-relaxed">
                          "{testimonial.fullTestimonial}"
                        </blockquote>
                      </div>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-primary-900">{testimonial.name}</h3>
                          <p className="text-neutral-600">{testimonial.title}</p>
                          <p className="text-primary-600 font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {testimonial.service}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-4">Measurable Results:</h4>
                        <ul className="space-y-3">
                          {testimonial.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-4 h-4 text-green-500 mr-3 mt-0.5 fill-current flex-shrink-0" />
                              <span className="text-neutral-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Discover how Vedha Solutions can help your practice achieve similar results. 
            Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200"
            >
              Request Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};