import React from 'react'
import Category from '@components/card/Category'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Nature & Wildlife' },
    { id: 2, name: 'Travel & Destinations' },
    { id: 3, name: 'People & Lifestyle' },
    { id: 4, name: 'Food & Drinks' },
    { id: 5, name: 'Business & Technology' },
    { id: 6, name: 'Architecture & Urban' },
    { id: 7, name: 'Abstract & Art' },
    { id: 8, name: 'Sports & Action' },
  ]

  return (
    <Carousel 
      opts={{ 
        align: "start" 
      }} 
      className='w-full max-w-4xl mx-auto mt-20'>
      <CarouselContent className="gap-10">
        {categories.map((category) => (
          <CarouselItem key={category.id} className='md:basis-1/3 lg:basis-1/4'>
            <Category title={category.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CategoryList
