"use client";

import { useCallback } from "react";
import Image from "next/image";

const Home = () => {
  const onScrollToSection = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    anchor?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  return (
    <div className="h-full bg-gray-300 text-white font-mono">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-10 lg:px-20 h-screen w-full bg-black text-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1b] via-[#221133] to-[#160c2c]" />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl">
          <p className="w-[471px] relative text-base font-monocode text-transparent !bg-clip-text [background:linear-gradient(55.37deg,_#8824dc,_#b1219d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
            uOttawa Software Engineering Students Association
          </p>
          <h1 className="text-5xl leading-tight mt-4">
            <span className="w-full relative [background:linear-gradient(55.37deg,_rgba(136,_36,_220,_0.25),_rgba(177,_33,_97,_0.25))]">
              BRIDGING THE GAP
            </span>{" "}
            <br />
            BETWEEN STUDENTS <br />
            AND INDUSTRY PROFESSIONALS
          </h1>
          <p className="w-[552.3px] relative text-xl font-raleway text-thistle text-left flex items-center">
            SESA connects University of Ottawa students with industry
            professionals in software engineering, providing resources,
            networking, and career development to ensure they can be successful.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 text-base uppercase bg-gradient-to-r from-purple-600 to-pink-500 transition-all ease-in-out hover:rounded-[1.5rem]">
              Learn More
            </button>
            <button
              type="button"
              className="transtion uppercase text-base group flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-500 p-[1.5px] text-white transition-all ease-in-out hover:rounded-[1.5rem]"
            >
              <div className="flex h-full w-full px-6 py-3 items-center justify-center bg-[#1C0E2F] transition-all ease-in-out hover:rounded-[1.5rem]">
                Get Involved
              </div>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative z-10 hidden lg:block">
          <Image
            src="/Home/heroImage.png"
            alt="SESA Group Photo"
            className="w-full relative max-w-full overflow-hidden h-[558px] object-cover"
            width={703}
            height={558}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
