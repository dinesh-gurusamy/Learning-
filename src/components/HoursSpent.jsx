// src/components/HoursSpent.jsx
import React from 'react';

const HoursSpent = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Hours Spent</h2>
      <div className="relative overflow-hidden">
        {/* Placeholder for Bar Chart */}
        <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HoursSpent;