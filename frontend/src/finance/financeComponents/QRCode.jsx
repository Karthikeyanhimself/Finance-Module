// src/components/QRCode.jsx
import React from 'react';

const QRCode = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Scan QR Code to Pay</h2>
      <div className="w-64 h-64 bg-gray-100 flex items-center justify-center border-2 border-gray-200 rounded-lg">
        <img
          src="/assets/images/sample-qr.png"
          alt="Payment QR Code"
          className="w-56 h-56 object-contain"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Scan this QR code using any UPI app to make the payment
      </p>
    </div>
  );
};

export default QRCode;