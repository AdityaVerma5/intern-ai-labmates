
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold text-white font-display">Labmates</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Improving research culture by connecting professors with student interns through AI-based screening.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/for-professors" className="text-gray-300 hover:text-secondary transition-colors">
                  For Professors
                </Link>
              </li>
              <li>
                <Link to="/for-students" className="text-gray-300 hover:text-secondary transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-secondary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-secondary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-gray-300">
                  123 Research Avenue, Bangalore, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">contact@labmates.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Labmates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
