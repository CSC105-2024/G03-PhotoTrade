import React from "react";
import Home_1 from "@/assets/Home_1.png";
import Home_2 from "@/assets/Home_2.png";
import Home_3 from "@/assets/Home_3.png";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "../../style";
import { Card, CardContent, CardFooter } from "../ui/card";

const Collection = () => {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3  md:max-h-md  gap-3">
          <div className="col-span-3 max-h-96 overflow-hidden rounded-md">
            <img src={Home_1} className="w-full h-full object-cover" alt="1" />
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

        <CardFooter>
          <div className="mt-5 md:mt-6">
            <h1 className="text-xl text-bold">Sunset</h1>
            <div className="flex items-center mt-2">
              <Avatar>
                <AvatarImage src={Ellipse} alt="first" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="ml-3">YummyGuy</span>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default Collection;
