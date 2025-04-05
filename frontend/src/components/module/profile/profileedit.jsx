import React from "react";
import Backgroundpro from "@/assets/Backgroundpro.png";
import Ellipsebutbigger from "@/assets/Ellipsebutbigger.png";
import { ImageUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const profiledit = () => {
  return (
    <div className="pb-5 min-h-auto">
      <div className="absolute top-13 left-0 w-auto mb-100 bg-black h-auto lg:top-15">
        <div>
          <div className="flex justify-around ">
            <ImageUp
              size={100}
              strokeWidth={1.75}
              className="absolute top-5 object-cover lg:top-10"
            />
          </div>
          <img
            src={Backgroundpro}
            className="w-full h-35 lg:w-screen lg:h-50"
          ></img>
        </div>
        <div>
          <div className="flex ml-10 lg:ml-40">
            <img
              src={Ellipsebutbigger}
              className="absolute top-15 lg:top-30 "
            ></img>
            <div className="justify-center flex ml-10 ">
              <ImageUp
                size={70}
                strokeWidth={1.75}
                className="absolute top-25 ml-17 lg:top-40 "
              />
            </div>
          </div>
        </div>
        <p className="mt-24"></p>
        <div className="lg:flex-col lg:justify-center">
          <p className="ml-10 text-2xl mb-3 lg:ml-40">Username</p>
          <Input
            type="text"
            placeholder="Username"
            className="mx-10 w-70 mb-3 lg:w-100 lg:ml-40"
          />
          <p className="ml-10 text-2xl mb-3 lg:ml-40">Email</p>
          <Input
            type="email"
            placeholder="Email"
            className="mx-10 w-70 mb-3 lg:w-100 lg:ml-40"
          />
          <p className="ml-10 text-2xl mb-3 lg:ml-40">Bio</p>
          <Input
            type="text"
            placeholder="Bio"
            className="mx-10 w-70 mb-10 lg:w-100 lg:ml-40"
          />
        </div>

        <button className="border-white bg-purple-500 border-solid w-70 ml-10 rounded-xl h-10 lg:w-100 lg:ml-40">
          Update
        </button>
      </div>
      <p className="mb-150 lg:mb-180"></p>
    </div>
  );
};

export default profiledit;
