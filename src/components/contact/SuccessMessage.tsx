
import React from 'react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 animate-fadeIn">
      <p className="font-medium">Thank you for contacting us!</p>
      <p className="text-sm mt-1">We've connected you with our team on WhatsApp. Check your WhatsApp app to continue the conversation.</p>
    </div>
  );
};

export default SuccessMessage;
