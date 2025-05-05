import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, ImageUp } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const AddPicture = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[250px] h-[400px] rounded-xl p-6 border-none cursor-pointer">
          <div className="flex justify-center items-center w-full h-full rounded-xl border-2 border-purple-500 border-dashed">
            <ImagePlus size={48} />
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="rounded-xl p-8">
        <div className="lg:flex lg:gap-8">
          <Card className="flex justify-center items-center w-[250px] cursor-pointer ">
            <CardContent className="flex justify-center items-center ">
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

            <Button variant={"outline"} className="w-full dark:text-white">
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPicture;
