import React, { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "@/reducer/user";

const ProfilEdit = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState(userInfo.profile_url || "");

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      profile_url: "",
    },
  });

  const submitForm = (data) => {
    const payload = {
      id: userInfo.id,
      name: data.name,
      email: data.email,
      bio: data.bio,
      profile_url: value
    };
    Object.keys(payload).map((key) => {
      if (payload[key] === "") {
        delete payload[key]
      }
    })
    dispatch(updateUser(payload))
  }
  console.log(value)

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "photo_trade");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcpgrfpaf/image/upload",
      {
        method: "POST",
        body: data,
      },
    );
    const fileUrl = await res.json();
    setValue(fileUrl.url);
  };
  console.log(userInfo)
  return (
    <div className="mb-6 md:pt-20 min-h-screen">
      <Card>
        <CardContent className="flex justify-between items-center">
          <div className="flex items-center mt-2">
            <Avatar className="h-15 w-15">
              <AvatarImage src={value} alt="User avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-3 text-sm text-gray-900 dark:text-white">
              {userInfo.name}
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

      <form className="pt-4" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-5">
          <Label htmlFor="username" className="mb-2 text-md">
            Username
          </Label>
          <Input id="name" type="text" {...register('name')}/>
        </div>

        <div className="mb-5">
          <Label htmlFor="email" className="mb-2 text-md">
            Email
          </Label>
          <Input id="email" type="email" {...register('email')}/>
        </div>

        <div className="mb-5">
          <Label htmlFor="bio" className="mb-2 text-md">
            Bio
          </Label>
          <Input id="bio" type="text" {...register('bio')}/>
        </div>
        <Button
          type="submit"
          onClick={() => {
            navigate(`/user/auth/dashboard/${userInfo.id}`)
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfilEdit;
