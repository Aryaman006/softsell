import React, { useState } from "react";

const ContactForm = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Form submitted!");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } catch (error) {
      alert("There was an issue with your submission. Please try again.");
    }
  };

  return (
    <section id={id} className="py-16 bg-gray-50">
      <h2 className="text-4xl text-center font-bold mb-8 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out px-4">
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            aria-label="Your Company"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            required
            aria-label="License Type"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="">Select License Type</option>
            <option value="Software License">Software License</option>
            <option value="Office License">Office License</option>
            <option value="OS License">OS License</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
