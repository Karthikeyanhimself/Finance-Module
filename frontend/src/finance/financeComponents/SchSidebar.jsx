// import React from 'react';

// const Sidebar = ({ selectedScholarship, onSelectScholarship }) => {
//   const scholarshipTypes = [
//     { id: 'merit_based', label: 'Merit-Based Scholarship', icon: '🏆' },
//     { id: 'need_based', label: 'Need-Based Scholarship', icon: '🤝' },
//     { id: 'sports_scholarship', label: 'Sports Scholarship', icon: '⚽' },
//     { id: 'research_grant', label: 'Research Grant', icon: '🔬' },
//     { id: 'minority_scholarship', label: 'Minority Scholarship', icon: '🌍' },
//     { id: 'disability_scholarship', label: 'Disability Scholarship', icon: '♿' },
//     { id: 'government_scholarship', label: 'Government Scholarship', icon: '🏛️' },
//     { id: 'private_funding', label: 'Private Funding', icon: '💰' }
//   ];

//   return (
//     <div className="bg-white shadow-md w-64 h-screen p-4 flex flex-col justify-between">
//       {/* Sidebar Header */}
//       <div>
//         <h2 className="text-xl font-bold text-gray-800">Scholarships</h2>
//         <p className="text-sm text-gray-600 mt-1">Apply for scholarships</p>
//       </div>

//       {/* Navigation List */}
//       <nav className="flex-1">
//         <ul className="space-y-2">
//           {scholarshipTypes.map(({ id, label, icon }) => (
//             <li key={id}>
//               <button
//                 onClick={() => onSelectScholarship(id)}
//                 className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-150 flex items-center space-x-3
//                   ${selectedScholarship === id 
//                     ? 'bg-green-600 text-white' 
//                     : 'text-gray-700 hover:bg-gray-100'
//                   }`}
//               >
//                 <span className="text-xl">{icon}</span>
//                 <span>{label}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

















import React, { useState } from 'react';
import ScholarshipForm from './ScholarshipForm';

const Sidebar = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const scholarshipTypes = [
    { id: 'merit_based', label: 'Merit-Based Scholarship', icon: '🏆' },
    { id: 'need_based', label: 'Need-Based Scholarship', icon: '🤝' },
    { id: 'sports_scholarship', label: 'Sports Scholarship', icon: '⚽' },
    { id: 'research_grant', label: 'Research Grant', icon: '🔬' },
    { id: 'minority_scholarship', label: 'Minority Scholarship', icon: '🌍' },
    { id: 'disability_scholarship', label: 'Disability Scholarship', icon: '♿' },
    { id: 'government_scholarship', label: 'Government Scholarship', icon: '🏛️' },
    { id: 'private_funding', label: 'Private Funding', icon: '💰' }
  ];

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <div className="bg-white shadow-md w-64 h-screen p-4 flex flex-col">
        <h2 className="text-xl font-bold text-gray-800">Scholarships</h2>
        <p className="text-sm text-gray-600 mt-1">Apply for scholarships</p>

        {/* Navigation List */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {scholarshipTypes.map(({ id, label, icon }) => (
              <li key={id}>
                <button
                  onClick={() => setSelectedScholarship(id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-150 flex items-center space-x-3
                    ${selectedScholarship === id 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <span className="text-xl">{icon}</span>
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Form Section */}
      <div className="flex-grow p-6">
        {selectedScholarship && <ScholarshipForm scholarshipType={selectedScholarship} />}
      </div>
    </div>
  );
};

export default Sidebar;
