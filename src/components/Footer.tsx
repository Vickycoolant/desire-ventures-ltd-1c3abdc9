
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
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
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
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
                <a href="#" className="hover:text-primary-500 transition-colors">Water Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Exhauster Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Tank Cleaning</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Pool Cleaning</a>
              </li>
            </ul>
          </div>
          
          {/* Contacts */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
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
              <div className="flex items-center space-x-2 text-gray-300 mt-1">
                <Phone className="h-5 w-5" />
                <span>(WhatsApp): (+254) 0706274350</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-700 pt-6 mt-8 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <span>&copy; {new Date().getFullYear()} Desire Ventures Ltd. All rights reserved.</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>Director: John Doe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
