import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  TrendingUp,
  Sparkles,
  Zap,
} from "lucide-react";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { BlogTeasers } from "../components/home/BlogTeasers";
import { ClientLogos } from "../components/home/ClientLogos";
import servicesData from "../data/services.json";
import settingsData from "../data/settings.json";

export const Home: React.FC = () => {
  const services = servicesData.services.slice(0, 4).map((service) => ({
    ...service,
    icon: getServiceIcon(service.id),
    href: `/services/${service.id}`,
  }));

  const stats = [
    { number: "500+", label: "Healthcare Practices Served" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Support Availability" },
    { number: "15+", label: "Years of Experience" },
  ];

  const heroData = settingsData.hero;

  function getServiceIcon(serviceId: string) {
    const iconMap: Record<string, any> = {
      "ehr-emr-support": Shield,
      "virtual-scribes": Users,
      "revenue-cycle": TrendingUp,
      "medical-coding": CheckCircle,
      "clinical-staffing": Users,
    };
    return iconMap[serviceId] || Shield;
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium Expert Version */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content - 7 columns */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 lg:mb-8">
                Streamline Your{" "}
                <span className="text-accent-400">Workflow</span>. Delight Your
                Patients.
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-200 mb-8 lg:mb-12 leading-relaxed max-w-2xl">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Link
                  to="/consultation"
                  className="bg-accent-500 hover:bg-accent-400 text-white px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl transition-all duration-200 flex items-center justify-center group shadow-2xl hover:shadow-accent-500/25 hover:scale-105"
                >
                  {heroData.ctaText}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl transition-all duration-200 text-center hover:scale-105"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Premium Tile - 5 columns */}
            <div className="relative order-1 lg:order-2 lg:col-span-5">
              {/* Main Premium Tile */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-green-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main tile container */}
                <div className="relative bg-white/98 backdrop-blur-xl rounded-3xl p-8 lg:p-10 xl:p-12 shadow-2xl border border-white/30 overflow-hidden transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/60 to-accent-50/80 rounded-3xl"></div>

                  {/* Floating geometric elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-accent-400/40 rounded-full animate-ping"></div>
                  <div className="absolute top-12 right-12 w-2 h-2 bg-primary-400/40 rounded-full animate-ping delay-500"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>

                  {/* Premium header with sparkle effect */}
                  <div className="relative mb-8 lg:mb-10">
                    <div className="flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 lg:w-7 lg:h-7 text-accent-500 mr-2 animate-pulse" />
                      <h3 className="text-lg lg:text-xl font-bold text-primary-900 tracking-wide">
                        Why Choose Vedha?
                      </h3>
                      <Sparkles className="w-6 h-6 lg:w-7 lg:h-7 text-accent-500 ml-2 animate-pulse delay-300" />
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"></div>
                  </div>

                  <div className="relative space-y-8 lg:space-y-10">
                    {/* Security Pillar - Enhanced */}
                    <div className="group/item cursor-pointer transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-5 lg:space-x-6">
                        <div className="relative">
                          <div className="w-18 h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-xl group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-400 relative overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                            <Shield className="w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-white relative z-10" />
                            {/* Animated ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover/item:border-white/60 transition-colors duration-300"></div>
                          </div>
                          {/* Floating badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary-900 text-xl lg:text-2xl xl:text-2xl mb-2 group-hover/item:text-primary-700 transition-colors duration-300 flex items-center">
                            Security
                            <Zap className="w-5 h-5 ml-2 text-accent-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          </h4>
                          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed group-hover/item:text-neutral-700 transition-colors duration-300">
                            Bank-level encryption & HIPAA compliance
                          </p>
                          {/* Progress bar */}
                          <div className="mt-3 w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full w-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700 origin-left"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Support Pillar - Enhanced */}
                    <div className="group/item cursor-pointer transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-5 lg:space-x-6">
                        <div className="relative">
                          <div className="w-18 h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 rounded-2xl flex items-center justify-center shadow-xl group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-400 relative overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                            <Clock className="w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-white relative z-10" />
                            {/* Animated ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover/item:border-white/60 transition-colors duration-300"></div>
                          </div>
                          {/* Floating badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-bold">
                              24
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary-900 text-xl lg:text-2xl xl:text-2xl mb-2 group-hover/item:text-primary-700 transition-colors duration-300 flex items-center">
                            Support
                            <Zap className="w-5 h-5 ml-2 text-accent-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          </h4>
                          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed group-hover/item:text-neutral-700 transition-colors duration-300">
                            24/7 expert assistance when you need it
                          </p>
                          {/* Progress bar */}
                          <div className="mt-3 w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full w-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700 origin-left delay-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROI Pillar - Enhanced */}
                    <div className="group/item cursor-pointer transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-5 lg:space-x-6">
                        <div className="relative">
                          <div className="w-18 h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-xl group-hover/item:shadow-2xl group-hover/item:scale-110 transition-all duration-400 relative overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                            <TrendingUp className="w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-white relative z-10" />
                            {/* Animated ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover/item:border-white/60 transition-colors duration-300"></div>
                          </div>
                          {/* Floating badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-bold">
                              %
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary-900 text-xl lg:text-2xl xl:text-2xl mb-2 group-hover/item:text-primary-700 transition-colors duration-300 flex items-center">
                            ROI
                            <Zap className="w-5 h-5 ml-2 text-accent-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          </h4>
                          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed group-hover/item:text-neutral-700 transition-colors duration-300">
                            Proven 25%+ revenue increase guaranteed
                          </p>
                          {/* Progress bar */}
                          <div className="mt-3 w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full w-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700 origin-left delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium footer with animated elements */}
                  <div className="relative mt-8 lg:mt-10 pt-6 border-t border-neutral-200/50">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Star className="w-4 h-4 text-accent-500 fill-current" />
                        <span className="font-medium">98% Satisfaction</span>
                      </div>
                      <div className="w-1 h-4 bg-neutral-300 rounded-full"></div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Users className="w-4 h-4 text-primary-500" />
                        <span className="font-medium">500+ Practices</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom premium accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-green-500 rounded-b-3xl opacity-80"></div>

                  {/* Animated corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-400/10 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-400/10 to-transparent rounded-3xl"></div>
                </div>
              </div>

              {/* Additional floating elements for premium feel */}
              <div className="hidden lg:block absolute -top-12 -right-12 w-8 h-8 bg-accent-400/20 rounded-full animate-bounce delay-500 blur-sm"></div>
              <div className="hidden lg:block absolute -bottom-16 -left-16 w-12 h-12 bg-primary-400/20 rounded-full animate-bounce delay-1500 blur-sm"></div>
              <div className="hidden xl:block absolute top-1/2 -right-20 w-6 h-6 bg-green-400/30 rounded-full animate-pulse delay-1000"></div>

              {/* Enhanced outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-accent-400/10 to-green-400/10 rounded-3xl blur-3xl -z-10 transform scale-150 opacity-60"></div>
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
                <div className="text-neutral-600 font-medium">{stat.label}</div>
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
              From EHR optimization to virtual scribes, we provide the
              technology and support your practice needs to operate efficiently
              and deliver exceptional patient care.
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
            Join hundreds of healthcare practices that trust Vedha Solutions for
            their technology needs. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
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
