
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Kamau",
    location: "Lavington",
    rating: 5,
    text: "Desire Ventures has been our water supplier for over a year now. Their service is consistently reliable and the water quality is excellent. The delivery team is always professional and punctual.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "John Omondi",
    location: "Kiambu",
    rating: 5,
    text: "We hired Desire Ventures to clean our water tank and were impressed with their thoroughness and professionalism. The team explained every step of the process and left our tank spotless and sanitized.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    id: 3,
    name: "Elizabeth Wanjiru",
    location: "Nairobi CBD",
    rating: 5,
    text: "As a business owner, I need reliable water services. Desire Ventures provides exactly that with their scheduled deliveries and excellent customer service. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Michael Njoroge",
    location: "Lang'ata",
    rating: 4,
    text: "Their exhauster services saved us during a plumbing emergency. The team responded quickly and resolved our issue professionally. Great service at a fair price.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    name: "Grace Muthoni",
    location: "Ngong Road",
    rating: 5,
    text: "I've been using Desire Ventures for both water delivery and tank cleaning. Their attention to detail and customer care is unmatched. The water is always fresh and clean.",
    image: "https://randomuser.me/api/portraits/women/66.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);
  
  const handlePrev = () => {
    pauseAutoplay();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    pauseAutoplay();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
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
      id="testimonials" 
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal reveal-delay-1">
            Don't just take our word for it. Here's what our satisfied customers have to say about
            our water delivery and cleaning services.
          </p>
        </div>
        
        <div className="relative reveal reveal-delay-2" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card bg-white/10 backdrop-blur p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-16 w-16 rounded-full object-cover border-2 border-white/30"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-white/70">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-lg text-white/90 italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/50"
                }`}
                onClick={() => {
                  pauseAutoplay();
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center reveal reveal-delay-3">
          <h3 className="text-2xl font-bold mb-6">Ready to Experience Our Premium Water Services?</h3>
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

export default Testimonials;
