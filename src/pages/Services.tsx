import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  UserCheck, 
  ArrowRight, 
  Clock, 
  Award, 
  Zap 
} from 'lucide-react';
import servicesData from '../data/services.json';

export const Services: React.FC = () => {
  const services = servicesData.services.map(service => ({
    ...service,
    icon: getServiceIcon(service.id)
  }));

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '15+ years of specialized healthcare technology experience'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with all healthcare regulations and standards'
    },
    {
      icon: Zap,
      title: 'Proven Results',
      description: '98% client satisfaction rate with measurable improvements'
    }
  ];

  function getServiceIcon(serviceId: string) {
    const iconMap: Record<string, any> = {
      'ehr-emr-support': Shield,
      'virtual-scribes': Users,
      'revenue-cycle': TrendingUp,
      'medical-coding': CheckCircle,
      'clinical-staffing': UserCheck
    };
    return iconMap[serviceId] || Shield;
  }

  const getColorClasses = (index: number) => {
    const colors = [
      'bg-primary-100 text-primary-600 hover:bg-primary-500 hover:text-white',
      'bg-accent-100 text-accent-600 hover:bg-accent-500 hover:text-white',
      'bg-green-100 text-green-600 hover:bg-green-500 hover:text-white',
      'bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white',
      'bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white'
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Healthcare Solutions That Deliver Results
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed mb-8">
              From EHR optimization to virtual scribes, we provide comprehensive technology solutions 
              and expert services that help healthcare practices operate more efficiently and profitably.
            </p>
            <Link
              to="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tailored solutions designed specifically for small and mid-sized medical practices.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(index)} transition-all duration-200`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-neutral-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-neutral-600">
                              <TrendingUp className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="rounded-2xl shadow-soft-lg w-full"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-soft-lg">
                        <div className="text-primary-500 font-bold text-lg">
                          {service.stats[0]?.number || '40%'}
                        </div>
                        <div className="text-neutral-600 text-sm">
                          Average Improvement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Why Choose Vedha Solutions?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're more than just a service provider - we're your strategic partner in healthcare innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Practice?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Let's discuss how our solutions can help your practice operate more efficiently 
            and profitably. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200"
            >
              Request Free Consultation
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
    </>
  );
};