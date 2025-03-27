
import { useState, useEffect } from 'react';

const clients = [
  {
    id: 1,
    name: "The Junction Mall",
    logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Lavington Green Shopping Mall",
    logo: "https://images.unsplash.com/photo-1611080626919-7cf5a9729891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Heritage Properties Ltd",
    logo: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "French School Nairobi",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww"
  },
  {
    id: 5,
    name: "Gimco Ltd",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Ewrealite Properties",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
  }
];

const Clients = () => {
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
            across Nairobi and surrounding areas.
          </p>
          
          <div className="flex items-center justify-center mt-4 reveal reveal-delay-2">
            <div className="px-4 py-1 bg-white/20 rounded-full backdrop-blur-sm border border-white/10 inline-flex items-center">
              <span className="text-white/90 text-sm font-semibold">WASREB Licensed Company</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 reveal reveal-delay-2">
          {clients.map((client) => (
            <div key={client.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all hover:transform hover:scale-105 border border-white/10">
              <div className="h-48 overflow-hidden">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold">{client.name}</h3>
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
