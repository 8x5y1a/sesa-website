// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactForm: React.FC = () => {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <h2 className="text-[20px] font-heading text-thistle mb-4">TELL US ABOUT YOURSELF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100 font-[Monocode] placeholder:text-thistle"
              placeholder="First name"
              required
            />
          </div>


          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100 text-thistle font-[Monocode] placeholder:text-thistle"
              placeholder="Last name"
              required
            />
          </div>
        </div>
      </div>


      <div>
        <h2 className="text-[20px] font-heading text-thistle mb-4">HOW CAN WE REACH YOU? (SO WE CAN REPLY TO YOU) </h2>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100 text-thistle font-[Monocode] placeholder:text-thistle"
            placeholder="Email address"
            required
          />
        </div>
      </div>


      <div>
        <h2 className="text-[20px] font-heading text-thistle mb-4">WHAT’S YOUR MESSAGE ABOUT?</h2>
        <div>

          <select
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100 text-thistle font-[Monocode] placeholder:text-thistle"
            required
            >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>


      <div>
        <h2 className="text-[20px] font-heading text-thistle mb-4">HOW CAN WE HELP?</h2>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-blueviolet-100 focus:border-blueviolet-100 text-thistle font-raleway placeholder:text-thistle"
            placeholder="Include as much detail as you can"
            required
          />
        </div>
      </div>

      <div className="text-base font-heading text-thistle">

        <p>
          By submitting this form, I confirm that I have read and accept the{" "}
          <a href="#" className="underline">
            Privacy & Terms
          </a>
          .
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-blueviolet-700 text-white px-4 py-2 rounded font-heading uppercase"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;