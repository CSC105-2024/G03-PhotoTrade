import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Listing from "../module/profile/Listing";
import PCollection from "../module/profile/Collection";
import Purchases from "../module/profile/Purchases";
import Favorites from "../module/profile/Favorites";

const ProfileTabs = () => {
  return (
    <div className="mt-6 w-fit">
      <Tabs defaultValue="listings" className="w-fit">
        <TabsList className="flex justify-center bg-white border border-gray-300 rounded-none w-full">
          <TabsTrigger
            value="listings"
            className="px-3 lg:px-17 text-sm lg:text-xl font-medium text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
          >
            Listings
          </TabsTrigger>
          <TabsTrigger
            value="collection"
            className="px-3 lg:px-17 py-2 text-sm lg:text-xl font-medium text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
          >
            Collection
          </TabsTrigger>
          <TabsTrigger
            value="purchases"
            className="px-3 lg:px-17 py-2 text-sm  lg:text-xl font-medium text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
          >
            Purchases
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="px-4 lg:px-17  py-2 text-sm lg:text-xl font-medium text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
          >
            Favorites
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <Listing />
        </TabsContent>
        <TabsContent value="collection">
          <PCollection />
        </TabsContent>
        <TabsContent value="purchases">
          <Purchases />
        </TabsContent>
        <TabsContent value="favorites">
          <Favorites />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
