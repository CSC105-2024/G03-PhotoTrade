import React from "react";
import Collection from "@/components/card/Collection";
import Paginationprofile from "@/components/pagination/paginationprofile";

const PCollection = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
          <p className="mb-5 max-w-70 lg:max-w-100 ">
            <Collection />
          </p>
          <p className="mb-5 max-w-70 lg:max-w-100">
            <Collection />
          </p>
          <p className="mb-5 max-w-70 lg:max-w-100">
            <Collection />
          </p>
          <p className="mb-5 max-w-70 lg:max-w-100">
            <Collection />
          </p>
          <p className="mb-5 max-w-70 lg:max-w-100 lg:hidden">
            <Collection />
          </p>
        </div>
      </div>
      <Paginationprofile />
    </div>
  );
};

export default PCollection;
