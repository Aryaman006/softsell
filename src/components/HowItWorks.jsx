import React from "react";

const HowItWorks = ({id}) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center m-10">
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105">
          <div className="text-6xl mb-6 text-indigo-600 transition-all duration-300 hover:text-indigo-800">
            📦
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">
            Upload License
          </h3>
          <p className="text-gray-500 text-lg">
            Simply upload your software license for valuation.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105">
          <div className="text-6xl mb-6 text-green-600 transition-all duration-300 hover:text-green-800">
            💰
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">
            Get Valuation
          </h3>
          <p className="text-gray-500 text-lg">
            We’ll assess the value of your license quickly.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105">
          <div className="text-6xl mb-6 text-yellow-600 transition-all duration-300 hover:text-yellow-800">
            ✅
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">
            Get Paid
          </h3>
          <p className="text-gray-500 text-lg">
            Once accepted, we’ll process your payment immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
