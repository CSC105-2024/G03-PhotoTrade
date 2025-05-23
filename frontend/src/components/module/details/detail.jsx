import React from "react";
import detail from "@/assets/detail.png";
import Ellipse from "@/assets/Ellipse.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BreadcrumbTop from "@/components/breadcrumb/breadcrumb-top";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const Detail = () => {
  const navigate = useNavigate();
  const Categoryclick = () => {
    navigate("/market");
  };

  const handleConfirmPurchase = () => {
    toast.success("Purchase successful!");
    navigate("/market");
  };

  return (
    <div className="md:pt-16">
      <BreadcrumbTop />
      <AspectRatio ratio={3 / 2} className="border border-gray-500 rounded-md">
        <img
          src={detail}
          alt="Image"
          className="w-full h-full rounded-md object-contain"
        />
      </AspectRatio>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Sunset in Thailand</h1>
          <p className="">Sep 30, 2022</p>
        </div>
      </div>

      <div className="mb-26">
        <p className="">
          This stunning sunset was captured in Thailand, showcasing vibrant
          orange and pink hues blending seamlessly across the sky. The calm
          water reflects the beauty of the evening, creating a serene and
          peaceful atmosphere. Perfect for nature enthusiasts and landscape
          lovers.
        </p>
      </div>

      <div
        className="flex items-center my-5 cursor-pointer"
        onClick={() => navigate("/user/auth/dashboard/1")}
      >
        <Avatar>
          <AvatarImage src={Ellipse} alt="first" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-3">YummyGuy</span>
      </div>

      <div className="space-x-2 mb-10">
        <Button
          variant="outline"
          onClick={Categoryclick}
          className={"dark:text-white"}
        >
          Nature & Wildlife
        </Button>
        <Button
          variant="outline"
          onClick={Categoryclick}
          className={"dark:text-white"}
        >
          Travel & Destinations
        </Button>
        <Button
          variant="outline"
          onClick={Categoryclick}
          className={"dark:text-white"}
        >
          People & Lifestyle
        </Button>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full bg-green-500">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy now
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Purchase</AlertDialogTitle>
            <AlertDialogDescription>
              Please note that this purchase cannot be refunded.
              <br />
              Are you sure you want to buy this photo?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className={"dark:text-white"}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmPurchase}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Detail;
