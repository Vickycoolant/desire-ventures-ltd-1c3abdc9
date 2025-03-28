
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const leadership = [
  {
    id: 1,
    name: "John Mutuma",
    title: "Managing Director",
    imageUrl: "/lovable-uploads/IMG_1444.JPG",
    bio: "John Mutuma is the visionary leader behind Desire Ventures Ltd. With a background in environmental science and a passion for sustainable solutions, John founded the company with the goal of providing reliable and eco-friendly water and sanitation services. His strategic insights and commitment to excellence have driven the company's growth and success.",
    linkedinUrl: "https://www.linkedin.com/in/john-mutuma-b429a7297/"
  },
  {
    id: 2,
    name: "Jane Wanjiku",
    title: "Operations Manager",
    imageUrl: "/lovable-uploads/IMG_1443.JPG",
    bio: "Jane Wanjiku is the backbone of Desire Ventures' operations. With years of experience in logistics and customer service, Jane ensures that all services are delivered efficiently and to the highest standards. Her attention to detail and dedication to customer satisfaction make her an invaluable asset to the team.",
    linkedinUrl: "https://www.linkedin.com/in/jane-wanjiku-b7b7b7297/"
  },
  {
    id: 3,
    name: "Michael Omondi",
    title: "Field Operations Supervisor",
    imageUrl: "/lovable-uploads/IMG_1445.JPG",
    bio: "Michael Omondi is the boots on the ground, overseeing all field operations for Desire Ventures. With a strong technical background and a knack for problem-solving, Michael ensures that all equipment is running smoothly and that services are delivered safely and effectively. His leadership in the field is critical to the company's success.",
    linkedinUrl: "https://www.linkedin.com/in/michael-omondi-b0b0b0297/"
  }
];

const AboutUs = () => {
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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-water-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            About <span className="text-gradient">Desire Ventures Ltd</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            Learn about our mission, values, and the dedicated team behind Desire Ventures Ltd,
            your trusted partner in water and sanitation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="reveal reveal-delay-2">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide sustainable and reliable water and sanitation solutions that enhance the quality of life
                for communities while preserving our environment. We strive to be the leading provider of
                innovative and eco-friendly services in the region.
              </p>
              
              <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-6">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices.</li>
                <li><strong>Reliability:</strong> We deliver consistent, high-quality services you can depend on.</li>
                <li><strong>Innovation:</strong> We continuously seek better solutions through technology and creativity.</li>
                <li><strong>Community:</strong> We actively engage with and support the communities we serve.</li>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and ethical principles.</li>
              </ul>
            </div>
          </div>
          
          <div className="reveal reveal-delay-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/6964a86b-ca29-4991-8515-30c913a40ca4.jpeg"
                alt="About Desire Ventures"
                className="rounded-2xl shadow-lg img-overlay"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary-800">Ensuring Clean Water for All</h4>
                <p className="text-sm text-gray-700">Our commitment to quality and sustainability.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            Meet the experienced leaders driving Desire Ventures Ltd towards a sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader) => (
            <div key={leader.id} className="reveal reveal-delay-2">
              <div className="glass-card p-6 flex flex-col items-center justify-start h-full">
                <img 
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-primary-800 mb-2">{leader.name}</h3>
                <p className="text-gray-600 mb-3">{leader.title}</p>
                <p className="text-gray-700 text-center leading-relaxed" style={{ height: '120px', overflow: 'hidden' }}>{leader.bio}</p>
                <a 
                  href={leader.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 transition-colors mt-4 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
