import React from "react";
import detail from "@/assets/detail.png";
import Ellipse from "@/assets/Ellipse.png";
import Imageja from "./changeimage";

const Photo = () => {
  return (
    <div className="bg-black w-screen h-auto xl:h-screen pb-10 relative">
      <img src={detail} className="w-full object-fit lg:h-100"></img>

      <div className="lg:ml-[170px] lg:mr-[170px] mt-[77px] ml-[20px] mr-[40px]">
        <div className="mb-[20px] flex justify-between">
          <div>
            <p className="text-3xl  font-bold text-white">Sunset in Thailand</p>
            <p className="text-gray-400">Minted on Sep 30, 2022</p>
          </div>
          <div className="hidden sm:block">
            <Imageja />
          </div>
        </div>

        <div className="mb-[38px] flex justify-between">
          <div className="">
            <p className="font-bold text-2xl text-white">Created By</p>
            <div className="flex">
              <img src={Ellipse} className="mt-[7px] w-[40px] h-[40px]"></img>
              <p className="ml-[8px] mt-[14px] text-white">Mrnatural</p>
            </div>
          </div>
          <div className="lg:hidden block">
            <Imageja />
          </div>
        </div>

        <div className="mb-[13px]">
          <h2 className="font-bold text-2xl text-white">Description</h2>
          <p className="text-gray-400">
            This stunning sunset was captured in Thailand, showcasing vibrant
            orange and pink hues blending seamlessly across the sky. The calm
            water reflects the beauty of the evening, creating a serene and
            peaceful atmosphere. Perfect for nature enthusiasts and landscape
            lovers.
          </p>
        </div>

        <div className="mb-[37px]">
          <p className="font-bold text-[24px] mb-[17px] text-white">Category</p>
          <div className="flex flex-wrap gap-[8px]">
            <span className="px-[24px] py-[11px] bg-[#3B3B3B] rounded-[17px] text-[16px] font-[600] text-white">
              Nature & Wildlife
            </span>
            <span className="px-[24px] py-[11px] bg-[#3B3B3B] rounded-[17px] text-[16px] font-[600] text-white">
              People & Lifestyle
            </span>
            <span className="px-[24px] py-[11px] bg-[#3B3B3B] rounded-[17px] text-[16px] font-[600] text-white">
              Business & Technology
            </span>
          </div>
        </div>

        <div className="flex flex-col w-[230px] px-[15px] rounded-[15px] justify-around items-center bg-[#1cd31c] font-bold text-white text-[24px] p-2 ">
          <p>Buy now 100 THB</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
