
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
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
      // Call Supabase Edge function to send confirmation email
      const { error } = await supabase.functions.invoke('send-confirmation', {
        body: {
          name: recipientName,
          email: recipientEmail,
          service: selectedService
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Automated reply sent",
        description: `An automated confirmation email has been sent to ${recipientEmail}`,
        duration: 5000,
      });
      
      return true;
    } catch (error) {
      console.error("Error sending automated reply:", error);
      toast({
        variant: "destructive",
        title: "Email Error",
        description: "There was a problem sending the confirmation email.",
        duration: 5000,
      });
      return false;
    }
  };
  
  const saveContactToDatabase = async () => {
    try {
      // Using upsert with onConflict to ensure we're not violating any constraints
      const { data, error } = await supabase
        .from('contacts')
        .upsert([
          { 
            name, 
            email, 
            phone,
            service,
            message 
          }
        ], {
          onConflict: 'email',
          ignoreDuplicates: false
        })
        .select();
      
      if (error) throw error;
      return data ? data[0] : null;
    } catch (error) {
      console.error("Error saving contact:", error);
      throw error;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save contact to database
      await saveContactToDatabase();
      
      // Send automated reply
      await sendAutomatedReply(email, name, service);
      
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
      
      // Open email client as fallback for admins
      const mailtoLink = `mailto:desireventuresltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We will be in touch soon.",
        duration: 5000,
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setService('');
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
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
  );
};

export default ContactForm;
