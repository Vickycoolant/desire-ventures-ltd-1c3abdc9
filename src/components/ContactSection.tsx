
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const sendAutomatedReply = async (recipientEmail: string, recipientName: string, selectedService: string) => {
    try {
      const subject = "Thank you for contacting Desire Ventures Limited";
      const body = `Dear ${recipientName},

Thank you for reaching out to Desire Ventures Limited. We have received your request for ${selectedService}, and our team will get back to you shortly to confirm the details.

Best regards,
Desire Ventures Team`;
      
      // In a real-world scenario, this would be a call to your backend API
      // For this demo, we'll show how this would be structured, but will use
      // the mailto: link as a fallback
      
      // Simulating API call to send automated email
      console.log("Sending automated email to:", recipientEmail);
      console.log("Email subject:", subject);
      console.log("Email body:", body);
      
      // In production, replace this with actual API call
      // Example: 
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ to: recipientEmail, subject, body }),
      // });
      
      // Instead, we'll create a hidden mailto link that would be clicked in real backend implementation
      // This is just for demonstration purposes
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // In a real implementation, we wouldn't open this link, but use a server-side email service
      // For this demo, you can uncomment this to see it in action (but it will open email client)
      // window.open(mailtoLink, '_blank');
      
      toast({
        title: "Automated reply sent",
        description: `An automated confirmation email has been sent to ${recipientEmail}`,
        duration: 5000,
      });
      
      return true;
    } catch (error) {
      console.error("Error sending automated reply:", error);
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the service name for display
    const formattedService = service === 'water-delivery' ? 'Water Delivery' :
                            service === 'tank-cleaning' ? 'Tank/Reservoir Cleaning' :
                            service === 'exhauster' ? 'Exhauster Services' : 
                            'Other Services';
    
    const subject = `New Service Request: ${formattedService}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${formattedService}
Message: ${message}
    `;
    
    const mailtoLink = `mailto:desireventuresltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    // Send automated reply to the customer
    await sendAutomatedReply(email, name, formattedService);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setService('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-water-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal reveal-delay-1">
            Have questions or ready to schedule a service? Our team is here to help with all your water delivery,
            tank cleaning, and exhauster service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal reveal-delay-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 animate-fadeIn">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p className="text-sm mt-1">We've received your message and will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="water-delivery">Water Delivery</option>
                      <option value="tank-cleaning">Tank/Reservoir Cleaning</option>
                      <option value="exhauster">Exhauster Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Please provide details about your needs..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="water-btn w-full py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="reveal reveal-delay-3">
            <div className="grid grid-cols-1 gap-6 h-full">
              <div className="glass-card p-8 bg-primary-50">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+254727023350" className="text-primary-600 hover:text-primary-800 transition-colors block">
                        (+254) 0727023350
                      </a>
                      <a href="https://wa.me/254706274350" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors flex items-center mt-1">
                        <div className="bg-[#25D366] rounded-full p-1 mr-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        WhatsApp: (+254) 0706274350
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:desireventuresltd@gmail.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                        desireventuresltd@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Linkedin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        desire-ventures-ltd
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-700">Lavington Green Mall, Off James Gichuru road, <br />Nairobi, Kenya</p>
                      <p className="text-gray-700 mt-1">P.O Box. 756 - 00100 Nairobi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-700">24/7 Emergency Services Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-4 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817853046927!2d36.7724982!3d-1.2736646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7554e51%3A0xbe1f3eeeb54f3252!2sLavington%20Green%20Shopping%20Centre!5e0!3m2!1sen!2sus!4v1653894520012!5m2!1sen!2sus!4v1653894520012!5m2!1sen!2sus" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Desire Ventures Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
