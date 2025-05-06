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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Heart, Ellipsis } from "lucide-react";
import Ellipse from "@/assets/Ellipse.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Picture = ({ alwaysLike = false, name, price, username }) => {
  const [like, setLike] = useState(alwaysLike);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const showMenu = location.pathname === "/user/auth/dashboard/1";

  return (
    <Card className="w-[250px] h-[400px] rounded-xl pt-0 mb-5 shadow-lg border bg-background text-foreground">
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
        <CardTitle className="text-xl flex items-start">
          {name}
          {isAuthenticated && showMenu && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Ellipsis size={16} />
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
          <h2 className="text-sm font-semibold">Price</h2>
          <p className="text-sm text-muted-foreground">{price}</p>
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
          <p className="ml-3 text-sm">{username}</p>
        </div>
        <Heart
          onClick={() => setLike(!like)}
          className={`cursor-pointer transition-all ${
            like ? "text-destructive fill-destructive" : "text-muted-foreground"
          }`}
        />
      </CardFooter>
    </Card>
  );
};

export default Picture;
