import React, { useState } from 'react';
import QRCode from './QRCode';
import PaymentForm from './PaymentForm';
import Sidebar from './Sidebar';

const Finance = () => {
  const [selectedFeeType, setSelectedFeeType] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Vignan University</h1>
          <p className="mt-2">Fee Payment Portal</p>
        </div>
      </header>

      <div className="flex">
        <Sidebar selectedFeeType={selectedFeeType} onSelectFeeType={setSelectedFeeType} />

        <main className="flex-1 p-8">
          {!selectedFeeType ? (
            // Default Finance Home Content
            <div className="text-center text-gray-600 mt-20">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium">Welcome to the Fee Payment Portal</h3>
              <p className="mt-1">Select a fee category from the sidebar to proceed with payment.</p>
            </div>
          ) : (
            // Fee Payment Section Appears Only When a Type is Selected
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {selectedFeeType === 'tuition' && 'Tuition Fee Payment'}
                  {selectedFeeType === 'transport' && 'Transport Fee Payment'}
                  {selectedFeeType === 'scholarship' && 'Scholarship Application'}
                  {selectedFeeType === 'hostel' && 'Hostel Fee Payment'}
                </h2>
                <p className="text-gray-600">Complete your payment by scanning the QR code and filling the form below.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <QRCode feeType={selectedFeeType} />
                </div>
                <div>
                  <PaymentForm feeType={selectedFeeType} />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Vignan University. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">For technical support, contact: support@vignan.ac.in</p>
        </div>
      </footer>
    </div>
  );
};

export default Finance;



