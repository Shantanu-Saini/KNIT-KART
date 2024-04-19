import React from "react";
import heroImage from "../../assets/images/hero.jpeg";
import { TypewriterEffectDemo } from "../TypeWriterDemo/TypeWriterDemo";

function Hero() {
  return (
    <section className="w-full bg-background text-text h-screen">
      <div className="flex md:flex-row flex-col justify-between items-stretch max-w-7xl mx-auto py-8">
        <div className="flex-1 flex flex-col justify-center md:items-start items-center px-5">
          <TypewriterEffectDemo />
          <p className="mt-5 mb-3 md:text-2xl text-xl md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente sequi quibusdam. Amet itaque, fugiat, quidem, non
            architecto consequuntur recusandae ipsam laborum porro doloremque
            tempore earum ducimus quas nemo.
          </p>
          <button className="py-3 px-2 bg-accent dark:bg-accent border-2 border-transparent rounded w-[30%] dark:text-[#f4f4f4] hover:border-black hover:dark:border-white">
            Get Started
          </button>
        </div>
        <div className="flex-1 justify-center px-3">
          <img src={heroImage} alt="Hero" className="h-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
