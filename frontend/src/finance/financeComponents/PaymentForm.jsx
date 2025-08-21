import React, { useState, useEffect } from 'react';
import Button from './Button';
import PaymentTable from './PaymentTable';
import { getFormFields } from '../utils/formConfig';

const PaymentForm = ({ feeType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [payments, setPayments] = useState([{ screenshot: null, transactionId: '', amount: '' }]);
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    setFormData({});
    setPayments([{ screenshot: null, transactionId: '', amount: '' }]);
    setFormFields(getFormFields(feeType)); // Update fields based on feeType
  }, [feeType]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Auto-fill transport fee based on selected pickup point
    if (field === 'pickupPoint') {
      const selectedOption = formFields
        .find((f) => f.id === 'pickupPoint')
        ?.options.find((opt) => opt.value === value);
      if (selectedOption) {
        setFormData((prev) => ({
          ...prev,
          transportFee: selectedOption.amount || '',
        }));
      }
    }
  };

  const handleAddPayment = () => {
    setPayments((prev) => [...prev, { screenshot: null, transactionId: '', amount: '' }]);
  };

  const handlePaymentChange = (index, field, value) => {
    setPayments((prev) => {
      const newPayments = [...prev];
      newPayments[index] = {
        ...newPayments[index],
        [field]: value,
      };
      return newPayments;
    });
  };

  const handleDeletePayment = (index) => {
    setPayments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Create FormData to send text fields and files together
      const formPayload = new FormData();

      // Append form data as a JSON string
      formPayload.append('formData', JSON.stringify(formData));

      // Prepare payments data excluding file objects (they will be sent separately)
      const paymentsData = payments.map((payment) => ({
        ...payment,
        screenshot: null, // placeholder for the file upload
      }));
      formPayload.append('payments', JSON.stringify(paymentsData));

      // Append each screenshot file to the payload
      payments.forEach((payment) => {
        if (payment.screenshot) {
          formPayload.append('screenshots', payment.screenshot);
        }
      });

      // Connect to backend endpoint (adjust the URL as needed in production)
      const response = await fetch(`http://localhost:5005/api/payments/${feeType}`, {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Error submitting payment');
      }

      const resData = await response.json();
      console.log('Submission successful:', resData);
      alert('Payment details submitted successfully!');

      // Reset the form state after successful submission
      setFormData({});
      setPayments([{ screenshot: null, transactionId: '', amount: '' }]);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 flex-grow overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Pay {feeType.replace(/_/g, ' ')}
        </h2>

        <div className="space-y-6">
          {formFields.length > 0 ? (
            formFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field.id}
                    required={field.required}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                  >
                    <option value="">{field.placeholder || 'Select an option'}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    required={field.required}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    {...field.props}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No additional details required for this fee type.</p>
          )}

          <PaymentTable
            payments={payments}
            onAddPayment={handleAddPayment}
            onPaymentChange={handlePaymentChange}
            onDeletePayment={handleDeletePayment}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
          >
            {isLoading ? 'Submitting...' : 'Submit Payment'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
