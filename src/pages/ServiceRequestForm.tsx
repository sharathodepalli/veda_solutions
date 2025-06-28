import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Award,
} from "lucide-react";

// ADD THIS: A utility function to encode form data for submission
const encode = (data: Record<string, string | string[]>) => {
  return Object.keys(data)
    .map((key) => {
      const value = data[key];
      // Handle arrays of values (like the 'services' checkbox group)
      if (Array.isArray(value)) {
        return value
          .map(
            (item) => encodeURIComponent(key) + "[]=" + encodeURIComponent(item)
          )
          .join("&");
      }
      return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    })
    .join("&");
};

const serviceTypes = [
  {
    id: "ehr-optimization",
    name: "EHR/EMR Optimization",
    description: "Streamline workflows and improve efficiency",
    estimatedTime: "2-4 weeks",
  },
  {
    id: "virtual-scribes",
    name: "Virtual Medical Scribes",
    description: "Real-time documentation support",
    estimatedTime: "1-2 weeks",
  },
  {
    id: "revenue-cycle",
    name: "Revenue Cycle Management",
    description: "End-to-end billing and collections",
    estimatedTime: "2-3 weeks",
  },
  {
    id: "medical-coding",
    name: "Medical Coding & Auditing",
    description: "Ensure accuracy and compliance",
    estimatedTime: "1-2 weeks",
  },
  {
    id: "clinical-staffing",
    name: "Clinical Staffing",
    description: "Temporary and permanent placements",
    estimatedTime: "24-48 hours",
  },
  {
    id: "consultation",
    name: "Expert Consultation",
    description: "Strategic guidance and planning",
    estimatedTime: "1 week",
  },
];

const urgencyLevels = [
  {
    id: "low",
    name: "Low Priority",
    description: "Can wait 2-4 weeks",
    color: "text-green-600 bg-green-50",
  },
  {
    id: "medium",
    name: "Medium Priority",
    description: "Needed within 1-2 weeks",
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    id: "high",
    name: "High Priority",
    description: "Needed within days",
    color: "text-orange-600 bg-orange-50",
  },
  {
    id: "urgent",
    name: "Urgent",
    description: "Immediate attention required",
    color: "text-red-600 bg-red-50",
  },
];

export const ServiceRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    practiceName: "",
    practiceType: "",
    practiceSize: "",
    serviceType: "",
    urgency: "",
    projectDescription: "",
    currentSituation: "",
    desiredOutcome: "",
    timeline: "",
    budget: "",
    additionalRequirements: "",
    preferredStartDate: "",
    contactMethod: "email",
    hearAboutUs: "",
    // Honeypot field for spam protection
    "bot-field": "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedService = serviceTypes.find(
    (service) => service.id === formData.serviceType
  );

  // ADD THIS: The manual submission handler using fetch
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default browser form submission

    // Manually submit the form data to your universal Netlify Function
    fetch("/.netlify/functions/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "service-request", // This form's name is 'service-request'
        ...formData,
      }),
    })
      .then(() => {
        // Redirect on successful submission
        window.location.href = "/thank-you/";
      })
      .catch((error) => alert(`Form submission failed: ${error}`));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Request Healthcare Technology Services
          </h1>
          <p className="text-xl text-neutral-200 leading-relaxed mb-8">
            Tell us about your specific needs and we'll create a customized
            solution for your practice. Our experts will review your request and
            provide a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Free project assessment</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Detailed proposal within 24 hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>No obligation to proceed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Our Healthcare Technology Services
            </h2>
            <p className="text-neutral-600">
              Choose the service that best fits your practice needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service) => (
              <div
                key={service.id}
                className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-colors duration-200"
              >
                <h3 className="font-semibold text-primary-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center text-xs text-neutral-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Typical setup: {service.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Service Request Details
              </h2>
              <p className="text-lg text-neutral-600">
                Provide as much detail as possible to help us create the perfect
                solution for your practice.
              </p>
            </div>

            <form
              name="service-request"
              method="POST"
              // REMOVE THIS: action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-8"
              // ADD THIS: The onSubmit handler to trigger the fetch call
              onSubmit={handleSubmit}
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="service-request" />

              {/* Honeypot field for spam protection */}
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:
                  <input
                    name="bot-field"
                    value={formData["bot-field"]}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Service Type *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <label key={service.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={formData.serviceType === service.id}
                        onChange={handleInputChange}
                        required
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                          formData.serviceType === service.id
                            ? "border-primary-500 bg-primary-50"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <h4 className="font-semibold text-primary-900 mb-2">
                          {service.name}
                        </h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          {service.description}
                        </p>
                        <div className="flex items-center text-xs text-neutral-500">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{service.estimatedTime}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Priority Level *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {urgencyLevels.map((level) => (
                    <label key={level.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.id}
                        checked={formData.urgency === level.id}
                        onChange={handleInputChange}
                        required
                        className="sr-only"
                      />
                      <div
                        className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                          formData.urgency === level.id
                            ? "border-primary-500 bg-primary-50"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${level.color}`}
                        >
                          {level.name}
                        </div>
                        <p className="text-sm text-neutral-600">
                          {level.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
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
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
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
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
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
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
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
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Practice Manager, Physician, Administrator"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Practice Name *
                    </label>
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

              {/* Practice Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Practice Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Practice Type
                    </label>
                    <select
                      name="practiceType"
                      value={formData.practiceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select practice type</option>
                      <option value="family-medicine">Family Medicine</option>
                      <option value="internal-medicine">
                        Internal Medicine
                      </option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="psychiatry">Psychiatry</option>
                      <option value="surgery">Surgery</option>
                      <option value="urgent-care">Urgent Care</option>
                      <option value="multi-specialty">Multi-Specialty</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Practice Size
                    </label>
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
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Project Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Describe what you need help with in detail..."
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Current Situation
                    </label>
                    <textarea
                      name="currentSituation"
                      rows={3}
                      value={formData.currentSituation}
                      onChange={handleInputChange}
                      placeholder="What challenges are you currently facing? What systems/processes are you using now?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Desired Outcome
                    </label>
                    <textarea
                      name="desiredOutcome"
                      rows={3}
                      value={formData.desiredOutcome}
                      onChange={handleInputChange}
                      placeholder="What would success look like? What specific goals do you want to achieve?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline and Budget */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Timeline & Budget
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">
                        Immediate (within 1 week)
                      </option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Additional Requirements
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Special Requirements or Constraints
                    </label>
                    <textarea
                      name="additionalRequirements"
                      rows={3}
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements, constraints, or considerations we should know about?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === "email"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-neutral-700">Email</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === "phone"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-neutral-700">Phone</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="both"
                            checked={formData.contactMethod === "both"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                          />
                          <span className="text-neutral-700">
                            Both Email and Phone
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="google-search">Google Search</option>
                        <option value="referral">
                          Referral from colleague
                        </option>
                        <option value="social-media">Social Media</option>
                        <option value="conference">Conference/Event</option>
                        <option value="existing-client">Existing client</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Summary */}
              {selectedService && (
                <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    Service Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-primary-700 font-medium">
                        Selected Service:
                      </div>
                      <div className="text-primary-900">
                        {selectedService.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-primary-700 font-medium">
                        Estimated Setup Time:
                      </div>
                      <div className="text-primary-900">
                        {selectedService.estimatedTime}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center"
                >
                  Submit Service Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-neutral-500 mt-4">
                  We'll review your request and provide a detailed proposal
                  within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-neutral-600 text-sm">
                Fully secure and compliant
              </p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">
                24-Hour Response
              </h3>
              <p className="text-neutral-600 text-sm">
                Quick turnaround on proposals
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">
                Expert Team
              </h3>
              <p className="text-neutral-600 text-sm">
                Healthcare technology specialists
              </p>
            </div>
            <div>
              <Award className="w-12 h-12 text-accent-500 mx-auto mb-3" />
              <h3 className="font-semibold text-primary-900 mb-2">
                Proven Results
              </h3>
              <p className="text-neutral-600 text-sm">
                500+ successful implementations
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
