"use client";

import ContactForm from "./components/ContactForm";
import "../globals.css";
import Image from "next/image";
import Button from "@/components/Button";

const ContactUsPage: React.FC = () => {
    return (
        <div
            className="font-heading min-h-screen p-8 text-white"
            style={{
                background: "linear-gradient(#1B1B1B, #701BB7, #8824DC, #B1219D)",
            }}
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
                <div className="flex-1">
                    <div className="font-sans !bg-clip-text text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(55.37deg,_#6E1CB0,_#8E1A7D)]">
                        Contact us
                    </div>

                    <h1 className="mt-4 text-[48px] uppercase">
                        Get in <span className="relative [background:linear-gradient(55.37deg,_rgba(136,_36,_220,_0.25),_rgba(177,_33,_97,_0.25))]">Touch</span>
                    </h1>

                    <p className="font-sans mt-4 max-w-[558px] text-[20px] text-thistle">
                        Questions about our organization? Interest in collaborating with us? Send a
                        message to our email, or complete the inquiry form, and we’ll respond as
                        soon as possible.
                    </p>

                    <Button className="font-heading text-xl uppercase mt-4 flex items-center gap-3"  
                            style={{ width: "fit-content" }}                 
                        onClick={() => navigator.clipboard.writeText("uottawa.sesa@gmail.com")}
                    >
                        uottawa.sesa@gmail.com
                        <Image
                            src="/contact-page/vector.svg"
                            alt="Vector Icon"
                            width={17}
                            height={20}
                        />
                    </Button>

                    <div className="mt-4 font-mono text-base text-thistle">
                        <p>800 King Edward Ave,</p>
                        <p>Ottawa, ON, K1N 1A2,</p>
                        <p>STE 0109</p>
                    </div>
                </div>

                <div className="flex-1">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
