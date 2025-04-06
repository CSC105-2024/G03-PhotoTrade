import React from "react";
import detail from "@/assets/detail.png";
import Ellipse from "@/assets/Ellipse.png";
import Imageja from "./changeimage";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BreadcrumbTop from "@/components/breadcrumb/breadcrumb-top";

const Detail = () => {
  return (
    <div className="pt-6 md:pt-26">
      <BreadcrumbTop />
      <AspectRatio ratio={3 / 2} className="border border-gray-500 rounded-md">
        <img
          src={detail}
          alt="Image"
          className="w-full h-full rounded-md object-contain"
        />
      </AspectRatio>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-white">Sunset in Thailand</h1>
          <p className="text-gray-400">Sep 30, 2022</p>
        </div>
        {/* <div className="hidden sm:block">
          <Imageja />
        </div> */}
      </div>

      <div className="mb-26">
        <p className="text-gray-400">
          This stunning sunset was captured in Thailand, showcasing vibrant
          orange and pink hues blending seamlessly across the sky. The calm
          water reflects the beauty of the evening, creating a serene and
          peaceful atmosphere. Perfect for nature enthusiasts and landscape
          lovers.
        </p>
      </div>

      <div className="flex items-center my-5">
        <Avatar>
          <AvatarImage src={Ellipse} alt="first" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-3">YummyGuy</span>
      </div>

      <div className="space-x-2 mb-10">
        <Button variant="outline">Nature & Wildlife</Button>
        <Button variant="outline">Travel & Destinations</Button>
        <Button variant="outline">People & Lifestyle</Button>
      </div>

      <Button variant="primary" className="w-full bg-green-500 md:hidden">
        Buy now 100 THB
      </Button>
    </div>
  );
};

export default Detail;
