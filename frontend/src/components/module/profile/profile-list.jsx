import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AddPicture from "@/components/card/add-picture";
import Picture from "@/components/card/picture";
import Collection from "@/components/card/collection";

const ProfileList = () => {
  return (
    <>
      <Tabs defaultValue="listings">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="listings">Listings</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="purchases">Purchases</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols lg:grid-cols-4 mx-auto gap-4">
                  <Picture />
                  <Picture />
                  <Picture />
                  <AddPicture />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-3 mx-auto gap-4">
                  <Collection />
                  <Collection />
                  <Collection />
                  <Collection />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchases">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4">
                  <Picture />
                  <Picture />
                  <Picture />
                  <Picture />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card className="min-h-screen">
            <CardContent>
              <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4">
                  <Picture alwaysLike={true} />
                  <Picture alwaysLike={true} />
                  <Picture alwaysLike={true} />
                  <Picture alwaysLike={true} />
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
    </>
  );
};

export default ProfileList;
