
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface UseWhatsAppFormProps {
  onSubmitSuccess?: () => void;
}

export const useWhatsAppForm = ({ onSubmitSuccess }: UseWhatsAppFormProps = {}) => {
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
      
      let whatsappText = customWhatsAppMessage && whatsAppPreview 
        ? whatsAppPreview 
        : generateWhatsAppMessage();
      
      const encodedMessage = encodeURIComponent(whatsappText);
      window.open(`https://wa.me/254706274350?text=${encodedMessage}`, '_blank');
      
      toast({
        title: "Opening WhatsApp",
        description: "We're connecting you with our team on WhatsApp.",
        duration: 3000,
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
