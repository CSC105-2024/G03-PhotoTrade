import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPen, UserPlus, UserMinus, Dot } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(false);

  const handleButtonClick = () => {
    setIsFollow(!isFollow);
  };

  return (
    <div className="mb-6 md:pt-20">
      <div className="flex items-center">
        <Avatar className="h-24 w-24 border-3 border-white">
          <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ml-4 flex-1">
          <h1 className="text-xl font-bold  dark:text-white">
            Mrnatural
          </h1>
          <div className="flex h-5 items-center space-x-2 text-sm  dark:text-gray-300">
            <span>100 followers</span>
            <Dot />
            <span>100 following</span>
            <Separator orientation="vertical" />
            <span>100 images</span>
          </div>
        </div>

        <div className="ml-auto space-y-2 hidden md:flex flex">
          <Button
            variant="outline"
            className="border-gray-600 dark:border-gray-700  dark:text-gray-100 mr-4"
            onClick={() => navigate("/user/auth/edit")}
          >
            <UserPen className="mr-1" />
            Edit
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 dark:border-gray-700  dark:text-gray-100"
            onClick={handleButtonClick}
          >
            {isFollow ? <UserMinus className="mr-1" /> : <UserPlus className="mr-1" />}
            {isFollow ? "UnFollow" : "Follow"}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 md:hidden">
        <Button
          variant="outline"
          className="border-gray-600 dark:border-gray-700 text-white dark:text-gray-100"
          onClick={() => navigate("/user/auth/edit")}
        >
          <UserPen className="mr-1" />
          Edit
        </Button>
        <Button
          variant="outline"
          className="border-gray-600 dark:border-gray-700 text-white dark:text-gray-100"
          onClick={handleButtonClick}
        >
          {isFollow ? <UserMinus className="mr-1" /> : <UserPlus className="mr-1" />}
          {isFollow ? "UnFollow" : "Follow"}
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
