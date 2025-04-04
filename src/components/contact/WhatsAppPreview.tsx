
import React from 'react';

interface WhatsAppPreviewProps {
  whatsAppPreview: string;
  setWhatsAppPreview: (value: string) => void;
  generateDefaultMessage: () => string;
}

const WhatsAppPreview: React.FC<WhatsAppPreviewProps> = ({ 
  whatsAppPreview, 
  setWhatsAppPreview, 
  generateDefaultMessage 
}) => {
  return (
    <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
      <h4 className="font-medium text-sm mb-2 text-gray-700">WhatsApp Message Preview:</h4>
      <div className="bg-white p-3 rounded border border-gray-200 mb-2">
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
          {whatsAppPreview || 'Preview will appear here...'}
        </pre>
      </div>
      <textarea
        rows={6}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        value={whatsAppPreview}
        onChange={(e) => setWhatsAppPreview(e.target.value)}
        placeholder="Edit your WhatsApp message here..."
      ></textarea>
      <button 
        type="button"
        className="mt-2 text-xs text-primary-600 hover:text-primary-700"
        onClick={() => setWhatsAppPreview(generateDefaultMessage())}
      >
        Reset to default message
      </button>
    </div>
  );
};

export default WhatsAppPreview;
