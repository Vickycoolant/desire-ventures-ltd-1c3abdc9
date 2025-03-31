
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-12 w-12 overflow-hidden rounded-[10px] bg-transparent flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6ad8953c-3442-4961-b239-f84d3d161a46.png" 
                  alt="Desire Ventures Logo" 
                  className="h-12 w-12 max-h-12 max-w-12 object-contain"
                />
              </div>
              <span className="text-xl font-bold">Desire Ventures Ltd.</span>
            </div>
            
            <p className="text-gray-300 mb-4">
              Desire Ventures Ltd. is a leading provider of innovative solutions, committed to excellence and client satisfaction.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Lavington Green Mall, Off James Gichuru road, Nairobi</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>desireventuresltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>(+254) 0727023350</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Consulting</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Strategy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-primary-800 border border-primary-700 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-200"
              />
              <button className="bg-primary-600 hover:bg-primary-500 py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-700 pt-6 mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Desire Ventures Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
