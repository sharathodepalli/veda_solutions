import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Shield, Clock, TrendingUp } from 'lucide-react';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { BlogTeasers } from '../components/home/BlogTeasers';
import { ClientLogos } from '../components/home/ClientLogos';
import servicesData from '../data/services.json';
import settingsData from '../data/settings.json';

export const Home: React.FC = () => {
  const services = servicesData.services.slice(0, 4).map(service => ({
    ...service,
    icon: getServiceIcon(service.id),
    href: `/services/${service.id}`
  }));

  const stats = [
    { number: '500+', label: 'Healthcare Practices Served' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Support Availability' },
    { number: '15+', label: 'Years of Experience' }
  ];

  const heroData = settingsData.hero;

  function getServiceIcon(serviceId: string) {
    const iconMap: Record<string, any> = {
      'ehr-emr-support': Shield,
      'virtual-scribes': Users,
      'revenue-cycle': TrendingUp,
      'medical-coding': CheckCircle,
      'clinical-staffing': Users
    };
    return iconMap[serviceId] || Shield;
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {heroData.title.split(' ').slice(0, 2).join(' ')}
                <span className="text-primary-400"> {heroData.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-quote"
                  className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center group"
                >
                  {heroData.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-soft-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">HIPAA Compliant</h3>
                      <p className="text-neutral-600">Secure & compliant solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">24/7 Support</h3>
                      <p className="text-neutral-600">Round-the-clock assistance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Proven Results</h3>
                      <p className="text-neutral-600">Measurable improvements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From EHR optimization to virtual scribes, we provide the technology and support 
              your practice needs to operate efficiently and deliver exceptional patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={service.href}
                  className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-200 border border-neutral-100 hover:border-primary-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-200">
                        Learn more
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Blog Teasers */}
      <BlogTeasers />

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Join hundreds of healthcare practices that trust Vedha Solutions for their technology needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};