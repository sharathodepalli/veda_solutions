import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-soft-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-primary-900 mb-4">
            Thank You for Your Submission!
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            We've received your request and will be in touch within 24 hours 
            to discuss how we can help optimize your practice operations.
          </p>
          
          <div className="bg-neutral-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <span className="text-neutral-700">Our team will review your requirements and prepare a customized consultation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <span className="text-neutral-700">We'll schedule a convenient time to discuss your practice's specific needs</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <span className="text-neutral-700">You'll receive a detailed proposal with pricing and implementation timeline</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-900 mb-1">Need Immediate Help?</h4>
              <p className="text-blue-700 text-sm">Call us at (571) 564-7945</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-900 mb-1">Email Support</h4>
              <p className="text-green-700 text-sm">Contact@thevedhasolutions.com</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-900 mb-1">Response Time</h4>
              <p className="text-purple-700 text-sm">Within 24 hours</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Return to Home
            </Link>
            <Link
              to="/services"
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};