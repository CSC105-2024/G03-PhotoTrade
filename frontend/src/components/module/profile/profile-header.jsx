import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPen, UserPlus, Dot, UserMinus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(false);

  const handleButtonClick = () => {
    setIsFollow(!isFollow);
  };
  return (
    <div className="mb-6 md:pt-20">
      {/* <AspectRatio ratio={3 / 1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Sun"
          className="w-full h-full object-cover"
        />
      </AspectRatio> */}

      <div className="bottom-1 left-2">
        <Avatar className="h-24 w-24 border-3 border-white">
          <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex">
          <div>
            <h1 className="text-xl font-bold text-black dark:text-white">
              Mrnatural
            </h1>
            <div className="flex h-5 items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
              <span>100 followers</span>
              <Dot />
              <span>100 following</span>
              <Separator orientation="vertical" />
              <span>100 images</span>
            </div>
          </div>

          <div className="ml-auto space-x-2 hidden md:block">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              onClick={() => navigate("/user/auth/edit")}
            >
              <UserPen />
              Edit
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              onClick={handleButtonClick}
            >
              {isFollow ? <UserMinus /> : <UserPlus />}
              {isFollow ? "UnFollow" : "Follow"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
