import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceAreas from '../components/ServiceAreas';
import AboutUs from '../components/AboutUs';
import Clients from '../components/Clients';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with fade-in-view class
    document.querySelectorAll('.fade-in-view').forEach((el) => {
      observer.observe(el);
    });
    
    // Activating reveal elements on initial load
    document.querySelectorAll('.reveal').forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('.fade-in-view').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <AboutUs />
        <Clients />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 h-12 w-12 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all hover:bg-primary-700 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      {/* WhatsApp floating button */}
      <WhatsAppButton />
      
      {/* Add necessary CSS for flip cards */}
      <style>
        {`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-dropIn {
          animation: dropIn 0.3s ease-in-out;
        }
        `}
      </style>
    </div>
  );
};

export default Index;
