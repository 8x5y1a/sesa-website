"use client";

import ContactForm from "../../components/ContactForm"; // Ensure the import path is correct
import "../globals.css"; // Global styles if needed
import Image from "next/image";

const ContactUsPage: React.FC = () => {
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
            onClick={() => navigator.clipboard.writeText("uottawa.sesa@gmail.com")}
            className="mt-4 px-4 py-2 bg-blueviolet-100 hover:bg-blueviolet-200 text-white rounded uppercase flex items-center gap-x-2"
          >
            uottawa.sesa@gmail.com
            <Image
              src="/contact-page/vector.svg"
              alt="Vector Icon"
              width={15}
              height={20}
            />
          </button>

          {/* Address */}
          <div className="mt-4 text-base font-mono text-thistle">
            <p>800 King Edward Ave,</p>
            <p>Ottawa, ON, K1N 1A2,</p>
            <p>STE 0109</p>
          </div>
        </div>

        {/* Right Column (ContactForm) */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
