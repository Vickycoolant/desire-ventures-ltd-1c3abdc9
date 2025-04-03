
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
  const [customWhatsAppMessage, setCustomWhatsAppMessage] = useState(false);
  const [whatsAppPreview, setWhatsAppPreview] = useState('');
  const { toast } = useToast();
  
  const sendAutomatedReply = async (recipientEmail: string, recipientName: string, selectedService: string) => {
    try {
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
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          { 
            name, 
            email, 
            phone,
            service,
            message 
          }
        ])
        .select();
      
      if (error) {
        console.error("Database error:", error);
        throw error;
      }
      return data ? data[0] : null;
    } catch (error) {
      console.error("Error saving contact:", error);
      throw error;
    }
  };
  
  const getServiceLabel = (serviceValue: string) => {
    switch(serviceValue) {
      case 'water-delivery':
        return 'Water Delivery';
      case 'tank-cleaning':
        return 'Tank/Reservoir Cleaning';
      case 'exhauster':
        return 'Exhauster Services';
      default:
        return 'Other Services';
    }
  };
  
  const generateWhatsAppMessage = () => {
    if (!name || !service) return '';
    
    const serviceLabel = getServiceLabel(service);
    
    const defaultMessage = `Hello Desire Ventures Ltd,

My name is ${name} and I'm interested in your ${serviceLabel} services.

Contact details:
- Email: ${email || '[Not provided]'}
- Phone: ${phone || '[Not provided]'}

${message}

Could you please provide information about pricing and availability?`;

    return defaultMessage;
  };
  
  const updateWhatsAppPreview = () => {
    setWhatsAppPreview(generateWhatsAppMessage());
  };
  
  // Update preview whenever form fields change
  useState(() => {
    if (customWhatsAppMessage) {
      updateWhatsAppPreview();
    }
  }, [name, email, phone, service, message, customWhatsAppMessage]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!name || !phone || !service || !message) {
        throw new Error("Please fill in all required fields");
      }
      
      await saveContactToDatabase();
      
      if (email) {
        await sendAutomatedReply(email, name, service);
      }
      
      let whatsappText = "";
      
      if (customWhatsAppMessage && whatsAppPreview) {
        whatsappText = whatsAppPreview;
      } else {
        const serviceLabel = getServiceLabel(service);
        whatsappText = `Hello Desire Ventures Ltd,

My name is ${name} and I'm interested in your ${serviceLabel} services.

Contact details:
- Email: ${email || '[Not provided]'}
- Phone: ${phone}

${message}

Could you please provide information about pricing and availability?`;
      }
      
      const encodedMessage = encodeURIComponent(whatsappText);
      window.open(`https://wa.me/254706274350?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "We're connecting you with our team on WhatsApp.",
        duration: 5000,
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setService('');
      setWhatsAppPreview('');
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: error.message || "There was a problem sending your message. Please try again.",
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
          <p className="text-sm mt-1">We've redirected you to WhatsApp to continue the conversation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (customWhatsAppMessage) updateWhatsAppPreview();
              }}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (customWhatsAppMessage) updateWhatsAppPreview();
                }}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (customWhatsAppMessage) updateWhatsAppPreview();
                }}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed <span className="text-red-500">*</span></label>
            <select 
              id="service" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                if (customWhatsAppMessage) updateWhatsAppPreview();
              }}
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Please provide details about your needs..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (customWhatsAppMessage) updateWhatsAppPreview();
              }}
              required
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="custom-whatsapp"
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              checked={customWhatsAppMessage}
              onChange={(e) => setCustomWhatsAppMessage(e.target.checked)}
            />
            <label htmlFor="custom-whatsapp" className="ml-2 block text-sm text-gray-700">
              Customize WhatsApp message
            </label>
          </div>
          
          {customWhatsAppMessage && (
            <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-sm mb-2 text-gray-700">WhatsApp Message Preview:</h4>
              <textarea
                rows={6}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={whatsAppPreview}
                onChange={(e) => setWhatsAppPreview(e.target.value)}
                placeholder="Your customized WhatsApp message..."
              ></textarea>
              <button 
                type="button"
                className="mt-2 text-xs text-primary-600 hover:text-primary-700"
                onClick={() => setWhatsAppPreview(generateWhatsAppMessage())}
              >
                Reset to default message
              </button>
            </div>
          )}
          
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
