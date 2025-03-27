
import { useEffect } from 'react';
import { Shield, Droplet, Clock, Users } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-water-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">About Desire Ventures</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            We're a dedicated team of water service professionals committed to delivering exceptional 
            quality and reliability to homes and businesses throughout Nairobi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 rounded-full bg-primary-100 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-primary-200 z-0"></div>
              
              <div className="glass-card p-3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                  alt="Water delivery team" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="reveal reveal-delay-3">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Desire Ventures, we're on a mission to solve water accessibility challenges by providing 
              reliable, high-quality water services. Under the leadership of our Company Director, 
              James Macharia (CPA, ACCT), we've built a reputation for excellence in water delivery, 
              tank cleaning, and exhauster services.
            </p>
            
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6">
              We combine the latest technology with exceptional customer service to deliver water solutions 
              that exceed expectations. Our team of trained professionals ensures that every service is 
              performed with the highest standards of quality and safety.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center bg-primary-50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <p className="font-semibold text-primary-800 text-lg">20+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              
              <div className="flex flex-col items-center bg-primary-50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <p className="font-semibold text-primary-800 text-lg">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              
              <div className="flex flex-col items-center bg-primary-50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Droplet className="h-6 w-6 text-primary-600" />
                </div>
                <p className="font-semibold text-primary-800 text-lg">1000+</p>
                <p className="text-sm text-gray-600">Deliveries Monthly</p>
              </div>
              
              <div className="flex flex-col items-center bg-primary-50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <p className="font-semibold text-primary-800 text-lg">24/7</p>
                <p className="text-sm text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team Section */}
        <div className="mt-20 reveal reveal-delay-4">
          <h3 className="text-2xl font-bold text-center text-primary-800 mb-10">Our Leadership</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="glass-card p-6 max-w-sm">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-300/60 to-primary-600/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">JM</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-center text-primary-800 mb-2">James Macharia</h4>
              <p className="text-center text-primary-600 mb-4">Company Director (CPA, ACCT)</p>
              <p className="text-gray-700 text-center">
                With extensive experience in water resource management and business administration, 
                James leads our team with a commitment to excellence and customer satisfaction.
              </p>
              
              <div className="flex justify-center mt-6 space-x-4">
                <a 
                  href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:desireventuresltd@gmail.com" 
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="max-w-md">
              <div className="glass-card p-6">
                <h4 className="text-xl font-bold text-primary-800 mb-4">Why Our Team Excels</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Professional Expertise</p>
                      <p className="text-gray-600 text-sm mt-1">Our team is certified and continuously trained in the latest water treatment methods and safety protocols.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Reliability</p>
                      <p className="text-gray-600 text-sm mt-1">We pride ourselves on punctuality and dependability, ensuring water delivery exactly when you need it.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Customer-Focused</p>
                      <p className="text-gray-600 text-sm mt-1">We listen to your specific needs and tailor our services to provide personalized water solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Innovative Approach</p>
                      <p className="text-gray-600 text-sm mt-1">We continuously improve our equipment and methods to provide the most efficient water services possible.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
