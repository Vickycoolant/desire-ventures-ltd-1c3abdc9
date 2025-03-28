
import { useEffect, useRef } from 'react';
import { Truck, Brush, ShieldCheck } from 'lucide-react';

const serviceData = [
  {
    id: 1,
    icon: <Truck className="h-12 w-12 text-primary-600" />,
    title: "Clean Water Delivery",
    description: "Premium water delivery services for homes and businesses with state-of-the-art tankers ensuring timely and reliable supply even during shortages.",
    imageSrc: "/lovable-uploads/d6d383cf-74d2-4a2c-a950-7b5b223b4c50.png",
    delay: 1
  },
  {
    id: 2,
    icon: <Brush className="h-12 w-12 text-primary-600" />,
    title: "Tank & Reservoir Cleaning",
    description: "Professional cleaning and sanitization of water tanks and reservoirs with eco-friendly solutions, maintaining the highest standards of water hygiene.",
    imageSrc: "/lovable-uploads/1ababbbf-0b19-4a3b-a24c-5b9f095c933f.png",
    delay: 2
  },
  {
    id: 3,
    icon: <ShieldCheck className="h-12 w-12 text-primary-600" />,
    title: "Exhauster Services",
    description: "Complete waste management solutions with state-of-the-art exhauster services, ensuring clean environments and preventing water contamination.",
    imageSrc: "/lovable-uploads/f1ebfc0b-2c9c-4fbc-9579-60407221e0b7.png",
    delay: 3
  }
];

const Services = () => {
  // Ref for the entire section
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-water-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">Premium Water Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            Our team of experts delivers exceptional water services with the highest standards of quality,
            reliability, and efficiency throughout Nairobi and beyond.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {serviceData.map((service) => (
            <div 
              key={service.id} 
              className={`glass-card p-6 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal reveal-delay-${service.delay} flex-1`}
            >
              <div className="flex-shrink-0 mb-6 flex justify-center">
                {service.icon}
              </div>
              
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-primary-800">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              
              <a 
                href="https://wa.me/254706274350?text=Hello%20Desire%20Ventures!%20I'm%20interested%20in%20your%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center justify-center"
              >
                Request Service
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal reveal-delay-4">
          <div className="inline-block p-6 glass-card bg-primary-50">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Why Choose Our Services?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Droplet className="h-7 w-7 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900">High Quality</h4>
                <p className="text-sm text-gray-600 mt-2 hidden md:block">Premium purified water for all your needs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="h-7 w-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                <p className="text-sm text-gray-600 mt-2 hidden md:block">Guaranteed prompt delivery within hours</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="h-7 w-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Reliable & Safe</h4>
                <p className="text-sm text-gray-600 mt-2 hidden md:block">Rigorously tested for safety and purity</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="h-7 w-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                <p className="text-sm text-gray-600 mt-2 hidden md:block">Always available to assist with your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
