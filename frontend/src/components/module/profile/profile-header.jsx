import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPen, UserPlus, UserMinus, Dot, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getUserSalesCount } from "@/reducer/user";
import { getFollowCount, following } from "@/reducer/follow";

const ProfileHeader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profileUser, salesCount } = useSelector((state) => state.user);
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const { count, isFollow } = useSelector((state) => state.follow);

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
      dispatch(getFollowCount(id));
      dispatch(getUserSalesCount(id)); // เรียกใช้ action เพื่อดึงข้อมูลจำนวนยอดขาย
    }
  }, [dispatch, id]);

  const isOwner = isAuthenticated && userInfo.id === parseInt(id);

  const handleButtonClick = () => {
    const payload = {
      followingId: id
    };
    dispatch(following(payload));
  };

  return (
    <div className="mb-6 md:pt-20">
      <div className="flex items-center">
        <Avatar className="h-24 w-24 border-3 border-white">
          <AvatarImage src={profileUser?.profile_url} alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ml-4 flex-1">
          <h1 className="text-xl font-bold dark:text-white">
            {profileUser?.name}
          </h1>
          <div className="flex h-5 items-center space-x-2 text-sm dark:text-gray-300">
            <p>
              <span className="font-bold">{count?.followerCount || 0}</span>{" "}
              follower
            </p>
            <Dot />
            <p>
              <span className="font-bold">{count?.followingCount || 0}</span>{" "}
              following
            </p>
            <Separator orientation="vertical" />
            <div className="flex items-center">
              <ShoppingCart className="mr-1 h-4 w-4" />
              <span>
                <span className="font-bold">{salesCount || 0}</span> sales
              </span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {profileUser?.bio || "No bio available"}
          </p>
        </div>

        <div className="ml-auto space-y-2 hidden md:flex md:flex-col">
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
              variant={isFollow ? "destructive" : "outline"}
              className={isFollow 
                ? "bg-red-500 hover:bg-red-600 text-white" 
                : "border-gray-600 dark:border-gray-700 dark:text-gray-100"}
              onClick={handleButtonClick}
            >
              {isFollow ? (
                <UserMinus className="mr-1" />
              ) : (
                <UserPlus className="mr-1" />
              )}
              {isFollow ? "Unfollow" : "Follow"}
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
            variant={isFollow ? "destructive" : "outline"}
            className={isFollow 
              ? "bg-red-500 hover:bg-red-600 text-white" 
              : "border-gray-600 dark:border-gray-700 dark:text-gray-100"}
            onClick={handleButtonClick}
          >
            {isFollow ? (
              <UserMinus className="mr-1" />
            ) : (
              <UserPlus className="mr-1" />
            )}
            {isFollow ? "Unfollow" : "Follow"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;