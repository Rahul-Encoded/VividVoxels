import React, { useState } from "react";
import { Mail } from "lucide-react"; // Install lucide-react for the email icon

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    designation: "",
    organization: "",
    purpose: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can integrate an API or email service here
    alert("Your query has been sent!");
  };

  return (
    <section id="contact">
      <div className="p-10 mt-12 border border-neutral-700 rounded-xl">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Send Us Your Query
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Purpose of Inquiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purpose of Inquiry
            </label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter the purpose of inquiry"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center items-center w-full h-12 px-6 mt-4 text-white bg-gradient-to-r from-purple-500 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-900 hover:scale-105 transition duration-300"
            >
              <Mail className="mr-2" />
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
