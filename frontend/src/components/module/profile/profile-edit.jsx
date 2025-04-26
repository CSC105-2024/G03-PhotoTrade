import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Ellipse from "@/assets/Ellipse.png";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";

const ProfilEdit = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("เลือกไฟล์:", file);
    }
  };

  return (
    <div className="mb-6 md:pt-20">
      <Card className="bg-white dark:bg-[#18181b] shadow-md">
        <CardContent className="flex justify-between items-center">
          <div className="flex items-center mt-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={Ellipse} alt="User avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-3 text-sm text-gray-900 dark:text-white">
              YummyGuy
            </p>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-600 dark:text-white"
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
              type="button"
            >
              Change Picture
            </Button>
          </div>
        </CardContent>
      </Card>

      <form className="py-4">
        <div className="mb-5">
          <Label htmlFor="username" className="mb-2 text-md">
            Username
          </Label>
          <Input id="username" type="text" />
        </div>

        <div className="mb-5">
          <Label htmlFor="email" className="mb-2 text-md">
            Email
          </Label>
          <Input id="email" type="email" />
        </div>

        <div className="mb-5">
          <Label htmlFor="bio" className="mb-2 text-md">
            Bio
          </Label>
          <Input id="bio" type="text" />
        </div>
        <Button
          type="submit"
          onClick={() => {
            navigate("/user/auth/dashboard/1");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfilEdit;
