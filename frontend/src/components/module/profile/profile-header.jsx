import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPen, UserPlus, Dot } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProfileHeader = () => {
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
            <h1 className="text-xl font-bold">Mrnatural</h1>

            <div className="flex h-5 items-center space-x-2 text-sm">
              <span>100 followers</span>
              <Dot />
              <span>100 following</span>
              <Separator orientation="vertical" />
              <span>100 images</span>
            </div>
          </div>

          <div className="ml-auto space-x-2 hidden md:block">
            <Button variant="outline">
              <UserPen />
              Edit
            </Button>
            <Button variant="outline">
              <UserPlus />
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
