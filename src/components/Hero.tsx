
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-950/90 to-primary-800/90"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Water background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-primary-900/30 z-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 text-center">
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block reveal reveal-delay-1">Premium Water Services</span>
            <span className="block text-primary-200 reveal reveal-delay-2">For Every Need</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 reveal reveal-delay-3">
            Desire Ventures provides exceptional water delivery and cleaning services 
            with unmatched efficiency and reliability throughout Nairobi and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal reveal-delay-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="water-btn group py-4 px-8 rounded-lg text-lg"
            >
              Request Service
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 text-white border border-white/30 py-4 px-8 rounded-lg text-lg backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Services
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
          onClick={scrollToServices}
        >
          <ChevronDown size={36} />
        </div>
      </div>
      
      {/* Animated Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,218.7C672,192,768,128,864,122.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
