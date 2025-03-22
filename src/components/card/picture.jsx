import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Heart } from 'lucide-react';
import Ellipse from '@/assets/Ellipse.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Picture = () => {
    const [like, setLike] = useState(false)

    return (
        <Card className='w-[250px] hover:opacity-90 rounded-xl pt-0 bg-[#2B2B2B] border-none text-white'>
            <CardHeader className='px-0'>
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Sun"
                    className='w-full h-[200px] rounded-t-xl aspect-square object-cover'
                />
            </CardHeader>

            <CardContent>
                <CardTitle className='text-xl'>Sun</CardTitle>
                <div className='mt-2'>
                    <h2 className="text-sm font-semibold">Price</h2>
                    <p className="text-sm">500 Baht</p>
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
            <div className="flex items-center mt-2">
                    <Avatar>
                        <AvatarImage src={Ellipse} alt="User avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className='ml-3 text-sm'>YummyGuy</p>
                </div>
                <Heart
                    onClick={() => setLike(!like)}
                    className={`cursor-pointer transition-all ${like ? 'text-red-500 fill-red-500' : 'text-white'}`}
                />
            </CardFooter>
        </Card>
    )
}

export default Picture
