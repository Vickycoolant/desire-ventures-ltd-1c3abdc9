
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
        isScrolled ? 'bg-primary-800/95 backdrop-blur-md shadow-md py-2' : 'bg-primary-900/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-primary-800 font-bold text-lg">DV</span>
          </div>
          <h1 className="text-xl font-bold text-white">
            Desire Ventures
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`text-sm font-medium transition-colors hover:text-white ${
              activeSection === 'home' ? 'text-white' : 'text-white/80'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`text-sm font-medium transition-colors hover:text-white ${
              activeSection === 'services' ? 'text-white' : 'text-white/80'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('areas')}
            className={`text-sm font-medium transition-colors hover:text-white ${
              activeSection === 'areas' ? 'text-white' : 'text-white/80'
            }`}
          >
            Service Areas
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-sm font-medium transition-colors hover:text-white ${
              activeSection === 'about' ? 'text-white' : 'text-white/80'
            }`}
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className={`text-sm font-medium transition-colors hover:text-white ${
              activeSection === 'clients' ? 'text-white' : 'text-white/80'
            }`}
          >
            Our Clients
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary-800 py-2 px-4 rounded-lg font-medium transition-colors hover:bg-primary-50"
          >
            Contact Us
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-800 shadow-lg animate-dropIn">
          <div className="flex flex-col p-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'home' ? 'bg-primary-700 text-white' : 'text-white/80'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'services' ? 'bg-primary-700 text-white' : 'text-white/80'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'areas' ? 'bg-primary-700 text-white' : 'text-white/80'
              }`}
            >
              Service Areas
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'about' ? 'bg-primary-700 text-white' : 'text-white/80'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className={`p-2 text-left rounded-md ${
                activeSection === 'clients' ? 'bg-primary-700 text-white' : 'text-white/80'
              }`}
            >
              Our Clients
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary-800 p-2 rounded-md text-left"
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
