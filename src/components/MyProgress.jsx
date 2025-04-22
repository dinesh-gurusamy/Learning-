// src/components/MyProgress.jsx
import React from 'react';

const MyProgress = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">My Progress</h2>
      <div className="relative overflow-hidden">
        {/* Placeholder for Circular Progress */}
        <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default MyProgress;