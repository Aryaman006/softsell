import React from "react";

const WhyChooseUs = ({id}) => {
  return (
    <section id={id} className="py-20 bg-white my-16">
      <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center m-10">
        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="text-6xl mb-6 text-blue-500 transition-all duration-300 hover:text-blue-700">
            🔒
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">Secure</h3>
          <p className="text-gray-600 text-lg">
            Your personal and payment details are safe with us.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="text-6xl mb-6 text-yellow-500 transition-all duration-300 hover:text-yellow-700">
            💵
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">Fair Pricing</h3>
          <p className="text-gray-600 text-lg">
            We offer competitive prices for your licenses.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="text-6xl mb-6 text-green-500 transition-all duration-300 hover:text-green-700">
            ⏱️
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">Fast Transactions</h3>
          <p className="text-gray-600 text-lg">
            Get your payment quickly once the license is validated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
