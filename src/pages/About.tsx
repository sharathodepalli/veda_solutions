import React from 'react';
import { Users, Target, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import teamData from '../data/team.json';
import settingsData from '../data/settings.json';

export const About: React.FC = () => {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small healthcare technology consulting firm with a vision to transform medical practices.'
    },
    {
      year: '2012',
      title: 'EHR Specialization',
      description: 'Became certified partners with major EHR vendors and developed specialized optimization services.'
    },
    {
      year: '2015',
      title: 'Virtual Scribe Launch',
      description: 'Introduced virtual medical scribe services, revolutionizing documentation for healthcare providers.'
    },
    {
      year: '2018',
      title: 'Revenue Cycle Focus',
      description: 'Expanded services to include comprehensive revenue cycle management and medical coding.'
    },
    {
      year: '2021',
      title: 'National Expansion',
      description: 'Grew to serve over 300 healthcare practices across the United States.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Pioneered AI-powered solutions for clinical documentation and practice management.'
    }
  ];

  const team = teamData.team;

  const values = [
    {
      icon: Target,
      title: 'Patient-Centered Focus',
      description: 'Everything we do is designed to help healthcare providers deliver better patient care.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards of quality and professionalism in all our solutions.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, understanding your unique challenges and goals.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Our track record speaks for itself - measurable improvements in efficiency and revenue.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Empowering Healthcare Through Innovation
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              For over 15 years, Vedha Solutions has been the trusted partner for healthcare practices 
              seeking to optimize their operations, improve patient care, and maximize their potential 
              through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-8">Our Mission</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                To empower small and mid-sized medical practices with innovative technology solutions 
                and expert support services that enhance operational efficiency, improve patient outcomes, 
                and drive sustainable growth.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We believe that every healthcare practice, regardless of size, deserves access to 
                enterprise-level technology and support that enables them to focus on what they do 
                best - caring for patients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Healthcare professionals collaborating"
                className="rounded-2xl shadow-soft-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-soft-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Practices Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Our Journey</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner for healthcare practices nationwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft">
                      <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-3">{milestone.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our mission to transform healthcare practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-soft"
                />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-4">{member.title}</div>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Join the hundreds of healthcare practices that have already experienced the Vedha Solutions difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-quote"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};