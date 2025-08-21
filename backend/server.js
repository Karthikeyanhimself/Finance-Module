// import express from 'express';
// import mongoose from 'mongoose';
// import multer from 'multer';
// import cors from 'cors';

// // Import the models from the separate file
// import {
//   Tuition,
//   Transport,
//   Hostel,
//   Scholarship,
//   DetainedCourseRegistration,
//   SupplementaryExamFees,
//   SportsGymFees,
//   OtherFees,
//   RuleViolationFines,
// } from './models/FeeModels.js';

// const app = express();
// const PORT = 5005;

// // Middleware
// app.use(
//   cors({
//     origin: 'http://localhost:5173', // Change to your actual frontend URL in production
//     methods: ['GET', 'POST'],
//     credentials: true,
//   })
// );
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/Test01")
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
// });
// const upload = multer({ storage });

// // Helper function to save payment details
// const savePayment = async (Model, formData, payments) => {
//   const newPayment = new Model({ formData: JSON.parse(formData), payments });
//   await newPayment.save();
// };

// // POST route for saving payment/document details
// app.post('/api/payments/:feeType', upload.array('screenshots', 5), async (req, res) => {
//   try {
//     const { feeType } = req.params;
//     const { formData, payments } = req.body;
//     const paymentData = JSON.parse(payments);
//     const processedPayments = paymentData.map((payment, index) => ({
//       ...payment,
//       screenshot: req.files[index] ? `/uploads/${req.files[index].filename}` : null,
//     }));

//     if (feeType === 'tuition') {
//       await savePayment(Tuition, formData, processedPayments);
//     } else if (feeType === 'transport') {
//       await savePayment(Transport, formData, processedPayments);
//     } else if (feeType === 'hostel') {
//       await savePayment(Hostel, formData, processedPayments);
//     } else if (feeType === 'scholarship') {
//       const newScholarship = new Scholarship({
//         formData: JSON.parse(formData),
//         documents: processedPayments.map((p) => ({
//           screenshot: p.screenshot,
//           documentType: p.transactionId,
//         })),
//       });
//       await newScholarship.save();
//     } else if (feeType === 'detained_course_registration_fees') {
//       await savePayment(DetainedCourseRegistration, formData, processedPayments);
//     } else if (feeType === 'supplementary_exam_fees') {
//       await savePayment(SupplementaryExamFees, formData, processedPayments);
//     } else if (feeType === 'sports_gym_fees') {
//       await savePayment(SportsGymFees, formData, processedPayments);
//     } else if (feeType === 'other_fees') {
//       await savePayment(OtherFees, formData, processedPayments);
//     } else if (feeType === 'rule_violation_fines') {
//       await savePayment(RuleViolationFines, formData, processedPayments);
//     } else {
//       return res.status(400).json({ message: 'Invalid fee type' });
//     }

//     res.status(201).json({ message: 'Payment details submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error submitting payment details' });
//   }
// });

// // GET route to fetch payment/document details based on fee type
// const getPayments = async (Model, res) => {
//   const payments = await Model.find().sort({ createdAt: -1 }) || [];
//   res.status(200).json(payments);
// };

// app.get('/api/payments/:feeType', async (req, res) => {
//   try {
//     const { feeType } = req.params;
//     if (feeType === 'tuition') {
//       await getPayments(Tuition, res);
//     } else if (feeType === 'transport') {
//       await getPayments(Transport, res);
//     } else if (feeType === 'hostel') {
//       await getPayments(Hostel, res);
//     } else if (feeType === 'scholarship') {
//       await getPayments(Scholarship, res);
//     } else if (feeType === 'detained_course_registration_fees') {
//       await getPayments(DetainedCourseRegistration, res);
//     } else if (feeType === 'supplementary_exam_fees') {
//       await getPayments(SupplementaryExamFees, res);
//     } else if (feeType === 'sports_gym_fees') {
//       await getPayments(SportsGymFees, res);
//     } else if (feeType === 'other_fees') {
//       await getPayments(OtherFees, res);
//     } else if (feeType === 'rule_violation_fines') {
//       await getPayments(RuleViolationFines, res);
//     } else {
//       return res.status(400).json({ message: 'Invalid fee type' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching payment details' });
//   }
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



























// import express from 'express';
// import mongoose from 'mongoose';
// import multer from 'multer';
// import cors from 'cors';

// // Import the models from the separate file
// import {
//   Tuition,
//   Transport,
//   Hostel,
//   Scholarship,
//   DetainedCourseRegistration,
//   SupplementaryExamFees,
//   SportsGymFees,
//   OtherFees,
//   RuleViolationFines,
// } from './models/FeeModels.js';

// const app = express();
// const PORT = 5005;

// // Middleware
// app.use(
//   cors({
//     origin: 'http://localhost:5173', // Change to your actual frontend URL in production
//     methods: ['GET', 'POST'],
//     credentials: true,
//   })
// );
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// // MongoDB Connections
// mongoose
//   .connect("mongodb://localhost:27017/Test01")
//   .then(() => console.log('Main Database (Test01) connected'))
//   .catch((err) => console.log(err));

// const scholarshipDB = mongoose.createConnection("mongodb://localhost:27017/ScholarshipDB");
// scholarshipDB.on("open", () => console.log("Scholarship Database connected"));
// scholarshipDB.on("error", (err) => console.log(err));

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
// });
// const upload = multer({ storage });

// // Scholarship Application Schema
// const ScholarshipApplicationSchema = new mongoose.Schema({
//   studentName: String,
//   registrationId: String,
//   department: String,
//   year: String,
//   category: String,
//   incomeCertificate: String,
//   previousMarks: String,
//   bankDetails: {
//     accountNumber: String,
//     ifscCode: String,
//   },
//   documents: [{ screenshot: String, documentType: String }],
// }, { timestamps: true });

// const ScholarshipApplication = scholarshipDB.model('ScholarshipApplication', ScholarshipApplicationSchema);

// // Helper function to save payment details
// const savePayment = async (Model, formData, payments) => {
//   const newPayment = new Model({ formData: JSON.parse(formData), payments });
//   await newPayment.save();
// };

// // POST route for saving payment/document details
// app.post('/api/payments/:feeType', upload.array('screenshots', 5), async (req, res) => {
//   try {
//     const { feeType } = req.params;
//     const { formData, payments } = req.body;
//     const paymentData = JSON.parse(payments);
//     const processedPayments = paymentData.map((payment, index) => ({
//       ...payment,
//       screenshot: req.files[index] ? `/uploads/${req.files[index].filename}` : null,
//     }));

//     if (feeType === 'tuition') {
//       await savePayment(Tuition, formData, processedPayments);
//     } else if (feeType === 'transport') {
//       await savePayment(Transport, formData, processedPayments);
//     } else if (feeType === 'hostel') {
//       await savePayment(Hostel, formData, processedPayments);
//     } else if (feeType === 'scholarship') {
//       const newScholarship = new Scholarship({
//         formData: JSON.parse(formData),
//         documents: processedPayments.map((p) => ({
//           screenshot: p.screenshot,
//           documentType: p.transactionId,
//         })),
//       });
//       await newScholarship.save();
//     } else if (feeType === 'detained_course_registration_fees') {
//       await savePayment(DetainedCourseRegistration, formData, processedPayments);
//     } else if (feeType === 'supplementary_exam_fees') {
//       await savePayment(SupplementaryExamFees, formData, processedPayments);
//     } else if (feeType === 'sports_gym_fees') {
//       await savePayment(SportsGymFees, formData, processedPayments);
//     } else if (feeType === 'other_fees') {
//       await savePayment(OtherFees, formData, processedPayments);
//     } else if (feeType === 'rule_violation_fines') {
//       await savePayment(RuleViolationFines, formData, processedPayments);
//     } else {
//       return res.status(400).json({ message: 'Invalid fee type' });
//     }

//     res.status(201).json({ message: 'Payment details submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error submitting payment details' });
//   }
// });

// // Scholarship Application Submission
// app.post('/api/scholarship/apply', upload.array('documents', 5), async (req, res) => {
//   try {
//     const formData = JSON.parse(req.body.formData);
//     const documents = req.files.map((file) => ({ screenshot: `/uploads/${file.filename}`, documentType: file.originalname }));
    
//     const newApplication = new ScholarshipApplication({ ...formData, documents });
//     await newApplication.save();
//     res.status(201).json({ message: 'Scholarship application submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error submitting scholarship application' });
//   }
// });

// // Fetch Scholarship Applications
// app.get('/api/scholarship/applications', async (req, res) => {
//   try {
//     const applications = await ScholarshipApplication.find().sort({ createdAt: -1 });
//     res.status(200).json(applications);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching scholarship applications' });
//   }
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

// Import models for fees
import {
  Tuition,
  Transport,
  Hostel,
  Scholarship,
  DetainedCourseRegistration,
  SupplementaryExamFees,
  SportsGymFees,
  OtherFees,
  RuleViolationFines,
} from './models/FeeModels.js';

const app = express();
const PORT = 5005;

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB (Two Databases: Fee Payments & Scholarships)
mongoose.connect('mongodb://localhost:27017/Test01', )
  .then(() => console.log('Connected to Fee Payments DB'))
  .catch(err => console.error(err));

const scholarshipDB = mongoose.createConnection('mongodb://localhost:27017/ScholarshipDB')

scholarshipDB.once('open', () => console.log('Connected to Scholarship DB'));

// Scholarship Schema
const ScholarshipApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  scholarshipAmount: { type: Number, required: true },
  accountHolderName: { type: String, required: true },
  bankAccountNumber: { type: String, required: true },
  ifscCode: { type: String, required: true },
  bankNameBranch: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  sgpa: { type: Number, required: true, min: 7 },
  documents: {
    admissionLetter: { type: String, required: true },
    feeChallans: { type: String, required: true },
    bankPassbookCopy: { type: String, required: true }
  }
}, { timestamps: true });

const ScholarshipApplication = scholarshipDB.model('ScholarshipApplication', ScholarshipApplicationSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// POST route for scholarship applications
app.post('/api/scholarship/apply', upload.fields([
  { name: 'admissionLetter', maxCount: 1 },
  { name: 'feeChallans', maxCount: 1 },
  { name: 'bankPassbookCopy', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      studentName, registrationNumber, scholarshipAmount,
      accountHolderName, bankAccountNumber, ifscCode,
      bankNameBranch, mobileNumber, sgpa
    } = req.body;

    if (sgpa < 7) {
      return res.status(400).json({ message: 'Minimum SGPA of 7 is required.' });
    }

    const newApplication = new ScholarshipApplication({
      studentName,
      registrationNumber,
      scholarshipAmount,
      accountHolderName,
      bankAccountNumber,
      ifscCode,
      bankNameBranch,
      mobileNumber,
      sgpa,
      documents: {
        admissionLetter: req.files['admissionLetter'] ? `/uploads/${req.files['admissionLetter'][0].filename}` : null,
        feeChallans: req.files['feeChallans'] ? `/uploads/${req.files['feeChallans'][0].filename}` : null,
        bankPassbookCopy: req.files['bankPassbookCopy'] ? `/uploads/${req.files['bankPassbookCopy'][0].filename}` : null
      }
    });

    await newApplication.save();
    res.status(201).json({ message: 'Scholarship application submitted successfully.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting scholarship application.' });
  }
});

// GET route to fetch application details by registration number
app.get('/api/scholarship/applications/:registrationNumber', async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const application = await ScholarshipApplication.findOne({ registrationNumber });

    if (!application) {
      return res.status(404).json({ message: 'Application not found.' });
    }

    res.status(200).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching application details.' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





















