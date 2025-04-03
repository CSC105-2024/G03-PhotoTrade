import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, ImageUp } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AddPicture = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="lg:w-[250px] w-[230px] lg:h-[395px] h-[300px] rounded-xl pt-0 bg-[#2B2B2B] border-none text-white mb-5 cursor-pointer">
          <CardContent className="flex items-center justify-center p-4">
            <div className="relative w-full lg:h-[365px] h-[270px] bg-black rounded-xl border-2 border-purple-500 border-dashed">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-4xl">
                <ImagePlus size={48} />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="bg-[#2B2B2B] text-white rounded-lg p-8  mx-auto">
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-[40%] w-full h-40 lg:h-auto bg-[#3B3B3B] rounded-xl flex items-center justify-center mb-5">
            <ImageUp size={100} strokeWidth={1.75} color="#787878" />
          </div>

          <div className="lg:w-[60%] w-full">
            <p className="text-2xl font-bold mb-6">Upload Image</p>

            <label className="block text-sm mb-1">Photo name</label>
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
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Enter price"
                className="w-full"
              />
              <p>THB</p>
            </div>

            <button className="mt-6 w-full bg-purple-500 text-white py-3 px-6 rounded-lg">
              Upload
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPicture;
