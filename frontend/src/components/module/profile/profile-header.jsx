import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPen, UserPlus, UserMinus, Dot, XOctagon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "@/reducer/user";
import { getFollowCount, following } from "@/reducer/follow";

const ProfileHeader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profileUser } = useSelector((state) => state.user);
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const { count, isFollow } = useSelector((state) => state.follow);

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
      dispatch(getFollowCount(id))
    }
  }, [dispatch, id]);

  const isOwner = isAuthenticated && userInfo.id === parseInt(id);

  const handleButtonClick = () => {
    const payload = {
      followingId: id
    }
    dispatch(following(payload))
  };

  return (
    <div className="mb-6 md:pt-20">
      <div className="flex items-center">
        <Avatar className="h-24 w-24 border-3 border-white">
          <AvatarImage src={profileUser?.profile_url} alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ml-4 flex-1">
          <h1 className="text-xl font-bold  dark:text-white">
            {profileUser?.name}
          </h1>
          <div className="flex h-5 items-center space-x-2 text-sm  dark:text-gray-300">
            <p><span className="font-bold">{count?.followerCount}</span>{" "}follower</p>
            <Dot />
            <p><span className="font-bold">{count?.followingCount}</span>{" "}following</p>
            <Separator orientation="vertical" />
            <span>100 images</span>
          </div>
          <p>{profileUser.bio}</p>
        </div>

        <div className="ml-auto space-y-2 hidden md:flex">
          {isOwner && isAuthenticated && (
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-600 dark:text-white"
              onClick={() => navigate("/user/auth/edit")}
            >
              <UserPen className="mr-1" />
              Edit
            </Button>
          )}

          {!isOwner && isAuthenticated && (
            <Button
              variant="outline"
              className="border-gray-600 dark:border-gray-700  dark:text-gray-100"
              onClick={handleButtonClick}
            >
              {isFollow ? (
                <UserMinus className="mr-1" />
              ) : (
                <UserPlus className="mr-1" />
              )}
              {isFollow ? "UnFollow" : "Follow"}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 md:hidden">
        {isOwner && isAuthenticated && (
          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-600 dark:text-white"
            onClick={() => navigate("/user/auth/edit")}
          >
            <UserPen className="mr-1" />
            Edit
          </Button>
        )}

        {!isOwner && isAuthenticated && (
          <Button
            variant="outline"
            className="border-gray-600 dark:border-gray-700  dark:text-gray-100"
            onClick={handleButtonClick}
          >
            {isFollow ? (
              <UserMinus className="mr-1" />
            ) : (
              <UserPlus className="mr-1" />
            )}
            {isFollow ? "UnFollow" : "Follow"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
