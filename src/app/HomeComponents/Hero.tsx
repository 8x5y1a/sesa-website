import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-between md:ps-32 md:pe-0 2xl:ps-96 2xl:pe-0 h-[80vh] w-full bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1b] to-[#381e4b]" />

      <div className="grid-overlay md:h-[43.93rem] md:w-[53vw]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl">
        <p className="relative text-base font-monocode text-transparent !bg-clip-text [background:linear-gradient(55.37deg,_#8824dc,_#b1219d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block">
          uOttawa Software Engineering Students Association
        </p>
        <h1 className="text-5xl leading-tight mt-4 font-heading">
          <span className="w-full relative [background:linear-gradient(55.37deg,_rgba(136,_36,_220,_0.25),_rgba(177,_33,_97,_0.25))]">
            BRIDGING THE GAP
          </span>{" "}
          <br />
          BETWEEN STUDENTS <br />
          AND INDUSTRY PROFESSIONALS
        </h1>
        <p className="relative text-xl font-sans text-thistle text-left flex items-center w-[40rem]">
          SESA connects University of Ottawa students with industry
          professionals in software engineering, providing resources,
          networking, and career development to ensure they can be successful.
        </p>
        <div className="mt-6 flex space-x-4 font-heading">
          <Button className="uppercase font-heading text-lg">Learn More</Button>
          <Button className="uppercase font-heading text-lg" variant="outline">
            Get Involved
          </Button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative z-10 hidden lg:block">
        <Image
          src="/imgs/Home/heroImage.png"
          alt="SESA Group Photo"
          className="h-[500px] w-[auto] object-cover"
          width={703}
          height={700}
        />
      </div>
    </section>
  );
}
