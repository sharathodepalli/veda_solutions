import React, { useState } from "react";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Shield,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically authenticate with your backend
    console.log("Login attempt:", loginData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
  };

  if (!isLoggedIn) {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Client Portal
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed">
              Access your account, view reports, manage services, and
              communicate with our team through our secure client portal.
            </p>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                  Secure Login
                </h2>
                <p className="text-neutral-600">
                  Enter your credentials to access your client portal
                </p>
              </div>

              <form
                name="client-portal-login"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you/"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="client-portal-login"
                />
                {/* Honeypot field for spam protection */}
                <div style={{ display: "none" }}>
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={loginData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={loginData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-neutral-700">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-primary-500 hover:text-primary-600 transition-colors duration-200"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
                <p className="text-sm text-neutral-600 mb-4">
                  Don't have an account yet?
                </p>
                <a
                  href="/contact"
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Contact us to get started
                </a>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 bg-blue-50 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Security Notice
                  </h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Your data is protected with enterprise-grade security. All
                    communications are encrypted and we maintain strict HIPAA
                    compliance standards to protect your sensitive information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Dashboard view (when logged in)
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, Dr. Johnson
              </h1>
              <p className="text-neutral-300">Johnson Family Practice</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-xl transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-600 text-sm">Active Services</p>
                  <p className="text-2xl font-bold text-primary-900">3</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-600 text-sm">
                    This Month's Savings
                  </p>
                  <p className="text-2xl font-bold text-green-600">$12,450</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-600 text-sm">Support Tickets</p>
                  <p className="text-2xl font-bold text-accent-600">2</p>
                </div>
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-600 text-sm">Reports Available</p>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Services Overview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-soft mb-8">
                <h2 className="text-xl font-bold text-primary-900 mb-6">
                  Active Services
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        EHR Optimization
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        Last updated: 2 days ago
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        Virtual Medical Scribes
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        Last session: Today, 3:00 PM
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        Revenue Cycle Management
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        Monthly report generated
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent Reports */}
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h2 className="text-xl font-bold text-primary-900 mb-6">
                  Recent Reports
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium text-primary-900">
                          Monthly Revenue Report - December 2024
                        </p>
                        <p className="text-neutral-600 text-sm">
                          Generated on Dec 15, 2024
                        </p>
                      </div>
                    </div>
                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium text-primary-900">
                          EHR Optimization Summary
                        </p>
                        <p className="text-neutral-600 text-sm">
                          Generated on Dec 10, 2024
                        </p>
                      </div>
                    </div>
                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                      Download
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium text-primary-900">
                          Virtual Scribe Performance Report
                        </p>
                        <p className="text-neutral-600 text-sm">
                          Generated on Dec 8, 2024
                        </p>
                      </div>
                    </div>
                    <button className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h2 className="text-xl font-bold text-primary-900 mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-xl font-medium transition-colors duration-200">
                    Request Support
                  </button>
                  <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-4 py-3 rounded-xl font-medium transition-colors duration-200">
                    Schedule Consultation
                  </button>
                  <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-4 py-3 rounded-xl font-medium transition-colors duration-200">
                    Update Account Info
                  </button>
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h2 className="text-xl font-bold text-primary-900 mb-6">
                  Recent Messages
                </h2>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <p className="font-medium text-blue-900 text-sm">
                      System Update
                    </p>
                    <p className="text-blue-700 text-sm">
                      EHR optimization completed successfully
                    </p>
                    <p className="text-blue-600 text-xs mt-1">2 hours ago</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-xl">
                    <p className="font-medium text-green-900 text-sm">
                      Support Response
                    </p>
                    <p className="text-green-700 text-sm">
                      Your ticket has been resolved
                    </p>
                    <p className="text-green-600 text-xs mt-1">1 day ago</p>
                  </div>
                </div>
              </div>

              {/* Account Manager */}
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h2 className="text-xl font-bold text-primary-900 mb-6">
                  Your Account Manager
                </h2>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Sarah Williams"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-primary-900">
                      Sarah Williams
                    </p>
                    <p className="text-neutral-600 text-sm">
                      Senior Account Manager
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-sm">
                    Send Message
                  </button>
                  <button className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-sm">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
