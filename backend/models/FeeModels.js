import mongoose from 'mongoose';

// Common payment schema for fee types that use payment details
const paymentSchema = {
  screenshot: { type: String, required: true },
  transactionId: { type: String, required: true },
  amount: { type: Number, required: true },
};

// Schemas for fee types using payments array
const tuitionSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const transportSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const hostelSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

// Scholarship uses documents instead of payments
const scholarshipSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  documents: [
    {
      screenshot: { type: String, required: true },
      documentType: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

// Additional fee types with similar payment structure
const detainedCourseRegistrationSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const supplementaryExamFeesSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const sportsGymFeesSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const otherFeesSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

const ruleViolationFinesSchema = new mongoose.Schema({
  formData: { type: Object, required: true },
  payments: [paymentSchema],
  createdAt: { type: Date, default: Date.now },
});

// Create Models
const Tuition = mongoose.model('Tuition', tuitionSchema);
const Transport = mongoose.model('Transport', transportSchema);
const Hostel = mongoose.model('Hostel', hostelSchema);
const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
const DetainedCourseRegistration = mongoose.model('DetainedCourseRegistration', detainedCourseRegistrationSchema);
const SupplementaryExamFees = mongoose.model('SupplementaryExamFees', supplementaryExamFeesSchema);
const SportsGymFees = mongoose.model('SportsGymFees', sportsGymFeesSchema);
const OtherFees = mongoose.model('OtherFees', otherFeesSchema);
const RuleViolationFines = mongoose.model('RuleViolationFines', ruleViolationFinesSchema);

export {
  Tuition,
  Transport,
  Hostel,
  Scholarship,
  DetainedCourseRegistration,
  SupplementaryExamFees,
  SportsGymFees,
  OtherFees,
  RuleViolationFines,
};
