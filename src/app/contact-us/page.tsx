"use client";

import ContactForm from "../../components/ContactForm"; // Ensure the import path is correct
import "../globals.css"; // Global styles if needed
import Image from "next/image";

const ContactUsPage: React.FC = () => {
    return (
        <div
            className="font-vcr-osd-mono min-h-screen p-8 text-white"
            style={{
                background: "linear-gradient(#1B1B1B, #701BB7, #8824DC, #B1219D)",
            }}
        >
            {/* Header and Form Section */}
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
                {/* Left Column (Header Content) */}
                <div className="flex-1">
                    {/* Contact Us Text */}
                    <div className="font-monocode !bg-clip-text text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(55.37deg,_#6E1CB0,_#8E1A7D)]">
                        Contact us
                    </div>

                    {/* Get in Touch Title */}
                    <h1 className="mt-4 text-[48px] uppercase">Get in touch</h1>

                    {/* Questions About Our Organization */}
                    <p className="font-raleway mt-4 max-w-[558px] text-[20px] text-thistle">
                        Questions about our organization? Interest in collaborating with us? Send a
                        message to our email, or complete the inquiry form, and we’ll respond as
                        soon as possible.
                    </p>

                    {/* Copy Email Button */}
                    <button
                        onClick={() => navigator.clipboard.writeText("uottawa.sesa@gmail.com")}
                        className="mt-4 flex items-center gap-x-2 rounded bg-blueviolet-100 px-4 py-2 uppercase text-white hover:bg-blueviolet-200"
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
                    <div className="mt-4 font-mono text-base text-thistle">
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
