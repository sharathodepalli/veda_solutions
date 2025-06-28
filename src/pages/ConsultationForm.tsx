import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Users,
} from "lucide-react";

// ADD THIS: A utility function to encode form data for submission
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const consultationTypes = [
  "EHR/EMR Optimization",
  "Virtual Medical Scribes",
  "Revenue Cycle Management",
  "Medical Coding & Auditing",
  "Clinical Staffing",
  "General Consultation",
  "Multiple Services",
];

const practiceTypes = [
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Psychiatry",
  "Surgery",
  "Urgent Care",
  "Multi-Specialty",
  "Other",
];

const practiceSizes = [
  "1-2 Providers",
  "3-5 Providers",
  "6-10 Providers",
  "11-20 Providers",
  "20+ Providers",
];

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    practiceName: "",
    practiceType: "",
    practiceSize: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    currentChallenges: "",
    goals: "",
    timeline: "",
    additionalInfo: "",
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

  // ADD THIS: The manual submission handler using fetch
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default browser form submission

    // Manually submit the form data to your Netlify Function
    fetch("/.netlify/functions/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "consultation", // This is crucial for routing in your function
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
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl text-neutral-200 leading-relaxed mb-8">
            Get personalized recommendations for your practice with a 30-minute
            consultation from our healthcare technology experts. No obligation,
            just valuable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Customized recommendations</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>No sales pressure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Prefer to Talk Right Now?
            </h2>
            <p className="text-neutral-600">
              Our healthcare technology experts are ready to help
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Call Us Now
              </h3>
              <p className="text-neutral-600 mb-4">
                Speak with a consultant immediately
              </p>
              <a
                href="tel:+15715647945"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-block"
              >
                (571) 564-7945
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Email Us
              </h3>
              <p className="text-neutral-600 mb-4">
                Get detailed information via email
              </p>
              <a
                href="mailto:Contact@thevedhasolutions.com"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-block"
              >
                Send Email
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Schedule Below
              </h3>
              <p className="text-neutral-600 mb-4">
                Book a convenient time to talk
              </p>
              <a
                href="#consultation-form"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-block"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Book Your Consultation
              </h2>
              <p className="text-lg text-neutral-600">
                Tell us about your practice and we'll schedule a time that works
                for you.
              </p>
            </div>

            <form
              name="consultation"
              method="POST"
              // REMOVE THIS: action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-8"
              // ADD THIS: The onSubmit handler to trigger the fetch call
              onSubmit={handleSubmit}
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="consultation" />

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
                </div>
              </div>

              {/* Practice Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Practice Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
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
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Practice Type *
                    </label>
                    <select
                      name="practiceType"
                      required
                      value={formData.practiceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select practice type</option>
                      {practiceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Practice Size *
                    </label>
                    <select
                      name="practiceSize"
                      required
                      value={formData.practiceSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select practice size</option>
                      {practiceSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Consultation Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Consultation Type *
                    </label>
                    <select
                      name="consultationType"
                      required
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select consultation type</option>
                      {consultationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Implementation Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">
                        Immediate (within 30 days)
                      </option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Tell Us More
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Current Challenges
                    </label>
                    <textarea
                      name="currentChallenges"
                      rows={4}
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      placeholder="What challenges is your practice currently facing? (e.g., documentation time, billing issues, staff shortages)"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Goals & Objectives
                    </label>
                    <textarea
                      name="goals"
                      rows={3}
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What would you like to achieve? (e.g., reduce documentation time, increase revenue, improve efficiency)"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information you'd like us to know about your practice or specific requirements?"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Contact Preferences
                </h3>
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
                      <option value="referral">Referral from colleague</option>
                      <option value="social-media">Social Media</option>
                      <option value="conference">Conference/Event</option>
                      <option value="existing-client">Existing client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 inline-flex items-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-neutral-500 mt-4">
                  By submitting this form, you agree to our privacy policy and
                  consent to be contacted by Vedha Solutions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
