import React from "react";
import Sell from "@/assets/Sell.png";

const Feature1 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-40">
      <div className="order-2 md:order-1 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-wide">
          Boost Your Sales with Our Seller Incentive Program
        </h1>

        <p className="text-neutral-500 mt-7">
          Our Seller Incentive Program rewards creators for their popularity.
          When your image receives over 100 likes, its price automatically
          increases by 20 baht. This feature helps you maximize your earnings
          while showcasing your most-loved work.
        </p>
      </div>

      <div className="mb-10 md:pl-20 order-1 md:order-2">
        <img
          src={Sell}
          alt="Illustration of a sales incentive program"
          className="rounded-md w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default Feature1;
