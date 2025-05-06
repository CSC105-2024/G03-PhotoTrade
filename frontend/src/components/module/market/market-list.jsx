import React from "react";
import Picture from "@/components/card/picture";
import Collection from "@/components/card/collection";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, Card } from "@/components/ui/card";
import { getAllPhoto , getPhotoByCategory } from "@/reducer/photo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MarketList = () => {
  const dispatch = useDispatch();
  const { photoList, loading } = useSelector((state) => state.photo);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      dispatch(getAllPhoto());
    } else {
      dispatch(getPhotoByCategory(selectedCategories));
    }
  }, [dispatch, selectedCategories]);
  
  useEffect(() => {
    dispatch(getAllPhoto());
  }, [dispatch]);

  return (
    <section>
      <Tabs defaultValue="photo">
        <TabsList className="w-full">
          <TabsTrigger value="photo" className="cursor-pointer">
            Photo
          </TabsTrigger>
          <TabsTrigger value="collections" className="cursor-pointer">
            Collections
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photo">
          <Card>
            <CardContent>
              <div className="flex justify-center md:justify-between items-center min-h-screen">
                <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4">
                  {photoList.map((item) => (
                    <Picture
                      key={item.id}
                      name={item.title}
                      price={item.price}
                      username={item.user.name}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card>
            <CardContent>
              <div className="flex justify-center md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-3 mx-auto gap-4">
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white transition-colors"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="text-gray-700 dark:text-gray-400" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default MarketList;
