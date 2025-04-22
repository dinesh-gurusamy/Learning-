// src/components/Schedule.jsx
import React from 'react';

const Schedule = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Schedule</h2>
      <div className="space-y-4">
        {/* Example Schedule Items */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
            </svg>
            <div>
              <p className="font-bold">Calculus</p>
              <p className="text-sm text-gray-500">07:30–09:00 | Mrs. Endah</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="9 18 12 12 15 18"></polyline>
          </svg>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
            </svg>
            <div>
              <p className="font-bold">Machine Learning</p>
              <p className="text-sm text-gray-500">09:00–10:00 | Mr. Dimas</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="9 18 12 12 15 18"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Schedule;