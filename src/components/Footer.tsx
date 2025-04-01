
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
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
              Premium water delivery, tank cleaning, and exhauster services for homes and businesses throughout Nairobi and surrounding areas.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              {/* Email */}
              <a 
                href="mailto:desireventuresltd@gmail.com" 
                className="hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              
              {/* Phone */}
              <a 
                href="tel:+254727023350" 
                className="hover:text-primary-500 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/254706274350" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <div className="bg-[#25D366] rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Our Services */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Water Delivery
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Tank & Reservoir Cleaning
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Exhauster Services
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Emergency Water Supply
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Water Testing & Treatment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Service Areas
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Testimonials
                </a>
              </li>
              <li>
                <a onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Lavington Green Mall, Off James Gichuru road, Nairobi, Kenya</span>
              </div>
              <p className="pl-7">P.O Box. 756-00100 Nairobi</p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:desireventuresltd@gmail.com" className="hover:text-primary-500 transition-colors">
                  desireventuresltd@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+254727023350" className="hover:text-primary-500 transition-colors">
                  (+254) 0727023350
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-[#25D366] rounded-full p-1 mr-2 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <a href="https://wa.me/254706274350" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                  WhatsApp: (+254) 0706274350
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and Company Tagline */}
        <div className="mt-12 pt-6 border-t border-primary-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} Desire Ventures Ltd. All rights reserved.</span>
              <Separator orientation="vertical" className="hidden md:inline-block mx-2 h-4" />
              <span>Company Director: James Macharia (CPA, ACCT)</span>
            </div>
            <p className="text-sm text-gray-400">
              Providing premium water services throughout Nairobi and beyond.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
