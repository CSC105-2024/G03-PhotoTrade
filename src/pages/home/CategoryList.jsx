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
import MainLayout from '@layouts/MainLayout'

const CategoryList = () => {
  return (
    <MainLayout title={'Picture Category'}>
      <div className='flex justify-center'>

        <Carousel 
          opts={{ 
            align: "start" 
          }} 
          className='w-full max-w-md md:max-w-4xl sm:my-16 my-16'>
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.id} className='flex justify-center md:basis-1/2 lg:basis-1/3'>
                <div className='p-1 mx-auto'>
                  <Category title={category.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </MainLayout>
  )
}

export default CategoryList