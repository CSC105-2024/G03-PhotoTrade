import React from "react";
import Collection from "@/components/card/Collection";
import Paginationprofile from "@/components/ui/paginationprofile";

const PCollection = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 w-fit mx-11 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
          <p className="mb-5">
            <Collection />
          </p>
          <p className="mb-5">
            <Collection />
          </p>
          <p className="mb-5">
            <Collection />
          </p>
          <p className="mb-5">
            <Collection />
          </p>
        </div>
      </div>
      <Paginationprofile />
    </div>
  );
};

export default PCollection;
