
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-water-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 overflow-hidden rounded-[10px] bg-white flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2ab55cc8-3c4c-4e7a-9716-af191f2e6fad.png" 
                  alt="Desire Ventures Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Desire Ventures Ltd.</h3>
            </div>
            
            <p className="text-white/80 mb-6">
              Premium water delivery, tank cleaning, and exhauster services for homes and businesses 
              throughout Nairobi and surrounding areas.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:desireventuresltd@gmail.com" 
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a 
                href="tel:+254727023350" 
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a 
                href="https://wa.me/254706274350" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Water Delivery
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Tank & Reservoir Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Exhauster Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Emergency Water Supply
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Water Testing & Treatment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#areas" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#clients" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="text-white/80">Lavington Green Mall,</p>
                  <p className="text-white/80">Off James Gichuru road,</p>
                  <p className="text-white/80">Nairobi, Kenya</p>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-white/80">desireventuresltd@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-white/80">(+254) 0727023350</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347z" />
                </svg>
                <span className="text-white/80">WhatsApp: (+254) 0706274350</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-white/80">P.O Box. 756 - 00100 Nairobi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p className="hidden md:flex justify-center items-center flex-wrap">
            <span>&copy; {new Date().getFullYear()} Desire Ventures Ltd. All rights reserved.</span>
            <span className="mx-2 h-4 border-l border-white/20"></span>
            <span>Company Director: James Macharia (CPA, ACCT)</span>
            <span className="mx-2 h-4 border-l border-white/20"></span>
            <span>Providing premium water services throughout Nairobi and beyond.</span>
          </p>
          
          {/* Mobile view */}
          <div className="md:hidden space-y-2">
            <p>&copy; {new Date().getFullYear()} Desire Ventures Ltd. All rights reserved.</p>
            <p>Company Director: James Macharia (CPA, ACCT)</p>
            <p>Providing premium water services throughout Nairobi and beyond.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
