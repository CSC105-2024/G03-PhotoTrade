import React from "react";
import Backgroundpro from "@/assets/Backgroundpro.png";
import Ellipsebutbigger from "@/assets/Ellipsebutbigger.png";

import {
  UserPlus,
  Pencil,
  Youtube,
  Twitter,
  Instagram,
  LogOut,
} from "lucide-react";
import ProfileTabs from "@/components/ui/tabsforprofile";

const Mainprofile = () => {
  return (
    <div className="pb-5 min-h-auto">
      <div className="absolute top-13 left-0 w-auto mb-100 bg-black h-auto lg:top-15">
        <img
          src={Backgroundpro}
          className="w-full h-35 lg:w-screen lg:h-50"
        ></img>
        <div className="object-cover text-center flex justify-around lg:justify-normal ">
          <img
            src={Ellipsebutbigger}
            className="absolute top-15 lg:top-30 lg:pl-20"
          ></img>
        </div>

        <p className="h-22 lg:h-20"></p>
        <div className="lg:flex lg:justify-between">
          <div className="">
            <p className="text-3xl font-bold flex justify-center lg:justify-normal lg:pl-21 mb-3 ">
              Mrnatural
            </p>
          </div>
          <div className="lg:flex-row lg:justify-end">
            <div className="flex justify-between mx-13 mb-3 lg:justify-end ">
              <button className="flex justify-center items-center  w-30 h-15 rounded-3xl border-2 border-purple-500 border-solid lg:mr-5">
                <div className="flex  ">
                  <Pencil />
                  <p className="ml-2">edit</p>
                </div>
              </button>
              <button className="flex justify-center items-center  w-30 h-15 rounded-3xl border-2 border-purple-500 border-solid lg:mr-5">
                <div className="flex  ">
                  <UserPlus />
                  <p className="ml-2">Follow</p>
                </div>
              </button>
              
            </div>
          </div>
        </div>

        <div className="flex justify-between mx-14 text-2xl lg:justify-normal">
          <div className="ml-7 lg:mr-20">
            <p className="flex justify-center items-center">100k</p>
            <p className="flex justify-center items-center">Sold</p>
          </div>
          <div>
            <p className="flex justify-center items-center">2.2m</p>
            <p className="flex justify-center items-center">Followers</p>
          </div>
        </div>

        <div className="px-8 mt-5 lg:px-20">
          <p className="mb-2 text-2xl font-bold text-zinc-500">Bio</p>
          <p>The Internet's Friendliest Designer Kid.</p>
        </div>

        <div className="px-8 mt-5 lg:px-20 ">
          <p className="mb-2 text-2xl font-bold text-zinc-500">Links</p>
          <div className="flex">
            <Youtube color="#787878" size={32} className="mr-3" />
            <Twitter color="#787878" size={32} className="mr-3" />
            <Instagram color="#787878" size={32} className="mr-3" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <ProfileTabs />
        </div>
      </div>
    <p className="mb-1150 lg:mb-600"></p>
    </div>
  );
};

export default Mainprofile;
