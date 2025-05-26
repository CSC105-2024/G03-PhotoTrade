import React, { useEffect, useState } from 'react';
import Category from '@/components/card/category';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import MainLayout from '@/components/layouts/main-layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/v1/category/all');

        if (response.data && response.data.success && response.data.data) {
          setCategories(response.data.data);
        } else {
          throw new Error('Invalid data format from API');
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err.message || 'Failed to load categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/market?category=${categoryId}`);
  };

  if (loading) {
    return (
      <MainLayout title={'Picture Category'}>
        <div className="flex justify-center items-center h-[300px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Loading categories...</span>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout title={'Picture Category'}>
        <div className="flex justify-center items-center h-[300px] text-red-500">
          <p>Error loading categories: {error}</p>
        </div>
      </MainLayout>
    );
  }

  if (categories.length === 0) {
    return (
      <MainLayout title={'Picture Category'}>
        <div className="flex justify-center items-center h-[300px]">
          <p>No categories available.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={'Picture Category'}>
      <div className="flex justify-center px-4 py-8">
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 cursor-pointer flex justify-center"
                onClick={() => handleCategoryClick(category.id)}
              >
                <Category title={category.name} imageUrl={category.category_url} />
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
