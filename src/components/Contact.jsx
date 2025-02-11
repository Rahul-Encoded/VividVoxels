import React, { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your query has been sent!");
  };

  return (
    <section id="contact">
      <div className="p-10 mt-12 mx-auto border border-neutral-700 rounded-xl">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Send Us Your Query
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")} {/* Converts camelCase to readable labels */}
              </label>
              {key === "message" ? (
                <textarea
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter your ${key}`}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  rows="4"
                ></textarea>
              ) : (
                <input
                  type={key === "emailAddress" ? "email" : key === "contactNumber" ? "tel" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={`Enter your ${key}`}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              )}
            </div>
          ))}
          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`inline-flex justify-center items-center w-full h-12 px-6 mt-4 text-white rounded-lg transition duration-300 ${
                isFormValid
                  ? "bg-gradient-to-r from-purple-500 to-purple-900 hover:from-purple-600 hover:to-purple-900 hover:scale-105"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
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
