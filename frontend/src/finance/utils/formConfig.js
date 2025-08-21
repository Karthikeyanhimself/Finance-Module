

export const getFormFields = (feeType) => {
    const commonFields = [
        {
            id: 'regNumber',
            label: 'Registration Number',
            type: 'string',
            required: true,
            placeholder: 'Enter your registration number',
            // props: {
            //     pattern: '[0-9]+',
            // },
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            placeholder: 'Enter your email',
        },
        {
            id: 'contactNumber',
            label: 'Contact Number',
            type: 'tel',
            required: true,
            placeholder: 'Enter your contact number',
            props: {
                pattern: '[0-9]{10}',
            },
        },
    ];

    const feeTypeFields = {
        tuition: [
            {
                id: 'branch',
                label: 'Branch',
                type: 'select',
                required: true,
                options: [
                    { value: 'cse', label: 'Computer Science Engineering' },
                    { value: 'ece', label: 'Electronics & Communication Engineering' },
                    { value: 'eee', label: 'Electrical & Electronics Engineering' },
                    { value: 'mech', label: 'Mechanical Engineering' },
                    { value: 'civil', label: 'Civil Engineering' },
                ],
            },
            {
                id: 'year',
                label: 'Year',
                type: 'select',
                required: true,
                options: [
                    { value: '1', label: '1st Year' },
                    { value: '2', label: '2nd Year' },
                    { value: '3', label: '3rd Year' },
                    { value: '4', label: '4th Year' },
                ],
            },
            {
                id: 'semester',
                label: 'Semester',
                type: 'select',
                required: true,
                options: [
                    { value: '1', label: 'Semester 1' },
                    { value: '2', label: 'Semester 2' },
                ],
            },
        ],
        transport: [
            {
                id: 'pickupPoint',
                label: 'Pickup Point',
                type: 'select',
                required: true,
                options: [
                    { value: 'tenali', label: 'Tenali', amount: 19500 },
                    { value: 'guntur', label: 'Guntur', amount: 36000 },
                    { value: 'vijayawada', label: 'Vijayawada', amount: 45000 },
                    { value: 'amaravathi', label: 'Amaravathi', amount: 38000 },
                    { value: 'mangalagiri', label: 'Mangalagiri', amount: 35000 },
                ],
            },
            {
                id: 'transportFee',
                label: 'Transport Fee (Auto-filled)',
                type: 'number',
                required: true,
                placeholder: 'Transport fee will be auto-filled',
                props: {
                    readOnly: true,
                },
            },
        ],
        hostel: [
            {
                id: 'blockName',
                label: 'Block Name',
                type: 'select',
                required: true,
                options: [
                    { value: 'a', label: 'Block A' },
                    { value: 'b', label: 'Block B' },
                    { value: 'c', label: 'Block C' },
                    { value: 'd', label: 'Block D' },
                ],
            },
            {
                id: 'roomNumber',
                label: 'Room Number',
                type: 'text',
                required: true,
                placeholder: 'Enter room number',
            },
        ],
        scholarship: [
            {
                id: 'studentName',
                label: 'Name of the Student',
                type: 'text',
                required: true,
                placeholder: 'Enter student name',
            },
            {
                id: 'vuid',
                label: 'VUID / Registration Number',
                type: 'text',
                required: true,
                placeholder: 'Enter VUID or Reg. No.',
            },
            {
                id: 'scholarshipAmount',
                label: 'Scholarship per Semester Amount',
                type: 'number',
                required: true,
                placeholder: 'Enter scholarship amount',
            },
            {
                id: 'accountHolder',
                label: 'Account Holder Name',
                type: 'text',
                required: true,
                placeholder: 'Enter account holder name',
            },
            {
                id: 'bankAccountNumber',
                label: 'Bank Account Number',
                type: 'text',
                required: true,
                placeholder: 'Enter bank account number',
            },
            {
                id: 'ifscCode',
                label: 'Bank IFSC Code',
                type: 'text',
                required: true,
                placeholder: 'Enter IFSC code',
            },
            {
                id: 'bankNameBranch',
                label: 'Name of the Bank & Branch',
                type: 'text',
                required: true,
                placeholder: 'Enter bank name and branch',
            },
            {
                id: 'mobileNumber',
                label: 'Mobile Number',
                type: 'tel',
                required: true,
                placeholder: 'Enter mobile number',
                props: {
                    pattern: '[0-9]{10}',
                },
            },
            {
                id: 'sgpa',
                label: 'Previous Semester SGPA',
                type: 'number',
                required: true,
                placeholder: 'Enter SGPA (min. 7 required)',
                props: {
                    min: '0',
                    max: '10',
                    step: '0.01',
                },
            },
            {
                id: 'familyIncome',
                label: 'Annual Family Income',
                type: 'number',
                required: true,
                placeholder: 'Enter income',
                props: {
                    min: '0',
                },
            },
            {
                id: 'requiredDocuments',
                label: 'Required Documents Submission',
                type: 'customTable',
                required: true,
                customHTML: `
                    <table border="1" style="width:100%; text-align:left;">
                        <thead>
                            <tr>
                                <th>Document Name</th>
                                <th>Submission Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Admission Letter Xerox</td>
                                <td><input type="checkbox" name="admissionLetter"></td>
                            </tr>
                            <tr>
                                <td>Full Fee Payment Challans Xerox</td>
                                <td><input type="checkbox" name="feeChallans"></td>
                            </tr>
                            <tr>
                                <td>Bank Cheque / Passbook Colour Xerox</td>
                                <td><input type="checkbox" name="bankPassbook"></td>
                            </tr>
                        </tbody>
                    </table>
                `,
            },
        ],
        detained_course_registration: [
            {
                id: 'courseId',
                label: 'Course ID',
                type: 'text',
                required: true,
                placeholder: 'Enter Course ID',
            },
        ],
        supplementary_exam_fees: [
            {
                id: 'courseId',
                label: 'Course ID',
                type: 'text',
                required: true,
                placeholder: 'Enter Course ID',
            },
        ],
    };

    return [...commonFields, ...(feeTypeFields[feeType] || [])];
};







    