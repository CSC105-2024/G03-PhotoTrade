import React from "react";
import detail from "@/assets/detail.png";
import Heart from "@/assets/Heart.png";
import Ellipse from "@/assets/Ellipse.png";

const Photo = () => {
  return (
    <div className="bg-black w-auto h-auto pb-10 relative">
      <img src={detail} className="w-full h-100 object-fit"></img>

      <div className="ml-[170px] mt-[77px]">
        <div className="mb-[59px] relative">
          <p className="text-5xl mb-[10px] font-bold text-white">
            Sunset in Thailand
          </p>
          <p className="text-base text-gray-400">Minted on Sep 30, 2022</p>
        
          <div className="absolute top-0 right-[170px] flex items-center">
            <img src={Heart} className="w-[24px] h-[24px]"></img>
            <p className="text-[24px] ml-[8px] text-white">258</p>
          </div>
        </div>

        <div className="mb-[38px]">
          <p className="font-bold text-[24px] text-white">Created By</p>
          <div className="flex">
            <img src={Ellipse} className="mt-[7px] w-[40px] h-[40px]"></img>
            <p className="ml-[8px] mt-[14px] text-white">Mrnatural</p>
          </div>
        </div>

        <div className="mb-[13px]">
          <p className="font-bold text-[24px] text-white">Description</p>
          <p className="text-[16px] text-gray-400 container h-auto w-[590px]">
            This stunning sunset was captured in Thailand, showcasing vibrant
            orange and pink hues blending seamlessly across the sky. The calm
            water reflects the beauty of the evening, creating a serene and
            peaceful atmosphere. Perfect for nature enthusiasts and landscape
            lovers.
          </p>
        </div>

        <div className="mb-[37px]">
          <p className="font-bold text-[24px] mb-[17px] text-white">Category</p>
          <div className="flex">
            <p className="flex h-[46px] w-auto px-[30px] rounded-[20px] justify-center items-center bg-[#3B3B3B] mr-[20px] text-white">
              Nature & Landscapes
            </p>
            <p className="flex h-[46px] w-auto px-[30px] rounded-[20px] justify-center items-center bg-[#3B3B3B] mr-[20px] text-white">
              Lifestyle
            </p>
            <p className="flex h-[46px] w-auto px-[30px] rounded-[20px] justify-center items-center bg-[#3B3B3B] mr-[20px] text-white">
              Animals & Pets
            </p>
          </div>
        </div>

        <div className="flex flex-col h-[85px] w-[200px] px-[15px] rounded-[15px] justify-around items-center bg-[#A0DE35] font-bold text-white text-[24px]">
          <p>Buy now</p>
          <p>Price: 100 THB</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
