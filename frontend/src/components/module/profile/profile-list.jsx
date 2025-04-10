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
                  <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4"></div>
                </div>
              </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="purchases">
          <Card className="min-h-screen">
              <CardContent>
                <div className="flex justify-center mt-10 md:justify-between items-center">
                  <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4"></div>
                </div>
              </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card className="min-h-screen">
              <CardContent>
                <div className="flex justify-center mt-10 md:justify-between items-center">
                  <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4"></div>
                </div>
              </CardContent>
            </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProfileList;
