
import React from 'react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 animate-fadeIn">
      <p className="font-medium">WhatsApp message prepared!</p>
      <p className="text-sm mt-1">We've opened WhatsApp for you. Continue the conversation there to get assistance from our team.</p>
    </div>
  );
};

export default SuccessMessage;
