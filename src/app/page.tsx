"use client";

import { useCallback } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Hero from "./HomeComponents/Hero";

const Home = () => {
  const onScrollToSection = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    anchor?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  return (
    <div className="h-full bg-gray-300 text-white font-mono">
      <Hero />
    </div>
  );
};

export default Home;
