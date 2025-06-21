import React, { useState } from 'react';
import { MapPin, Clock, Users, DollarSign, Mail, Phone, ArrowRight } from 'lucide-react';
import jobsData from '../data/jobs.json';

const benefits = [
  "Competitive salaries and performance-based bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) retirement plan with company matching",
  "Flexible work arrangements and remote opportunities",
  "Professional development and continuing education support",
  "Paid time off and holiday benefits",
  "Career advancement opportunities",
  "Collaborative and supportive work environment"
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplication, setShowApplication] = useState(false);
  
  const jobs = jobsData.jobs;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Mission to Transform Healthcare
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed mb-8">
              Be part of a team that's making a real difference in healthcare. We're looking for 
              passionate professionals who share our commitment to improving patient care through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="#why-vedha"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200"
              >
                Why Work With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vedha Section */}
      <section id="why-vedha" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Why Choose Vedha Solutions?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're not just building a company - we're building a community of healthcare innovators 
              committed to making a positive impact on medical practices nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Collaborative Culture</h3>
              <p className="text-neutral-600">Work with passionate professionals in a supportive, team-oriented environment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Growth Opportunities</h3>
              <p className="text-neutral-600">Advance your career with ongoing training, mentorship, and leadership development.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Work-Life Balance</h3>
              <p className="text-neutral-600">Flexible schedules and remote work options to help you thrive personally and professionally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Competitive Benefits</h3>
              <p className="text-neutral-600">Comprehensive compensation packages including health benefits and retirement plans.</p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Employee Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our open positions and find the perfect role to advance your career in healthcare technology.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-primary-900">{job.title}</h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 leading-relaxed mb-4">{job.description}</p>
                    
                    <div className="text-sm text-neutral-500">
                      Posted: {formatDate(job.posted)}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button
                      onClick={() => handleApply(job)}
                      className="w-full lg:w-auto bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplication && selectedJob && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary-900">Apply for {selectedJob.title}</h2>
                <button
                  onClick={() => setShowApplication(false)}
                  className="text-neutral-500 hover:text-neutral-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Job Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.requirements.map((req: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Application Form</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Resume/CV *</label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Cover Letter</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us why you're interested in this position..."
                      ></textarea>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
                      >
                        Submit Application
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowApplication(false)}
                        className="px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@vedhasolutions.com"
              className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Your Resume
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};