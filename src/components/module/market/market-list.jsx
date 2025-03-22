import React from 'react'
import Picture from '@/components/card/picture'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const MarketList = () => {
    return (
        <section>
            <div className="flex justify-center mt-10 md:justify-between items-center">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                </div>
            </div>

            <Pagination className="relative z-10 my-4">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section >
    )
}

export default MarketList
