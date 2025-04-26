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
import { useNavigate } from "react-router-dom";
const CategoryList = () => {
  const navigate = useNavigate();
  return (
    <MainLayout title={"Picture Category"}>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xs md:max-w-xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="flex justify-center md:basis-1/2 lg:basis-1/3 cursor-pointer"
                onClick={() => navigate(`/market/`)}
              >
                <div className="p-1 mx-auto">
                  <Category title={category.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="left-[-30px] lg:left-[-50px] bg-white dark:bg-white border border-gray-200 shadow
    hover:bg-gray-100 dark:hover:bg-gray-300
    [&>svg]:!text-black"
          />
          <CarouselNext
            className="right-[-30px] lg:right-[-50px] bg-white dark:bg-white border border-gray-200 shadow
    hover:bg-gray-100 dark:hover:bg-gray-300
    [&>svg]:!text-black"
          />
        </Carousel>
      </div>
    </MainLayout>
  );
};

export default CategoryList;
