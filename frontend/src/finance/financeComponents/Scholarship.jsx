// import React, { useState } from 'react';

// import ScholarshipForm from './ScholarshipForm';
// import Sidebar from './SchSidebar';

// const ScholarshipPortal = () => {
//   const [selectedScholarship, setSelectedScholarship] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-green-600 text-white py-6 shadow-md">
//         <div className="container mx-auto px-4">
//           <h1 className="text-3xl font-bold">Vignan University</h1>
//           <p className="mt-2">Scholarship Application Portal</p>
//         </div>
//       </header>

//       <div className="flex">
//         <Sidebar selectedScholarship={selectedScholarship} onSelectScholarship={setSelectedScholarship} />

//         <main className="flex-1 p-8">
//           {!selectedScholarship ? (
//             // Default Scholarship Home Content
//             <div className="text-center text-gray-600 mt-20">
//               <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
//               </svg>
//               <h3 className="mt-4 text-lg font-medium">Welcome to the Scholarship Portal</h3>
//               <p className="mt-1">Select a scholarship category from the sidebar to apply.</p>
//             </div>
//           ) : (
//             // Scholarship Application Section Appears When a Type is Selected
//             <div className="max-w-4xl mx-auto">
//               <div className="mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                   {selectedScholarship === 'merit_based' && 'Merit-Based Scholarship'}
//                   {selectedScholarship === 'need_based' && 'Need-Based Scholarship'}
//                   {selectedScholarship === 'sports_scholarship' && 'Sports Scholarship'}
//                   {selectedScholarship === 'research_grant' && 'Research Grant'}
//                   {selectedScholarship === 'minority_scholarship' && 'Minority Scholarship'}
//                   {selectedScholarship === 'disability_scholarship' && 'Disability Scholarship'}
//                   {selectedScholarship === 'government_scholarship' && 'Government Scholarship'}
//                   {selectedScholarship === 'private_funding' && 'Private Funding'}
//                 </h2>
//                 <p className="text-gray-600">Fill out the application form below and submit the required documents.</p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <QRCode scholarshipType={selectedScholarship} />
//                 </div>
//                 <div>
//                   <ScholarshipForm scholarshipType={selectedScholarship} />
//                 </div>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>

//       <footer className="bg-gray-800 text-white py-6 mt-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>© 2024 Vignan University. All rights reserved.</p>
//           <p className="mt-2 text-sm text-gray-400">For technical support, contact: support@vignan.ac.in</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ScholarshipPortal;




















// ScholarshipPortal.js (Main Page)
import React, { useState } from "react";
import SchSidebar from "./SchSidebar";
import ScholarshipForm from "./ScholarshipForm";

const ScholarshipPortal = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SchSidebar setSelectedScholarship={setSelectedScholarship} />
      <div className="flex-1 p-6 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Scholarship Application Portal</h1>
        {selectedScholarship ? (
          <ScholarshipForm scholarshipType={selectedScholarship} />
        ) : (
          <p className="text-gray-600">Select a scholarship type from the sidebar.</p>
        )}
      </div>
    </div>
  );
};

export default ScholarshipPortal;
