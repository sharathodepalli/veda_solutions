import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Stethoscope,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import settingsData from "../../data/settings.json";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { contact, social } = settingsData;

  const services = [
    { name: "EHR/EMR Support", href: "/services/ehr-emr-support" },
    { name: "Virtual Medical Scribes", href: "/services/virtual-scribes" },
    { name: "Revenue Cycle Management", href: "/services/revenue-cycle" },
    { name: "Medical Coding & Auditing", href: "/services/medical-coding" },
    { name: "Clinical Staffing", href: "/services/clinical-staffing" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
  ];

  const support = [
    { name: "Contact Us", href: "/contact" },
    { name: "Client Portal", href: "/client-portal" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Vedha Solutions</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Empowering healthcare practices with innovative technology
              solutions and expert support services. Your trusted partner for
              EHR optimization, virtual scribes, and revenue cycle management.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">{contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-neutral-300">
                  {contact.address.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < contact.address.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-neutral-400 text-sm">
              © {currentYear} Vedha Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
