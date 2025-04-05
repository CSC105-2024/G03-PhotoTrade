import React from "react";
import Paginationprofile from "@/components/ui/paginationprofile";
import Pictureatprofile from "@/components/card/Pictureatprofile";

const Purchases = () => {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
          <p className="">
            <Pictureatprofile />
          </p>
        </div>
      </div>
      <Paginationprofile />
      
    </div>
  );
};

export default Purchases;
