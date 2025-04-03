import React from "react";
import Picture from "@/components/card/picture";
import Paginationprofile from "@/components/ui/paginationprofile";

const Purchases = () => {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          <p className="">
            <Picture />
          </p>
          <p className="">
            <Picture />
          </p>
          <p className="">
            <Picture />
          </p>
          <p className="">
            <Picture />
          </p>
          <p className="">
            <Picture />
          </p>
          <p className="">
            <Picture />
          </p>
        </div>
      </div>
      <Paginationprofile />
    </div>
  );
};

export default Purchases;
