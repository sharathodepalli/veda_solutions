import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'EHR/EMR Support', href: '/services/ehr-emr-support' },
        { name: 'Virtual Medical Scribes', href: '/services/virtual-scribes' },
        { name: 'Revenue Cycle Management', href: '/services/revenue-cycle' },
        { name: 'Medical Coding & Auditing', href: '/services/medical-coding' },
        { name: 'Clinical Staffing', href: '/services/clinical-staffing' },
      ]
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/services') {
      return location.pathname === '/services' || location.pathname.startsWith('/services/');
    }
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServicesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-900 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary-900">Vedha Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={servicesRef}
                    className="relative"
                  >
                    <button
                      onClick={handleServicesClick}
                      onKeyDown={handleServicesKeyDown}
                      className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href) ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                      }`}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-soft-lg border border-neutral-100 py-2 z-50">
                        <Link
                          to="/services"
                          className="block px-4 py-3 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-neutral-50 transition-colors duration-200 border-b border-neutral-100"
                        >
                          All Services
                        </Link>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href) ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/client-portal"
              className="text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors duration-200"
            >
              Client Portal
            </Link>
            <Link
              to="/request-quote"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-neutral-700 hover:text-primary-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 pt-4 pb-6">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href) ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2">
              <Link
                to="/client-portal"
                className="block px-3 py-2 text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </Link>
              <Link
                to="/request-quote"
                className="block mx-3 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-xl text-sm font-medium text-center transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};