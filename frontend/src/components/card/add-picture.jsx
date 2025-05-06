import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, ImageUp } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const AddPicture = () => {
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "photo_trade");
    data.append("cloud_name", "dcpgrfpaf");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcpgrfpaf/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileUrl = await res.json();
    console.log(fileUrl.url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Card className="w-[250px] h-[400px] flex justify-center items-center bg-accent text-accent-foreground border shadow-xs dark:bg-input/50 dark:border-input">
          <ImagePlus size={48} />
        </Card>
      </DialogTrigger>

      <DialogContent className="rounded-xl p-8">
        <div className="lg:flex lg:gap-8">
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/pdf"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <Card
            className="flex justify-center items-center w-[250px] cursor-pointer border-solid border-2 border-white dark:border-gray-600"
            onClick={() =>
              fileInputRef.current && fileInputRef.current.click()
            }
            type="button"
          >
            <CardContent className="flex justify-center items-center">
              <ImageUp size={100} strokeWidth={1.75} color="#787878" />
            </CardContent>
          </Card>

          <div className="lg:w-[60%] w-full">
            <p className="text-2xl font-bold mb-6">Upload Image</p>

            <label className="block text-sm mb-1">Name</label>
            <Input
              type="text"
              placeholder="Enter image name"
              className="w-full mb-4"
            />

            <label className="block text-sm mb-1">Description</label>
            <Input
              type="text"
              placeholder="Enter description"
              className="w-full mb-4 h-[80px]"
            />

            <label className="block text-sm mb-1">Price</label>
            <div className="flex items-center gap-2 mb-3">
              <Input type="text" placeholder="Enter price" className="w-full" />
            </div>

            <Button variant="outline" className="w-full dark:text-white">
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPicture;
