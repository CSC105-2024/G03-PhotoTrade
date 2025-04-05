import React from "react";
import Pictureatprofile from "@/components/card/Pictureatprofile";
import Paginationprofile from "@/components/pagination/paginationprofile";

const Favorites = () => {
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

export default Favorites;
