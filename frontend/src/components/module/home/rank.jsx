import React from 'react'
import { userRank } from '@/constants'
import MainLayout from '@/components/layouts/main-layout'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Rank = () => {
    return (
        <MainLayout
            title={'Top 10 Image Creators'}
            description={'Discover the Most Popular Photographers and Artists on Our Platform'}
        >
            <Table className='mt-10 max-w-2xl mx-auto text-white'>
                <TableCaption>A list of Image Creater.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Rank</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Image count</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {userRank.filter((item) => item.id > 3).map((itemFilter) => (
                        <TableRow key={itemFilter.id}>
                            <TableCell className="font-medium">{itemFilter.id}</TableCell>
                            <TableCell>{itemFilter.name}</TableCell>
                            <TableCell className="text-right">{itemFilter.image}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </MainLayout>
    )
}

export default Rank
