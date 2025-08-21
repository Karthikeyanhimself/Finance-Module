import { useState } from "react";

const FeeForm = ({ title }) => {
  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    amount: "",
    transactionId: "",
    receipt: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, receipt: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", formData);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">{title} Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="regNo" placeholder="Registration Number" value={formData.regNo} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="transactionId" placeholder="Transaction ID" value={formData.transactionId} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Pay Now</button>
      </form>
    </div>
  );
};

export default FeeForm;
