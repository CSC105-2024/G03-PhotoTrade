import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

const Category = ({ title, imageUrl, className }) => {
  return (
    <Card
      className={cn(
        'w-[280px] h-[280px] overflow-hidden rounded-xl transition-all hover:scale-105 relative ',
        className
      )}
    >
      <CardContent className="p-0 h-full">
        <div className="h-full">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover absolute bottom-10" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 dark:bg-black bg-white bg-opacity-60 text-white p-4 text-center">
          <h3 className="font-medium text-xl dark:text-white text-black">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
