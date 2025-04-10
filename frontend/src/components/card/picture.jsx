import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Heart, Ellipsis } from "lucide-react";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Picture = () => {
  const [like, setLike] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Card className="w-[250px] h-[400px] rounded-xl pt-0 mb-5">
      <Link to="/market/1">
        <CardHeader className="px-0 hover:opacity-90 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Sun"
            className="w-full h-[200px] rounded-t-xl aspect-square object-cover"
          />
        </CardHeader>
      </Link>

      <CardContent>
        <CardTitle className="text-xl flex">
          Sun
          {isAuthenticated && (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="none"
                size="icon"
                className="ml-auto"
              >
                <Ellipsis size={10}/>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <Link to={"user/auth/dashboard"}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>

              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          )}
        </CardTitle>
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
          className={`cursor-pointer transition-all ${like ? "text-red-500 fill-red-500" : " text-red-500"}`}
        />
      </CardFooter>
    </Card>
  );
};

export default Picture;
