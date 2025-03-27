import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";

const AddPicture = () => {
  return (
    <Card className="w-[230px] h-[230px] rounded-xl pt-0 bg-[#2B2B2B] border-none text-white mb-5 cursor-pointer">
      <CardContent className="flex items-center justify-center p-4">
        <div className="relative w-full h-[200px] bg-black rounded-xl border-2 border-purple-500 border-dashed">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-4xl">
            <ImagePlus size={48} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddPicture;
