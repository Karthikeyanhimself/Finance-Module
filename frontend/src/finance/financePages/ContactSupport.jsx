import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Support</h2>
        <p className="text-gray-600 mt-2">
          Need help? Contact our finance support team for assistance.
        </p>
        <p className="mt-4">
          📧 Email: <a href="mailto:support@vignanuniversity.com" className="text-blue-600">support@vignanuniversity.com</a>
        </p>
        <p>📞 Phone: +91 98765 43210</p>
      </div>
    </div>
  );
};

export default Support;
