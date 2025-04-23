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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Picture = ({ alwaysLike = false }) => {
  const [like, setLike] = useState(alwaysLike);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const showMenu = location.pathname === "/user/auth/dashboard/1";

  return (
    <Card className="w-[250px] h-[400px] rounded-xl pt-0 mb-5 
      bg-white dark:bg-[#18181b] shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
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
        <CardTitle className="text-xl flex text-black dark:text-white">
          Sun
          {isAuthenticated && showMenu && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="none"
                  size="icon"
                  className="ml-auto"
                >
                  <Ellipsis size={16} className="dark:text-white text-black"/>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Add collection</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </CardTitle>
        <div className="mt-2">
          <h2 className="text-sm font-semibold text-black dark:text-white">Price</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">500 Baht</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div
          className="flex items-center mt-2 cursor-pointer"
          onClick={() => navigate("/user/auth/dashboard/1")}
        >
          <Avatar>
            <AvatarImage src={Ellipse} alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-3 text-sm text-black dark:text-white">YummyGuy</p>
        </div>
        <Heart
          onClick={() => setLike(!like)}
          className={`cursor-pointer transition-all ${
            like ? "text-red-500 fill-red-500" : "text-red-500"
          }`}
        />
      </CardFooter>
    </Card>
  );
};

export default Picture;
