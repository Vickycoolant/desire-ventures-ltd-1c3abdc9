
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const serviceLocations = [
  { id: 1, name: "Nairobi CBD", description: "Central business district with high demand for clean water services" },
  { id: 2, name: "Lang'ata", description: "Residential area with regular water delivery requirements" },
  { id: 3, name: "Lavington", description: "Premium residential area with high-quality water needs" },
  { id: 4, name: "Kiambu", description: "Growing suburban area with increasing water service demand" },
  { id: 5, name: "Ngong Road", description: "Mixed commercial and residential with diverse water requirements" },
  { id: 6, name: "Karen", description: "Upscale residential area with large properties and tanks" },
  { id: 7, name: "Westlands", description: "Commercial hub with business water supply needs" },
  { id: 8, name: "Kilimani", description: "Residential and office area with consistent water demands" }
];

const ServiceAreas = () => {
  const [activeLocation, setActiveLocation] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation(prev => prev === serviceLocations.length ? 1 : prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section id="areas" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,170.7C672,171,768,149,864,149.3C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">Service Areas</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            We proudly serve Nairobi and surrounding areas with exceptional water delivery
            and cleaning services. Our extensive coverage ensures you're never left without clean water.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-300 rounded-full opacity-40"></div>
              
              <div className="relative z-10 aspect-square overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3588120321!2d36.70730561387407!3d-1.3028617913909354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1717009151217!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                
                {/* Animated Location pins */}
                {serviceLocations.map((location) => (
                  <div 
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      activeLocation === location.id 
                        ? 'scale-150 z-30' 
                        : 'scale-100 z-20'
                    }`}
                    style={{
                      top: `${30 + (location.id * 7) % 70}%`,
                      left: `${25 + (location.id * 9) % 60}%`
                    }}
                  >
                    <div className="relative">
                      <MapPin 
                        size={24}
                        className={`text-primary-600 ${
                          activeLocation === location.id ? 'animate-pulse' : ''
                        }`}
                      />
                      
                      {activeLocation === location.id && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Location list */}
          <div className="order-1 lg:order-2 reveal reveal-delay-3">
            <h3 className="text-2xl font-bold text-primary-800 mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceLocations.map((location) => (
                <div 
                  key={location.id}
                  className={`p-4 rounded-lg transition-all duration-300 cursor-pointer relative ${
                    activeLocation === location.id 
                      ? 'bg-primary-50 border border-primary-200 shadow-md'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveLocation(location.id)}
                >
                  <div className="flex items-start">
                    <MapPin 
                      size={18} 
                      className={`mt-1 mr-2 ${
                        activeLocation === location.id ? 'text-primary-600' : 'text-gray-400'
                      }`}
                    />
                    <div>
                      <h4 className={`font-medium ${
                        activeLocation === location.id ? 'text-primary-700' : 'text-gray-800'
                      }`}>
                        {location.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                    </div>
                  </div>
                  
                  {activeLocation === location.id && (
                    <div className="absolute -left-0.5 top-0 bottom-0 w-1 bg-primary-600 rounded"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
              <p className="text-gray-700">
                <span className="font-medium text-primary-700">Don't see your area?</span> We serve many other locations 
                throughout Nairobi and surrounding regions. Contact us to check availability in your specific area.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 water-btn py-2 px-4 text-sm"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
