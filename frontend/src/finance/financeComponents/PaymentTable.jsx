import React from "react";
import Button from "./Button";

const PaymentTable = ({
  payments,
  onAddPayment,
  onPaymentChange,
  onDeletePayment,
  documents = [], // ✅ Added default empty array to prevent errors
  onAddDocument,
  onDocumentChange,
  onDeleteDocument,
}) => {
  return (
    <div className="mt-6">
      {/* Payment Table */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Payment Details</h3>
        <Button
          type="button"
          variant="secondary"
          onClick={() => onAddPayment()}
          className="flex items-center"
        >
          <span className="mr-2">+</span> Add Payment
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Payment Screenshot
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount Paid
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      onPaymentChange(index, "screenshot", e.target.files[0])
                    }
                    className="w-full"
                    required
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={payment.transactionId}
                    onChange={(e) =>
                      onPaymentChange(index, "transactionId", e.target.value)
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter Transaction ID"
                    required
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    value={payment.amount}
                    onChange={(e) =>
                      onPaymentChange(index, "amount", e.target.value)
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter Amount"
                    min="0"
                    required
                  />
                </td>
                <td className="px-6 py-4">
                  {payments.length > 1 && (
                    <button
                      onClick={() => onDeletePayment(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Document Upload Table
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Document Upload</h3>
          <Button
            type="button"
            variant="secondary"
            onClick={() => onAddDocument()}
            className="flex items-center"
          >
            <span className="mr-2">+</span> Add Document
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Document
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <input
                      type="file"
                      onChange={(e) =>
                        onDocumentChange(index, e.target.files[0])
                      }
                      className="w-full"
                      required
                    />
                  </td>
                  <td className="px-6 py-4">
                    {documents.length > 1 && (
                      <button
                        onClick={() => onDeleteDocument(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default PaymentTable;
