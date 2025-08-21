// import React, { useEffect, useState } from 'react';
// import { getFormFields } from './formConfig';

// const AdminForm = ({ feeType }) => {
//     const [fields, setFields] = useState([]);

//     useEffect(() => {
//         const fetchFields = async () => {
//             const formFields = await getFormFields(feeType);
//             setFields(formFields);
//         };
//         fetchFields();
//     }, [feeType]);

//     return (
//         <form>
//             {fields.map(field => (
//                 <div key={field.id}>
//                     <label>{field.label}</label>
//                     <input type={field.type} placeholder={field.placeholder} required={field.required} />
//                 </div>
//             ))}
//         </form>
//     );
// };

// export default AdminForm;







// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminPage = () => {
//   const [feeType, setFeeType] = useState("tuition"); // Default fee type
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(http://localhost:5005/api/payments/${feeType});
//         setStudents(response.data);
//       } catch (error) {
//         console.error("Error fetching student data:", error);
//       }
//     };

//     fetchStudents();
//   }, [feeType]); // Refetch when feeType changes

//   return (
//     <div style={{ display: "flex" }}>
//       {/* Left Sidebar */}
//       <div style={{ width: "25%", padding: "20px", background: "#f4f4f4" }}>
//         <h2>Admin Panel</h2>
//         <label>Select Fee Type:</label>
//         <select value={feeType} onChange={(e) => setFeeType(e.target.value)}>
//           <option value="tuition">Tuition Fees</option>
//           <option value="transport">Transport Fees</option>
//           <option value="hostel">Hostel Fees</option>
//           <option value="scholarship">Scholarship</option>
//           <option value="detained_course_registration_fees">Detained Course Fees</option>
//           <option value="supplementary_exam_fees">Supplementary Exam Fees</option>
//           <option value="sports_gym_fees">Sports & Gym Fees</option>
//           <option value="other_fees">Other Fees</option>
//           <option value="rule_violation_fines">Rule Violation Fines</option>
//         </select>
//       </div>

//       {/* Right Side - Student Fee List */}
//       <div style={{ width: "75%", padding: "20px" }}>
//         <h2>Student Payments - {feeType.replace(/_/g, " ")}</h2>
//         <table border="1" width="100%">
//           <thead>
//             <tr>
//               <th>Student Name</th>
//               <th>Amount Paid</th>
//               <th>Transaction ID</th>
//               <th>Screenshot</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.length > 0 ? (
//               students.map((student, index) => (
//                 <tr key={index}>
//                   <td>{student.formData.name}</td>
//                   <td>{student.payments[0]?.amount || "N/A"}</td>
//                   <td>{student.payments[0]?.transactionId || "N/A"}</td>
//                   <td>
//                     {student.payments[0]?.screenshot ? (
//                       <img src={http://localhost:5005${student.payments[0]?.screenshot}} alt="screenshot" width="50" />
//                     ) : (
//                       "No Screenshot"
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


// import React from 'react';
// import Sidebar from './Sidebar';

// const admin = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />
//     </div>
//   );
// };

// export default admin;


// import React, { useState } from 'react';
// import Sidebar from './Sidebar';

// const feeDataFields = {
//   tuition: ['Student ID', 'Name', 'Course', 'Amount Due', 'Due Date'],
//   transport: ['Student ID', 'Name', 'Route', 'Bus Number', 'Amount Due'],
//   scholarship: ['Student ID', 'Name', 'Scholarship Type', 'Approval Status', 'Amount Awarded'],
//   hostel: ['Student ID', 'Name', 'Hostel Block', 'Room Number', 'Amount Due'],
//   detained_course_registration_fees: ['Student ID', 'Name', 'Course Code', 'Course Name', 'Amount Due'],
//   supplementary_exam_fees: ['Student ID', 'Name', 'Exam Name', 'Date', 'Amount Due'],
//   sports_gym_fees: ['Student ID', 'Name', 'Membership Type', 'Validity', 'Amount Due'],
//   other_fees: ['Student ID', 'Name', 'Fee Type', 'Amount Due', 'Remarks'],
//   rule_violation_fines: ['Student ID', 'Name', 'Violation Type', 'Fine Amount', 'Remarks'],
// };

// const Finance = () => {
//   const [selectedFeeType, setSelectedFeeType] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar selectedFeeType={selectedFeeType} onSelectFeeType={setSelectedFeeType} />

//       <main className="flex-1 p-8">
//         {selectedFeeType && (
//           <div className="bg-white p-6 shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               {selectedFeeType.replace(/_/g, ' ').toUpperCase()}
//             </h2>

//             <table className="min-w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   {feeDataFields[selectedFeeType].map((field) => (
//                     <th key={field} className="border border-gray-300 px-4 py-2">{field}</th>
//                   ))}
//                 </tr>
//               </thead>
//             </table>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Finance;

// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';

// const feeDataFields = {
//   tuition: ['Student ID', 'Name', 'Course', 'Amount Due', 'Due Date'],
//   transport: ['Student ID', 'Name', 'Route', 'Bus Number', 'Amount Due'],
//   scholarship: ['Student ID', 'Name', 'Scholarship Type', 'Approval Status', 'Amount Awarded'],
//   hostel: ['Student ID', 'Name', 'Hostel Block', 'Room Number', 'Amount Due'],
//   detained_course_registration_fees: ['Student ID', 'Name', 'Course Code', 'Course Name', 'Amount Due'],
//   supplementary_exam_fees: ['Student ID', 'Name', 'Exam Name', 'Date', 'Amount Due'],
//   sports_gym_fees: ['Student ID', 'Name', 'Membership Type', 'Validity', 'Amount Due'],
//   other_fees: ['Student ID', 'Name', 'Fee Type', 'Amount Due', 'Remarks'],
//   rule_violation_fines: ['Student ID', 'Name', 'Violation Type', 'Fine Amount', 'Remarks'],
// };

// const Finance = () => {
//   const [selectedFeeType, setSelectedFeeType] = useState(null);
//   const [feeData, setFeeData] = useState([]);

//   useEffect(() => {
//     if (selectedFeeType) {
//       fetch(http://localhost:5000/api/fees?type=${selectedFeeType})
//         .then((res) => res.json())
//         .then((data) => setFeeData(data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [selectedFeeType]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar selectedFeeType={selectedFeeType} onSelectFeeType={setSelectedFeeType} />

//       <main className="flex-1 p-8">
//         {selectedFeeType && (
//           <div className="bg-white p-6 shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               {selectedFeeType.replace(/_/g, ' ').toUpperCase()}
//             </h2>

//             <table className="min-w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   {feeDataFields[selectedFeeType].map((field) => (
//                     <th key={field} className="border border-gray-300 px-4 py-2">{field}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {feeData.map((item, index) => (
//                   <tr key={index} className="bg-gray-100 hover:bg-gray-200">
//                     {feeDataFields[selectedFeeType].map((field) => (
//                       <td key={field} className="border border-gray-300 px-4 py-2">{item[field] || "N/A"}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Finance;



import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const feeDataFields = {
    tuition: ['Student ID', 'Name', 'Course', 'Amount Due', 'Due Date'],
    transport: ['Student ID', 'Name', 'Route', 'Bus Number', 'Amount Due'],
  scholarship: ['Student ID', 'Name', 'Scholarship Type', 'Approval Status', 'Amount Awarded'],
  hostel: ['Student ID', 'Name', 'Hostel Block', 'Room Number', 'Amount Due'],
  detained_course_registration_fees: ['Student ID', 'Name', 'Course Code', 'Course Name', 'Amount Due'],
  supplementary_exam_fees: ['Student ID', 'Name', 'Exam Name', 'Date', 'Amount Due'],
  sports_gym_fees: ['Student ID', 'Name', 'Membership Type', 'Validity', 'Amount Due'],
  other_fees: ['Student ID', 'Name', 'Fee Type', 'Amount Due', 'Remarks'],
  rule_violation_fines: ['Student ID', 'Name', 'Violation Type', 'Fine Amount', 'Remarks'],
};

const admin = () => {
  const [selectedFeeType, setSelectedFeeType] = useState(null);
  const [feeData, setFeeData] = useState([]);

  useEffect(() => {
    if (selectedFeeType) {
      fetch(`http://localhost:5005/api/payments/${selectedFeeType}`)
        .then((res) => res.json())
        .then((data) => setFeeData(data))
        .catch((err) => console.error('Error fetching data:', err));
    }
  }, [selectedFeeType]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar selectedFeeType={selectedFeeType} onSelectFeeType={setSelectedFeeType} />

      <main className="flex-1 p-8">
        {selectedFeeType && (
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedFeeType.replace(/_/g, ' ').toUpperCase()}
            </h2>

            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  {feeDataFields[selectedFeeType].map((field) => (
                    <th key={field} className="border border-gray-300 px-4 py-2">{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeData.length > 0 ? (
                  feeData.map((item, index) => (
                    <tr key={index} className="border border-gray-300">
                      {feeDataFields[selectedFeeType].map((field, idx) => (
                        <td key={idx} className="border border-gray-300 px-4 py-2">{item.formData[field.toLowerCase().replace(/\s+/g, '_')] || 'N/A'}</td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={feeDataFields[selectedFeeType].length} className="text-center py-4">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default admin;