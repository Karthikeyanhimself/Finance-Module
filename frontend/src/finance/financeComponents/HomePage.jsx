// src/components/HomePage.jsx
import React from 'react';
import QRCode from './QRCode';
import PaymentForm from './PaymentForm';
import Sidebar from './Sidebar';
import BackButton from './BackButton';

const HomePage = ({ selectedFeeType, onSelectFeeType }) => {
  return (
    <div className="min-h-screen bg-gray-50">
     <header className="bg-gradient-to-r from-gray-700 to-gray-400 text-white py-6 px-8 flex items-center justify-between shadow-lg">

<img 
  src="./assets/VU_logo.jpg" 
  width="250px" 
  height="250px" 
  alt="Vignan University Logo" 
  className="object-contain"
  loading="lazy"
/>

<div className="text-center flex-1">
  <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide" style={{ fontFamily: 'Garamond, serif' }}>
    Vignan University
  </h1>
  <p className="mt-2 md:mt-3 text-xl md:text-2xl font-light" style={{ fontFamily: 'Garamond, serif' }}>
    Finance Portal
  </p>
</div>
</header>



      <div className="flex">
        <Sidebar 
          selectedFeeType={selectedFeeType} 
          onSelectFeeType={onSelectFeeType} 
        />
        
        <main className="flex-1 p-8">
          {selectedFeeType ? (
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {selectedFeeType === 'tuition' && 'Tuition Fee Payment'}
                    {selectedFeeType === 'transport' && 'Transport Fee Payment'}
                    {selectedFeeType === 'scholarship' && 'Scholarship Application'}
                    {selectedFeeType === 'hostel' && 'Hostel Fee Payment'}
                  </h2>
                  <p className="text-gray-600">
                    Complete your payment by scanning the QR code and filling the form below.
                  </p>
                </div>
                <BackButton onClick={() => onSelectFeeType(null)} />
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
          ) : (
            <div className="text-center text-gray-600 mt-20">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium">Select a Fee Category</h3>
              <p className="mt-1">Choose a fee category from the sidebar to proceed with payment</p>
            </div>
          )}
        </main>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Vignan University. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            For technical support, contact: support@vignan.ac.in
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;