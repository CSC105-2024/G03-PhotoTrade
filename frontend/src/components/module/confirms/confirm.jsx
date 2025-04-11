import React from "react";
import detail from "@/assets/detail.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import BreadcrumbTop from "@/components/breadcrumb/breadcrumb-top";
import { CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirms = () => {
  const navigate = useNavigate();
  return (
    <div className="md:pt-16">
      <BreadcrumbTop />
      <AspectRatio ratio={3 / 2} className="border border-gray-500 rounded-md">
        <img
          src={detail}
          alt="Image"
          className="w-full h-full rounded-md object-contain"
        />
      </AspectRatio>

      <div className="mt-5">
        <p className="text-3xl font-bold text-white justify-center flex">
          Sunset in Thailand
        </p>
      </div>

      <div>
        <div className="flex justify-between lg:px-20 px-10 mt-4 ">
          <p>Price :</p>
          <p>100 THB</p>
        </div>
        <div className="flex justify-between lg:px-20 px-10 mt-4 ">
          <p>Sale Discount:</p>
          <p>0 THB</p>
        </div>
        <div className="flex justify-between lg:px-20 px-10 mt-4 mb-5 ">
          <p>Total :</p>
          <p>100 THB</p>
        </div>
      </div>

      <Button
        variant="primary"
        className="w-full bg-green-500"
        onClick={() => {
          navigate("/market");
        }}
      >
        <CircleCheckBig />
        confirm
      </Button>
      
    </div>
  );
};

export default Confirms;
