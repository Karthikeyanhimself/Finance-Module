import React from 'react';

const AdminSidebar = ({ selectedSection, onSelectSection }) => {
  const adminSections = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'user_management', label: 'User Management', icon: '👥' },
    { id: 'payment_reports', label: 'Payment Reports', icon: '📄' },
    { id: 'system_logs', label: 'System Logs', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col justify-between">
      {/* Sidebar Header */}
      <div>
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <p className="text-sm text-gray-400 mt-1">Manage the system</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {adminSections.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                onClick={() => onSelectSection(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-150 flex items-center space-x-3
                  ${selectedSection === id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
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

export default AdminSidebar;
