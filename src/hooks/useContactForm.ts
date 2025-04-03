
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface UseContactFormProps {
  onSubmitSuccess?: () => void;
}

export const useContactForm = ({ onSubmitSuccess }: UseContactFormProps = {}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customWhatsAppMessage, setCustomWhatsAppMessage] = useState(false);
  const [whatsAppPreview, setWhatsAppPreview] = useState('');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
    if (!formData.name || !formData.service) return '';
    
    const serviceLabel = getServiceLabel(formData.service);
    
    const defaultMessage = `Hello Desire Ventures Ltd,

My name is ${formData.name} and I'm interested in your ${serviceLabel} services.

Contact details:
- Email: ${formData.email || '[Not provided]'}
- Phone: ${formData.phone || '[Not provided]'}

${formData.message}

Could you please provide information about pricing and availability?`;

    return defaultMessage;
  };
  
  const updateWhatsAppPreview = () => {
    setWhatsAppPreview(generateWhatsAppMessage());
  };
  
  // Update preview whenever form fields change
  useEffect(() => {
    if (customWhatsAppMessage) {
      updateWhatsAppPreview();
    }
  }, [formData, customWhatsAppMessage]);
  
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
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone,
            service: formData.service,
            message: formData.message 
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
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
    });
    setWhatsAppPreview('');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formData.name || !formData.phone || !formData.service || !formData.message) {
        throw new Error("Please fill in all required fields");
      }
      
      await saveContactToDatabase();
      
      if (formData.email) {
        await sendAutomatedReply(formData.email, formData.name, formData.service);
      }
      
      let whatsappText = "";
      
      if (customWhatsAppMessage && whatsAppPreview) {
        whatsappText = whatsAppPreview;
      } else {
        whatsappText = generateWhatsAppMessage();
      }
      
      const encodedMessage = encodeURIComponent(whatsappText);
      window.open(`https://wa.me/254706274350?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "We're connecting you with our team on WhatsApp.",
        duration: 5000,
      });
      
      resetForm();
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
  
  return {
    formData,
    isSubmitting,
    isSubmitted,
    customWhatsAppMessage,
    whatsAppPreview,
    handleChange,
    setCustomWhatsAppMessage,
    setWhatsAppPreview,
    generateWhatsAppMessage,
    handleSubmit,
  };
};
