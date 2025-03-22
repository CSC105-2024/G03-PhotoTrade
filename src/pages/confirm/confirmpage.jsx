import React from "react";
import detail from "@/assets/detail.png";
const Confirmpage = () => {
  return (
    <div className="bg-black w-screen h-screen lg:h-auto">
      <div className="p-7 lg:p-20">
        <p className="text-3xl font-bold mb-10 ">Order Confirm</p>
        <div className="flex justify-center text-center">
          <div className="bg-neutral-900  rounded-xl p-4 lg:p-10 ">
            <img src={detail} className="rounded-2xl mb-6"></img>
            <p className="text-3xl font-bold justify-center flex mb-8">
              Sunset in Thailand
            </p>
            <div className="font-bold lg:px-40">
              <div className="flex justify-between items-center mt-6">
                <p className=" text-white text-2xl">Price:</p>
                <p className=" text-white text-2xl">100 THB</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <p className=" text-white text-2xl">Sale Discount:</p>
                <p className=" text-white text-2xl">0 THB</p>
              </div>

              <div className="my-6 h-0.5 rounded-2xl bg-zinc-800"></div>

              <div className="flex justify-between items-center ">
                <p className=" font-bold text-white text-2xl">Total:</p>
                <p className=" font-bold text-white text-2xl">100 THB</p>
              </div>
              <button className="bg-lime-400 rounded-2xl flex justify-around h-10 items-center text-2xl mt-6 w-full">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmpage;
