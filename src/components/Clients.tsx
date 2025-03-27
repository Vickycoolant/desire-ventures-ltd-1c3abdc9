import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: "The Junction Mall",
    logo: "/lovable-uploads/32a0205b-c24e-434a-b192-4c0e7c4119b5.png",
    testimonial: "Desire Ventures has been instrumental in maintaining our water supply during shortages. Their quick response time and professional service make them our preferred water supplier."
  },
  {
    id: 2,
    name: "Lavington Green Shopping Mall",
    logo: "/lovable-uploads/569baef5-772a-4400-b913-0adf56b6a8c9.png",
    testimonial: "We've been working with Desire Ventures for our mall's water needs for over two years. Their reliability and consistent quality service have exceeded our expectations."
  },
  {
    id: 3,
    name: "Heritage Properties Ltd",
    logo: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    testimonial: "The tank cleaning service provided by Desire Ventures ensures our properties maintain the highest standards of water quality. Their team is thorough and professional."
  },
  {
    id: 4,
    name: "French School Nairobi",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww",
    testimonial: "As an educational institution, we prioritize clean water for our students. Desire Ventures has been our trusted partner, ensuring uninterrupted supply even during city-wide shortages."
  },
  {
    id: 5,
    name: "Gimco Ltd",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    testimonial: "We've relied on Desire Ventures for both regular water delivery and emergency services. Their 24/7 availability and quick response time have been invaluable to our operations."
  },
  {
    id: 6,
    name: "Exhauster Services",
    logo: "/lovable-uploads/dd5ddae1-8ee1-4cfe-bd17-64ad6e010f33.png",
    testimonial: "The exhauster services from Desire Ventures are efficient and environmentally conscious. Their team is professional and completes the work with minimal disruption."
  }
];

const Clients = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  
  const toggleFlip = (id: number) => {
    if (activeCardId === id) {
      setActiveCardId(null);
    } else {
      setActiveCardId(id);
    }
  };
  
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
      id="clients" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden"
    >
      {/* Background waves */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,64C672,64,768,96,864,106.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,170.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal reveal-delay-1">
            Desire Ventures proudly serves a diverse range of prestigious clients
            across Nairobi and surrounding areas. Click on each client to see their experience with us.
          </p>
          
          <div className="flex items-center justify-center mt-4 reveal reveal-delay-2">
            <div className="px-4 py-1 bg-white/20 rounded-full backdrop-blur-sm border border-white/10 inline-flex items-center">
              <span className="text-white/90 text-sm font-semibold">WASREB Licensed Company</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 reveal reveal-delay-2">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 border border-white/10 h-[300px] cursor-pointer perspective ${
                activeCardId === client.id ? 'flip' : ''
              }`}
              onClick={() => toggleFlip(client.id)}
            >
              <div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out" style={{ 
                transform: activeCardId === client.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}>
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">{client.name}</h3>
                    <div className="flex justify-center items-center mt-2 text-white/70">
                      <span className="text-sm">Click to see experience</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Back */}
                <div 
                  className="absolute inset-0 bg-primary-700 p-6 flex flex-col justify-center items-center backface-hidden" 
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <h3 className="font-bold mb-4 text-center">{client.name}</h3>
                  <p className="text-white/90 text-center italic">"{client.testimonial}"</p>
                  <div className="flex justify-center items-center mt-4 text-white/70">
                    <ArrowLeft size={16} className="mr-1" />
                    <span className="text-sm">Click to go back</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal reveal-delay-3">
          <h3 className="text-2xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h3>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-800 py-3 px-8 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
