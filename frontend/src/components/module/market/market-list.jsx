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

const MarketList = () => {
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
              <div className="flex justify-center md:justify-between items-center">
                <div className="grid grid-cols md:grid-cols-4 mx-auto gap-4">
                  <Picture />
                  <Picture />
                  <Picture />
                  <Picture />
                  <Picture />
                  <Picture />
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
    </section>
  );
};

export default MarketList;
