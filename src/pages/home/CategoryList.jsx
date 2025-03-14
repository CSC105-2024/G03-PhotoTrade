import React from 'react'
import Category from '@components/card/Category'
import { categories } from '../../constants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MainLayout from '@layouts/MainLayouts'

const CategoryList = () => {
  return (
    <MainLayout title={'Picture Category'}>
      <Carousel 
        opts={{ 
          align: "start" 
        }} 
        className='w-full max-w-md md:max-w-4xl'>
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem key={category.id} className=' md:basis-1/2 lg:basis-1/3'>\
              <div className='p-1'>
                <Category title={category.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MainLayout>
  )
}

export default CategoryList
