import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Clock, Users, Star } from 'lucide-react';

const subscriptionPlans = [
  {
    id: 'basic',
    name: 'Basic Support',
    price: '$299',
    period: 'per month',
    description: 'Essential support for small practices',
    features: [
      'Business hours support (8AM-6PM)',
      'Basic EHR configuration',
      'Email and phone support',
      'Monthly system check-ins',
      'Basic reporting',
      'Up to 5 users'
    ],
    popular: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$599',
    period: 'per month',
    description: 'Comprehensive support for growing practices',
    features: [
      '24/7 priority support',
      'Advanced workflow optimization',
      'Custom template creation',
      'Weekly performance reviews',
      'Advanced analytics & reporting',
      'Staff training included',
      'Up to 15 users'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Full-service solution for large practices',
    features: [
      'Dedicated support team',
      'Complete system optimization',
      'Priority emergency support',
      'Daily system monitoring',
      'Custom integrations',
      'Unlimited users',
      'On-site training available'
    ],
    popular: false
  }
];

const addOnServices = [
  { id: 'virtual-scribes', name: 'Virtual Medical Scribes', price: '$15-18/hour' },
  { id: 'revenue-cycle', name: 'Revenue Cycle Management', price: '4-6% of collections' },
  { id: 'medical-coding', name: 'Medical Coding & Auditing', price: '$1,299/month' },
  { id: 'clinical-staffing', name: 'Clinical Staffing', price: '$28-55/hour' }
];

export const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    practiceName: '',
    practiceType: '',
    practiceSize: '',
    selectedPlan: '',
    addOnServices: [] as string[],
    currentEHR: '',
    currentChallenges: '',
    startDate: '',
    billingContact: '',
    billingEmail: '',
    specialRequests: '',
    agreedToTerms: false,
    // Honeypot field for spam protection
    'bot-field': ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'agreedToTerms') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle add-on services
        setFormData(prev => ({
          ...prev,
          addOnServices: checked
            ? [...prev.addOnServices, value]
            : prev.addOnServices.filter(service => service !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Healthcare Technology Plan
          </h1>
          <p className="text-xl text-neutral-200 leading-relaxed mb-8">
            Select the perfect plan for your practice and start optimizing your operations today. 
            All plans include our comprehensive support and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Flexible Plans for Every Practice
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice size and needs. All plans include our core features with varying levels of support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-2xl p-8 shadow-soft ${plan.popular ? 'ring-2 ring-primary-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{plan.price}</div>
                  <div className="text-neutral-500">{plan.period}</div>
                  <p className="text-neutral-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Start Your Subscription
              </h2>
              <p className="text-lg text-neutral-600">
                Complete the form below to get started with your chosen plan.
              </p>
            </div>

            <form 
              name="subscription"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-8"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="subscription" />
              
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human:
                  <input 
                    name="bot-field" 
                    value={formData['bot-field']}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Plan Selection */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Select Your Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {subscriptionPlans.map((plan) => (
                    <label key={plan.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="selectedPlan"
                        value={plan.id}
                        checked={formData.selectedPlan === plan.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                        formData.selectedPlan === plan.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}>
                        <div className="text-center">
                          <h4 className="font-semibold text-primary-900">{plan.name}</h4>
                          <div className="text-lg font-bold text-primary-600">{plan.price}</div>
                          <div className="text-sm text-neutral-500">{plan.period}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Add-on Services (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnServices.map((service) => (
                    <label key={service.id} className="flex items-center space-x-3 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 cursor-pointer">
                      <input
                        type="checkbox"
                        name="addOnServices"
                        value={service.id}
                        checked={formData.addOnServices.includes(service.id)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary-500 rounded focus:ring-primary-500"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900">{service.name}</div>
                        <div className="text-sm text-neutral-600">{service.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Practice Name *</label>
                    <input
                      type="text"
                      name="practiceName"
                      required
                      value={formData.practiceName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Practice Details */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Practice Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Practice Type</label>
                    <select
                      name="practiceType"
                      value={formData.practiceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select practice type</option>
                      <option value="family-medicine">Family Medicine</option>
                      <option value="internal-medicine">Internal Medicine</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Practice Size</label>
                    <select
                      name="practiceSize"
                      value={formData.practiceSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select practice size</option>
                      <option value="1-2">1-2 Providers</option>
                      <option value="3-5">3-5 Providers</option>
                      <option value="6-10">6-10 Providers</option>
                      <option value="11-20">11-20 Providers</option>
                      <option value="20+">20+ Providers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Current EHR System</label>
                    <input
                      type="text"
                      name="currentEHR"
                      value={formData.currentEHR}
                      onChange={handleInputChange}
                      placeholder="e.g., Epic, Cerner, eClinicalWorks"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Billing Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Billing Contact Name</label>
                    <input
                      type="text"
                      name="billingContact"
                      value={formData.billingContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Billing Email</label>
                    <input
                      type="email"
                      name="billingEmail"
                      value={formData.billingEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">Additional Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Current Challenges</label>
                    <textarea
                      name="currentChallenges"
                      rows={3}
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      placeholder="What challenges is your practice currently facing?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or requests for your implementation?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 text-primary-500 rounded focus:ring-primary-500 mt-0.5"
                  />
                  <div className="text-sm text-neutral-700">
                    I agree to the <a href="/terms" className="text-primary-500 hover:text-primary-600">Terms of Service</a> and <a href="/privacy" className="text-primary-500 hover:text-primary-600">Privacy Policy</a>. I understand that this subscription will auto-renew monthly and can be cancelled at any time with 30 days notice.
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!formData.agreedToTerms || !formData.selectedPlan}
                  className="bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center"
                >
                  Start Subscription
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-neutral-500 mt-4">
                  You'll receive a confirmation email with next steps and billing information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">HIPAA Compliant</h3>
              <p className="text-neutral-600 text-sm">Fully secure and compliant</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">24/7 Support</h3>
              <p className="text-neutral-600 text-sm">Always here when you need us</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">500+ Practices</h3>
              <p className="text-neutral-600 text-sm">Trusted by healthcare providers</p>
            </div>
            <div>
              <Star className="w-12 h-12 text-accent-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">98% Satisfaction</h3>
              <p className="text-neutral-600 text-sm">Proven client satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};