import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import testimonialsData from '../../data/testimonials.json';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonials = testimonialsData.testimonials;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from healthcare professionals who have 
            transformed their practices with our solutions.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft mx-4">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-soft"
                          />
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                          <div className="flex justify-center lg:justify-start mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <blockquote className="text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <cite className="not-italic">
                              <div className="font-semibold text-primary-900 text-lg">
                                {testimonial.name}
                              </div>
                              <div className="text-neutral-600">
                                {testimonial.title}
                              </div>
                              <div className="text-primary-600 font-medium">
                                {testimonial.company}
                              </div>
                            </cite>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-soft-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-soft-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};