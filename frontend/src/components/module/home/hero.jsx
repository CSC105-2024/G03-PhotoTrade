import React from "react";
import styles from "../../../style";
import { pic } from "@/constants";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-screen px-4">
      <div className="text-center md:text-left w-full max-w-lg space-y-6">
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

        <Button
          className={`${styles.bgCustom} py-2 px-3 text-white`}
          onClick={() => navigate("/market")}
        >
          Explore
        </Button>
      </div>

      <div className="flex justify-center items-center">
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
