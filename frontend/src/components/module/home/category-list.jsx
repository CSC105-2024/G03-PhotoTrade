import React from "react";
import Category from "@/components/card/category";
import { categories } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainLayout from "@/components/layouts/main-layout";

const CategoryList = () => {
  return (
    <MainLayout title={"Picture Category"}>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xs md:max-w-xl lg:max-w-4xl mt-16 mx-auto"
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="flex justify-center md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 mx-auto">
                  <Category title={category.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px] " />
        </Carousel>
      </div>
    </MainLayout>
  );
};

export default CategoryList;
