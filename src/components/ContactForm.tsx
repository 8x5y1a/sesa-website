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
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
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
            {/* Tell us about yourself */}
            <div>
                <h2 className="font-vcr-osd-mono mb-4 text-[20px] text-thistle">
                    TELL US ABOUT YOURSELF
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* First Name */}
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="font-raleway w-full rounded border border-gray-300 px-3 py-2 text-thistle placeholder:text-thistle focus:border-blueviolet-100 focus:ring-2 focus:ring-blueviolet-100"
                            placeholder="First name"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="font-raleway w-full rounded border border-gray-300 px-3 py-2 text-thistle placeholder:text-thistle focus:border-blueviolet-100 focus:ring-2 focus:ring-blueviolet-100"
                            placeholder="Last name"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* How can we reach you? */}
            <div>
                <h2 className="font-vcr-osd-mono mb-4 text-[20px] text-thistle">
                    HOW CAN WE REACH YOU? (SO WE CAN REPLY TO YOU)
                </h2>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="font-raleway w-full rounded border border-gray-300 px-3 py-2 text-thistle placeholder:text-thistle focus:border-blueviolet-100 focus:ring-2 focus:ring-blueviolet-100"
                        placeholder="Email address"
                        required
                    />
                </div>
            </div>

            {/* What’s your message about? */}
            <div>
                <h2 className="font-vcr-osd-mono mb-4 text-[20px] text-thistle">
                    WHAT’S YOUR MESSAGE ABOUT?
                </h2>
                <div>
                    <label className="font-raleway mb-2 block text-thistle"></label>
                    <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="font-raleway w-full rounded border border-gray-300 px-3 py-2 text-thistle placeholder:text-thistle focus:border-blueviolet-100 focus:ring-2 focus:ring-blueviolet-100"
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
                <h2 className="font-vcr-osd-mono mb-4 text-[20px] text-thistle">HOW CAN WE?</h2>
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="font-raleway h-32 w-full rounded border border-gray-300 px-3 py-2 text-thistle placeholder:text-thistle focus:border-blueviolet-100 focus:ring-2 focus:ring-blueviolet-100"
                        placeholder="Include as much detail as you can"
                        required
                    />
                </div>
            </div>

            {/* Privacy & Terms */}
            <div className="font-vcr-osd-mono text-base text-thistle">
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
                    className="font-vcr-osd-mono rounded bg-blueviolet-700 px-4 py-2 uppercase text-white"
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
