
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Get current scroll position
      const scrollPosition = window.scrollY + 100;
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Loop through sections to find active one
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">DV</span>
          </div>
          <h1 className="text-xl font-bold text-primary-800">
            <span className="hidden sm:inline">Desire</span> Ventures
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              activeSection === 'home' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              activeSection === 'services' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('areas')}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              activeSection === 'areas' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Service Areas
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              activeSection === 'about' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              activeSection === 'testimonials' ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="water-btn text-sm py-2 px-4"
          >
            Contact Us
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-dropIn">
          <div className="flex flex-col p-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'home' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'services' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'areas' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              Service Areas
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'about' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'testimonials' ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white p-2 rounded-md text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
