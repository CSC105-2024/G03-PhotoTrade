import Ellipse from "@/assets/Ellipse.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BreadcrumbTop from "@/components/breadcrumb/breadcrumb-top";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { getPhotoId } from "@/reducer/photo";
import { useEffect } from "react";
import { number } from "zod";

const Detail = () => {
  const param = useParams("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { photoListId } = useSelector((state) => state.photo);

  const Categoryclick = () => {
    navigate("/market");
  };
  console.log("dd", photoListId);

  const handleConfirmPurchase = () => {
    toast.success("Purchase successful!");
    navigate("/market");
  };

  useEffect(() => {
    dispatch(getPhotoId(param.id));
  }, [dispatch]);

  const formatDate = (date) => {
    const dateSubmitted = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };

    return dateSubmitted.toLocaleDateString("en-US", options);
  };

  return (
    <div className="md:pt-16">
      <BreadcrumbTop />
      <AspectRatio ratio={3 / 2} className="border border-gray-500 rounded-md  relative overflow-hidden">
        <img
          src={photoListId.thumbnail_url}
          alt="Image"
          className="w-full h-full rounded-md object-contain"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="text-white text-4xl font-bold opacity-30 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-8 left-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-8 right-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute bottom-8 left-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute bottom-8 right-8 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-45">
            <div className="text-white text-3xl font-bold opacity-25 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 rotate-45">
            <div className="text-white text-2xl font-bold opacity-20 select-none">
              PHOTOTRADE
            </div>
          </div>

          <div className="absolute top-3/4 right-1/4 rotate-45">
            <div className="text-white text-2xl font-bold opacity-20 select-none">
              PHOTOTRADE
            </div>
          </div>
        </div>
      </AspectRatio>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <h1 className="text-3xl font-bold">{photoListId?.title}</h1>
          <p className="">{formatDate(photoListId.create_at)}</p>
        </div>
      </div>

      <div className="mb-26">
        <p className="text-md">{photoListId.description}</p>
      </div>

      <div
        className="flex items-center my-5 cursor-pointer"
        onClick={() => navigate("/user/auth/dashboard/1")}
      >
        <Avatar>
          <AvatarImage src={Ellipse} alt="first" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-3">{photoListId.user?.name}</span>
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
