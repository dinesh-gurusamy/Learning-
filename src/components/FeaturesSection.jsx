// src/components/FeaturesSection.jsx
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#D1D0D0] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">AI-Driven Assessments</h3>
            <p className="text-gray-600">Identify your skill level with precision.</p>
          </div>
          <div className="bg-[#D1D0D0] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Custom Learning Paths</h3>
            <p className="text-gray-600">Tailored roadmaps for your career goals.</p>
          </div>
          <div className="bg-[#D1D0D0] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Hands-On Projects</h3>
            <p className="text-gray-600">Practical experience with real-world projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;