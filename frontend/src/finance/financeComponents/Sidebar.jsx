import React from 'react';

const Sidebar = ({ selectedFeeType, onSelectFeeType }) => {
  const feeTypes = [
    { id: 'tuition', label: 'Tuition Fee', icon: '🎓' },
    { id: 'transport', label: 'Transport Fee', icon: '🚌' },
    //{ id: 'scholarship', label: 'Scholarship Application', icon: '📚' },
    { id: 'hostel', label: 'Hostel Fee', icon: '🏢' },
    { id: 'detained_course_registration_fees', label: 'Detained Course Registration', icon: '📑' },
    { id: 'supplementary_exam_fees', label: 'Supplementary Exam Fees', icon: '📝' },
    { id: 'sports_gym_fees', label: 'Sports & Gym Fees', icon: '🏋️' },
    { id: 'other_fees', label: 'Other Fees', icon: '💰' },
    { id: 'rule_violation_fines', label: 'Rule Violation Fines', icon: '🚨' }
  ];

  return (
    <div className="bg-white shadow-md w-64 h-screen p-4 flex flex-col justify-between">
      {/* Sidebar Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">Finance Section</h2>
        <p className="text-sm text-gray-600 mt-1">Manage your payments</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {feeTypes.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                onClick={() => onSelectFeeType(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-150 flex items-center space-x-3
                  ${selectedFeeType === id 
                    ? 'bg-blue-600 text-white' 
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
  );
};

export default Sidebar;
