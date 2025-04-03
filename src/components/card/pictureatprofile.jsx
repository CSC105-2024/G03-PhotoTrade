import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MoreHorizontal } from "lucide-react";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Pictureatprofile = () => {
  const [like, setLike] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Card className="w-[230px] md:w-[250px] rounded-xl pt-0 bg-[#2B2B2B] border-none text-white mb-5 cursor-pointer relative">
      <Link to="/market/detail">
        <CardHeader className="px-0">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Sun"
            className="w-full h-[200px] rounded-t-xl aspect-square object-cover"
          />
        </CardHeader>
      </Link>

      <CardContent>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Sun</CardTitle>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MoreHorizontal className="text-white" />
          </button>

          {menuOpen && (
            <div className="absolute lg:left-50 lg:top-35 top-65 right-7 bg-[#3B3B3B] text-white rounded-lg py-2 w-[150px] z-20">
              <button className="px-3 py-2">Delete</button>
              <button className="px-3 py-2">Add to Collection</button>
            </div>
          )}
        </div>

        <div className="mt-2">
          <h2 className="text-sm font-semibold">Price</h2>
          <p className="text-sm">500 Baht</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center mt-2">
          <Avatar>
            <AvatarImage src={Ellipse} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-3 text-sm">YummyGuy</p>
        </div>

        <Heart
          onClick={() => setLike(!like)}
          className={`cursor-pointer transition-all z-10 ${
            like ? "text-red-500 fill-red-500" : "text-white"
          }`}
        />
      </CardFooter>
    </Card>
  );
};

export default Pictureatprofile;
