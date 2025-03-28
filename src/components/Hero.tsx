
import React, { useEffect } from 'react';

const Hero = () => {
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
    <section id="hero" className="water-bg py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-100 opacity-10 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in-view">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
              Your Trusted Partner for <span className="text-gradient">Water Solutions</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Reliable water delivery, professional tank cleaning, and efficient exhauster services for Nairobi and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://wa.me/254706274350?text=Hello%20Desire%20Ventures!%20I%20would%20like%20to%20check%20water%20availability%20in%20my%20area." 
                target="_blank"
                rel="noopener noreferrer"
                className="water-btn group"
              >
                Check Availability
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a 
                href="#services" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="relative fade-in-view">
            <img 
              src="/lovable-uploads/4e75494b-98a5-4ca3-889c-7a9c7c9799c7.webp"
              alt="Water Delivery Truck"
              className="rounded-lg shadow-xl img-overlay image-fade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
