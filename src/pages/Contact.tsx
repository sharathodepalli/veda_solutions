import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import settingsData from "../data/settings.json";

// FIXED: Added a type annotation for the 'data' parameter.
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    contactMethod: "email",
    // Honeypot field for spam protection
    "bot-field": "",
  });

  const { contact } = settingsData;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FIXED: The manual submission handler using fetch, targeting the correct URL.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default browser form submission

    // Manually submit the form data to Netlify, targeting the form's page URL.
    fetch("/contact", {
      // CHANGED: Target the correct page path
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact", // The form name from your hidden stub
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-200 leading-relaxed">
            Ready to transform your healthcare practice? Our team of experts is
            here to help. Contact us today to discuss your specific needs and
            discover how we can support your success.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                Contact Information
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We're here to help you optimize your practice operations and
                improve patient care. Reach out to us through any of the
                following methods.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-neutral-600 mb-1">
                      Main: {contact.phone}
                    </p>
                    <p className="text-sm text-neutral-500">
                      Monday - Friday: 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      Email
                    </h3>
                    <p className="text-neutral-600 mb-1">
                      General: {contact.email}
                    </p>
                    <p className="text-sm text-neutral-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      Address
                    </h3>
                    <p className="text-neutral-600">
                      {contact.address.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < contact.address.split("\n").length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      Business Hours
                    </h3>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-primary-600 font-medium">
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="/consultation"
                    className="flex-1 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-center"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                Send Us a Message
              </h2>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="_redirect" value="/thank-you/" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Company/Practice Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="ehr-support">EHR/EMR Support</option>
                    <option value="virtual-scribes">
                      Virtual Medical Scribes
                    </option>
                    <option value="revenue-cycle">
                      Revenue Cycle Management
                    </option>
                    <option value="medical-coding">
                      Medical Coding & Auditing
                    </option>
                    <option value="staffing">Clinical Staffing</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="billing-question">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry, including your practice size, current challenges, and how we can help..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-neutral-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-neutral-700">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="both"
                        checked={formData.contactMethod === "both"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-neutral-700">Both</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  consent to be contacted by Vedha Solutions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-neutral-600">
              Located in Farmington Hills, Michigan, we're easily accessible for
              in-person consultations.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-soft-lg">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.8234567890123!2d-83.3776543!3d42.4984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ac7e8b123456%3A0x1234567890abcdef!2s35325%20Drakeshire%20Ln%2C%20Farmington%20Hills%2C%20MI%2048335!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vedha Solutions Office Location"
              ></iframe>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Address
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {contact.address.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < contact.address.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Office Hours
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Mon-Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">Phone</h3>
                  <p className="text-neutral-600 text-sm">
                    {contact.phone}
                    <br />
                    24/7 Emergency Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
