import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FolderPlus } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const AddCollection = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Card className="w-[250px] h-[400px] flex justify-center items-center bg-accent text-accent-foreground border shadow-xs dark:bg-input/50 dark:border-input">
          <FolderPlus size={48} />
        </Card>
      </DialogTrigger>

      <DialogContent className="rounded-xl p-8 flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-sm">
          <p className="text-2xl font-bold mb-6">Collection</p>
          <label className="block text-sm mb-1 text-left">Name</label>
          <Input
            type="text"
            placeholder="Enter image name"
            className="w-full mb-4"
          />
          <Button variant="outline" className="w-full dark:text-white">
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCollection;
