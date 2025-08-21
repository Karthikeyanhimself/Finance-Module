











// import React, { useState } from 'react';

// const ScholarshipForm = () => {
//   const [formData, setFormData] = useState({
//     studentName: '',
//     vuid: '',
//     scholarshipAmount: '',
//     accountHolder: '',
//     bankAccountNumber: '',
//     ifscCode: '',
//     bankNameBranch: '',
//     mobileNumber: '',
//     sgpa: '',
//     familyIncome: '',
//     admissionLetter: false,
//     feeChallans: false,
//     bankPassbook: false,
//   });

//   const [documents, setDocuments] = useState([{ file: null }]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Scholarship Application Submitted:', formData, documents);
//     alert('Scholarship application submitted successfully!');
//   };

//   const onAddDocument = () => {
//     setDocuments([...documents, { file: null }]);
//   };

//   const onDocumentChange = (index, file) => {
//     const updatedDocs = [...documents];
//     updatedDocs[index].file = file;
//     setDocuments(updatedDocs);
//   };

//   const onDeleteDocument = (index) => {
//     const updatedDocs = documents.filter((_, i) => i !== index);
//     setDocuments(updatedDocs);
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scholarship Application</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="studentName"
//           placeholder="Enter student name"
//           value={formData.studentName}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="vuid"
//           placeholder="Enter VUID or Reg. No."
//           value={formData.vuid}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="scholarshipAmount"
//           placeholder="Enter scholarship amount"
//           value={formData.scholarshipAmount}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="accountHolder"
//           placeholder="Enter account holder name"
//           value={formData.accountHolder}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="bankAccountNumber"
//           placeholder="Enter bank account number"
//           value={formData.bankAccountNumber}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="ifscCode"
//           placeholder="Enter IFSC code"
//           value={formData.ifscCode}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="text"
//           name="bankNameBranch"
//           placeholder="Enter bank name and branch"
//           value={formData.bankNameBranch}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="tel"
//           name="mobileNumber"
//           placeholder="Enter mobile number"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           pattern="[0-9]{10}"
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="sgpa"
//           placeholder="Enter SGPA (min. 7 required)"
//           value={formData.sgpa}
//           onChange={handleChange}
//           min="0"
//           max="10"
//           step="0.01"
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="number"
//           name="familyIncome"
//           placeholder="Enter annual family income"
//           value={formData.familyIncome}
//           onChange={handleChange}
//           min="0"
//           required
//           className="w-full p-2 border rounded"
//         />

//         <h3 className="text-lg font-semibold mt-4">Required Documents Submission</h3>
//         <div className="border p-4 rounded-lg">
//           <button type="button" onClick={onAddDocument} className="bg-blue-500 text-white p-2 rounded">+ Add Document</button>

//           <table className="min-w-full divide-y divide-gray-200 mt-4">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {documents.map((doc, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4">
//                     <input type="file" onChange={(e) => onDocumentChange(index, e.target.files[0])} className="w-full" required />
//                   </td>
//                   <td className="px-6 py-4">
//                     {documents.length > 1 && (
//                       <button onClick={() => onDeleteDocument(index)} className="text-red-600 hover:text-red-800">Delete</button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ScholarshipForm;






























import React, { useState, useEffect } from 'react';

const ScholarshipForm = ({ scholarshipType }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    vuid: '',
    scholarshipAmount: '',
    accountHolder: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankNameBranch: '',
    mobileNumber: '',
    sgpa: '',
    familyIncome: '',
    admissionLetter: false,
    feeChallans: false,
    bankPassbook: false,
  });

  const [documents, setDocuments] = useState([{ file: null }]);

  // Dynamically update form fields based on selected scholarship type
  useEffect(() => {
    if (scholarshipType === 'merit_based') {
      setFormData((prev) => ({ ...prev, sgpa: '', admissionLetter: false }));
    } else if (scholarshipType === 'need_based') {
      setFormData((prev) => ({ ...prev, familyIncome: '', feeChallans: false }));
    } else if (scholarshipType === 'sports_scholarship') {
      setFormData((prev) => ({ ...prev, admissionLetter: false }));
    } else if (scholarshipType === 'research_grant') {
      setFormData((prev) => ({ ...prev, sgpa: '', researchProposal: false }));
    } else if (scholarshipType === 'minority_scholarship') {
      setFormData((prev) => ({ ...prev, minorityCertificate: false }));
    } else if (scholarshipType === 'disability_scholarship') {
      setFormData((prev) => ({ ...prev, disabilityCertificate: false }));
    }
  }, [scholarshipType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scholarship Application Submitted:', formData, documents);
    alert(`Scholarship application for ${scholarshipType} submitted successfully!`);
  };

  const onAddDocument = () => {
    setDocuments([...documents, { file: null }]);
  };

  const onDocumentChange = (index, file) => {
    const updatedDocs = [...documents];
    updatedDocs[index].file = file;
    setDocuments(updatedDocs);
  };

  const onDeleteDocument = (index) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocs);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{scholarshipType.replace('_', ' ').toUpperCase()} Application</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Original Fields */}
        <input type="text" name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="vuid" placeholder="VUID / Registration Number" value={formData.vuid} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="scholarshipAmount" placeholder="Scholarship Amount" value={formData.scholarshipAmount} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="accountHolder" placeholder="Account Holder Name" value={formData.accountHolder} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="bankAccountNumber" placeholder="Bank Account Number" value={formData.bankAccountNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="ifscCode" placeholder="IFSC Code" value={formData.ifscCode} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="bankNameBranch" placeholder="Bank Name & Branch" value={formData.bankNameBranch} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required className="w-full p-2 border rounded" />

        {/* Dynamic Fields */}
        {scholarshipType === 'merit_based' && (
          <input type="number" name="sgpa" placeholder="SGPA (min. 7 required)" value={formData.sgpa} onChange={handleChange} min="0" max="10" step="0.01" required className="w-full p-2 border rounded" />
        )}
        {scholarshipType === 'need_based' && (
          <input type="number" name="familyIncome" placeholder="Annual Family Income" value={formData.familyIncome} onChange={handleChange} min="0" required className="w-full p-2 border rounded" />
        )}

        {/* Document Uploads */}
        <h3 className="text-lg font-semibold mt-4">Required Documents</h3>
        <label className="flex items-center">
          <input type="checkbox" name="admissionLetter" checked={formData.admissionLetter} onChange={handleChange} className="mr-2" />
          Admission Letter
        </label>
        <label className="flex items-center">
          <input type="checkbox" name="feeChallans" checked={formData.feeChallans} onChange={handleChange} className="mr-2" />
          Fee Challans
        </label>
        <label className="flex items-center">
          <input type="checkbox" name="bankPassbook" checked={formData.bankPassbook} onChange={handleChange} className="mr-2" />
          Bank Passbook Copy
        </label>

        {/* Additional Conditional Documents */}
        {scholarshipType === 'minority_scholarship' && (
          <label className="flex items-center">
            <input type="checkbox" name="minorityCertificate" checked={formData.minorityCertificate} onChange={handleChange} className="mr-2" />
            Minority Certificate
          </label>
        )}
        {scholarshipType === 'disability_scholarship' && (
          <label className="flex items-center">
            <input type="checkbox" name="disabilityCertificate" checked={formData.disabilityCertificate} onChange={handleChange} className="mr-2" />
            Disability Certificate
          </label>
        )}

        {/* File Upload Section */}
        <h3 className="text-lg font-semibold mt-4">Upload Additional Documents</h3>
        <div className="border p-4 rounded-lg">
          <button type="button" onClick={onAddDocument} className="bg-blue-500 text-white p-2 rounded">+ Add Document</button>

          <table className="min-w-full divide-y divide-gray-200 mt-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <input type="file" onChange={(e) => onDocumentChange(index, e.target.files[0])} className="w-full" required />
                  </td>
                  <td className="px-6 py-4">
                    {documents.length > 1 && (
                      <button onClick={() => onDeleteDocument(index)} className="text-red-600 hover:text-red-800">Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Submit</button>
      </form>
    </div>
  );
};

export default ScholarshipForm;
