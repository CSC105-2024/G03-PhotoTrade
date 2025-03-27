import React from "react";
import Backgroundpro from "@/assets/Backgroundpro.png";
import Ellipsebutbigger from "@/assets/Ellipsebutbigger.png";
import { UserPlus, Pencil, Youtube, Twitter, Instagram } from "lucide-react";
import ProfileTabs from "@/components/ui/tabsforprofile";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Mainprofile = () => {
  return (
    <div className="pb-5 min-h-auto">
      <div className="absolute top-13 left-0 w-auto mb-100 bg-black h-auto">
        <img src={Backgroundpro} className="w-full h-35"></img>
        <div className="object-cover text-center flex justify-around">
          <img src={Ellipsebutbigger} className="absolute top-15 "></img>
        </div>

        <p className="h-22"></p>
        <div className="flex-col">
          <p className="text-3xl font-bold flex justify-center items-center mb-3">
            Mrnatural
          </p>

          <div className="flex justify-between mx-13 mb-3">
            <button className="flex justify-center items-center  w-30 h-15 rounded-3xl border-2 border-purple-500 border-solid">
              <div className="flex justify-between ">
                <Pencil />
                <p className="ml-2">edit</p>
              </div>
            </button>
            <button className="flex justify-center items-center  w-30 h-15 rounded-3xl border-2 border-purple-500 border-solid">
              <div className="flex justify-between ">
                <UserPlus />
                <p className="ml-2">Follow</p>
              </div>
            </button>
          </div>

          <div className="flex justify-between mx-14 text-2xl">
            <div className="ml-7">
              <p className="flex justify-center items-center">100k</p>
              <p className="flex justify-center items-center">Sold</p>
            </div>
            <div>
              <p className="flex justify-center items-center">2.2m</p>
              <p className="flex justify-center items-center">Followers</p>
            </div>
          </div>

          <div className="px-8 py-0 mt-10 ">
            <p className="mb-2 text-2xl font-bold text-zinc-500">Bio</p>
            <p>The Internet's Friendliest Designer Kid.</p>
          </div>

          <div className="px-8 py-0 mt-10 ">
            <p className="mb-2 text-2xl font-bold text-zinc-500">Links</p>
            <div className="flex">
              <Youtube color="#787878" size={32} className="mr-3" />
              <Twitter color="#787878" size={32} className="mr-3" />
              <Instagram color="#787878" size={32} className="mr-3" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ProfileTabs />
          </div>
        </div>

        <Pagination className="my-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <p className="mb-800 "></p>
    </div>
  );
};

export default Mainprofile;
