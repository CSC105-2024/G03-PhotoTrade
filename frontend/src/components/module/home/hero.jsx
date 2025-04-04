import React from "react";
import styles from "../../../style";
import { pic } from "@/constants";

const Hero = () => {
  return (
    <section
      className={`grid md:grid-cols-2 gap-10 items-center ${styles.paddingY} min-h-screen`}
    >
      <div className="text-center md:text-left w-full max-w-lg space-y-6 order-2 mt-5 md:order-1">
        <h1 className="text-5xl font-bold tracking-wide leading-tight">
          Unlock Your
          <span className={`text-transparent bg-clip-text ${styles.bgCustom}`}>
            {" "}
            Creative Potential with
          </span>{" "}
          PhotoTrade
        </h1>

        <p className="text-neutral-500">
          PhotoTrade is the premier marketplace for photographers and digital
          artists to showcase and sell their work. Join us to secure your images
          and connect with buyers who appreciate your creativity.
        </p>

        <button
          className={`${styles.bgCustom} text-sm py-2 px-3 rounded-md cursor-pointer hover:opacity-90`}
        >
          Explore
        </button>
      </div>

      <div className="flex justify-center items-center order-1 md:order-2 z-1">
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-10 shadow-[0_20px_50px_rgba(162,_89,_255,_0.7)]">
          {pic.map((src, index) => (
            <div className="carousel-item max-h-150" key={index}>
              <img
                src={src}
                className="rounded-box h-full w-full object-cover"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
