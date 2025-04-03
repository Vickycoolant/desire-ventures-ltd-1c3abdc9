
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from './FormField';
import WhatsAppPreview from './WhatsAppPreview';
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
    customWhatsAppMessage,
    whatsAppPreview,
    handleChange,
    setCustomWhatsAppMessage,
    setWhatsAppPreview,
    generateWhatsAppMessage,
    handleSubmit,
  } = useContactForm({ onSubmitSuccess });
  
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
            label="Message"
            type="textarea"
            placeholder="Please provide details about your needs..."
            value={formData.message}
            onChange={handleChange}
            required={true}
            rows={4}
          />
          
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
            <WhatsAppPreview
              whatsAppPreview={whatsAppPreview}
              setWhatsAppPreview={setWhatsAppPreview}
              generateDefaultMessage={generateWhatsAppMessage}
            />
          )}
          
          <SubmitButton
            isSubmitting={isSubmitting}
            label="Send Message"
            loadingLabel="Sending..."
          />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
