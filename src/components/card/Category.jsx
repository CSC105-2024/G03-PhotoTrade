import React from 'react'
import Home_1 from '@assets/Home_1.png'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Category = ({ title }) => {
    return (
        <Card className='w-[300px] hover:opacity-90 rounded-xl pt-0 bg-[#2B2B2B] border-none text-white'>
            <CardHeader className='px-0'>
                <img 
                    src={Home_1} 
                    alt={title} 
                    className='w-full h-[200px] rounded-t-xl aspect-square object-cover' 
                />
            </CardHeader>
            <CardContent>
                <CardTitle className='text-center'>{title}</CardTitle>
            </CardContent>
        </Card>
    )
}

export default Category
