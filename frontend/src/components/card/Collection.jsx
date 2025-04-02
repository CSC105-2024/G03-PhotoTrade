import React from "react";
import Home_1 from "@/assets/Home_1.png";
import Home_2 from "@/assets/Home_2.png";
import Home_3 from "@/assets/Home_3.png";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "../../style";

const Collection = () => {
  return (
    <div>
      <div className="grid grid-cols-3 max-w-sm place-items-center gap-3">
        <div className="col-span-3 h-[400px]">
          <img
            src={Home_1}
            className="rounded-md h-full w-full object-cover"
            alt="1"
          />
        </div>

        <div className="col-span-1">
          <img src={Home_2} className="rounded-md" alt="2" />
        </div>

        <div className="col-span-1 ">
          <img src={Home_3} className="rounded-md" alt="3" />
        </div>

        <div
          className={`${styles.bgCustom} col-span-1 size-full rounded-md flex items-center justify-center`}
        >
          <a href="#">525+</a>
        </div>
      </div>

      <div className="mt-5 md:mt-10">
        <span className="text-xl text-bold">Sunset</span>

        <div className="flex items-center my-5">
          <Avatar>
            <AvatarImage src={Ellipse} alt="first" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-3">YummyGuy</span>
        </div>
      </div>
    </div>
  );
};
export default Collection;
