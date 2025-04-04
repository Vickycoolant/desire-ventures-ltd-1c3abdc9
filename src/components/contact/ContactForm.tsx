
import React, { useEffect } from 'react';
import { useWhatsAppForm } from '@/hooks/useWhatsAppForm';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';
import SubmitButton from './SubmitButton';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    whatsAppPreview,
    handleChange,
    setWhatsAppPreview,
    generateWhatsAppMessage,
    handleSubmit,
    refreshPreview
  } = useWhatsAppForm({ onSubmitSuccess });
  
  // Update preview when form changes
  useEffect(() => {
    refreshPreview();
  }, [formData]);
  
  const serviceOptions = [
    { value: 'water-delivery', label: 'Water Delivery' },
    { value: 'tank-cleaning', label: 'Tank/Reservoir Cleaning' },
    { value: 'exhauster', label: 'Exhauster Services' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="glass-card p-8 h-full">
      <h3 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h3>
      
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            id="name"
            label="Full Name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            
            <FormField
              id="phone"
              label="Phone Number"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required={true}
            />
          </div>
          
          <FormField
            id="service"
            label="Service Needed"
            type="select"
            placeholder="Select a service"
            value={formData.service}
            onChange={handleChange}
            required={true}
            options={serviceOptions}
          />
          
          <FormField
            id="message"
            label="Additional Details"
            type="textarea"
            placeholder="Please provide details about your location and specific requirements..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
          
          {/* WhatsApp preview is now hidden from the UI but functionality is maintained */}
          
          <SubmitButton
            isSubmitting={isSubmitting}
            label="Send Message"
            loadingLabel="Preparing..."
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
