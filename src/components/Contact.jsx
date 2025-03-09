import React, { useState } from "react";
import { Mail } from "lucide-react";
const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;


const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    purpose: "",
    message: "",
  });

  // Handles changes to input fields and updates state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validates email address format
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

  // Checks if all fields are filled and email is valid
  const isFormValid =
    Object.values(formData).every((field) => field.trim() !== "") &&
    isEmailValid(formData.emailAddress);

  // Handles form submission and sends an email with form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.emailservice.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: contactEmail,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.emailAddress}\nPurpose: ${formData.purpose}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        alert("Your query has been sent!");
        setFormData({ firstName: "", lastName: "", emailAddress: "", purpose: "", message: "" });
      } else {
        alert("Failed to send your query. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  rows="4"
                ></textarea>
              ) : (
                <input
                  type={key === "emailAddress" ? "email" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
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
