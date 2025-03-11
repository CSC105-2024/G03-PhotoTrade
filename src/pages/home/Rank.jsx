import React from 'react'
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
    const userRank = [
        {
            id: '1',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '2',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '3',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '4',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '5',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '6',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '7',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '8',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '9',
            name: 'Mrnatural',
            image: '10',
        },
        {
            id: '10',
            name: 'Mrnatural',
            image: '10',
        },
    ]

    return (
        <div className='mt-20'>
            <Table className='mt-10 max-w-2xl mx-auto'>
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
        </div>
    )
}

export default Rank
