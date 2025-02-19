"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactUs: React.FC = () => {
  const router = useRouter();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.topic ||
      !formData.message
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate form submission (replace with API call)
    console.log("Form data submitted:", formData);
    router.push("/thank-you"); // Redirect after submission
  };

  // Copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("uottawa.sesa@gmail.com").then(() => {
      alert("Email copied to clipboard!");
    });
  };

  return (
    <div
      className="min-h-screen text-white font-vcr-osd-mono p-8"
      style={{
        background: "linear-gradient(#1B1B1B, #701BB7, #8824DC, #B1219D)",
      }}
    >
      {/* Header and Form Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column (Header Content) */}
        <div className="flex-1">
          {/* Contact Us Text */}
          <div className="text-base font-monocode text-transparent !bg-clip-text [background:linear-gradient(55.37deg,_#6E1CB0,_#8E1A7D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Contact us
          </div>

          {/* Get in Touch Title */}
          <h1 className="text-[48px] uppercase mt-4">Get in touch</h1>

          {/* Questions About Our Organization */}
          <p className="text-[20px] font-raleway text-thistle mt-4 max-w-[558px]">
            Questions about our organization? Interest in collaborating with us? Send a message to our email, or complete the inquiry form, and we’ll respond as soon as possible.
          </p>

          {/* Copy Email Button */}
          <button
            onClick={copyEmailToClipboard}
            className="mt-4 px-4 py-2 bg-blueviolet-100 hover:bg-blueviolet-200 text-white rounded font-space-grotesk uppercase"
          >
            Copy Email: uottawa.sesa@gmail.com
          </button>

          {/* Address */}
          <div className="mt-8 text-base font-monocode text-thistle">
            <p>800 King Edward Ave,</p>
            <p>Ottawa, ON, K1N 1A2,</p>
            <p>STE 0109</p>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tell us about yourself */}
            <div>
              <h2 className="text-[20px] font-raleway text-thistle mb-4">Tell us about yourself</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-thistle font-raleway mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-thistle font-raleway mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100"
                    required
                  />
                </div>
              </div>
            </div>

            {/* How can we reach you? */}
            <div>
              <h2 className="text-[20px] font-raleway text-thistle mb-4">How can we reach you? (So we can reply to you)</h2>
              <div>
                <label className="block text-thistle font-raleway mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100"
                  required
                />
              </div>
            </div>

            {/* What’s your message about? */}
            <div>
              <h2 className="text-[20px] font-raleway text-thistle mb-4">What’s your message about?</h2>
              <div>
                <label className="block text-thistle font-raleway mb-2">Select a topic</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            {/* How can we help? */}
            <div>
              <h2 className="text-[20px] font-raleway text-thistle mb-4">How can we help?</h2>
              <div>
                <label className="block text-thistle font-raleway mb-2">Include as much detail as you can</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100"
                  required
                />
              </div>
            </div>

            {/* Privacy & Terms */}
            <div className="text-base font-monocode text-thistle">
              <p>
                By submitting this form, I confirm that I have read and accept the{" "}
                <a href="#" className="underline">
                  Privacy & Terms
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blueviolet-100 hover:bg-blueviolet-200 text-white px-4 py-2 rounded font-space-grotesk uppercase"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 bg-gray-300 p-6 text-center">
        <p className="text-thistle font-raleway">
          © 2014-2025 uOttawa Software Engineering Student Association (SESA)
        </p>
      </div>
    </div>
  );
};

export default ContactUs;