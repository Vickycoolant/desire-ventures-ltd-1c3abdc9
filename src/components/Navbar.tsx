
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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-4 sm:px-6 lg:px-8 h-16 flex items-center ${
        isScrolled ? 'bg-primary-800/95 backdrop-blur-md shadow-md' : 'bg-primary-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <div className="h-12 w-12 overflow-hidden rounded-[10px] bg-primary-600 flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/6ad8953c-3442-4961-b239-f84d3d161a46.png" 
              alt="Desire Ventures Logo" 
              className="h-11 w-11 max-h-11 max-w-11 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-white whitespace-nowrap">
            Desire Ventures Ltd.
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
          <a 
            href="https://wa.me/254706274350?text=Hello%20Desire%20Ventures!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-2 px-4 rounded-lg font-medium transition-colors hover:bg-[#22c55e] flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us
          </a>
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-primary-800 shadow-lg animate-dropIn">
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
            <a 
              href="https://wa.me/254706274350?text=Hello%20Desire%20Ventures!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-2 rounded-md text-left flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
