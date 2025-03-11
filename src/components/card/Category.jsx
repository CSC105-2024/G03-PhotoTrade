import React from 'react'
import Home_1 from '../../assets/Home_1.png'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Category = ({ title }) => {
    return (
        <Card className={'w-[250px] '}>
            <div >
                <img src={Home_1} alt="banner" />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default Category
