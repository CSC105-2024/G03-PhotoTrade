import React from 'react'
import Picture from '@/components/card/picture'
import NavMarket from '@/components/nav/nav-market'
import Collection from '@/components/card/Collection'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { TabsContent } from "@/components/ui/tabs"

const MarketList = () => {
    return (
        <section>
            <NavMarket>
                <TabsContent value="photo">
                    <div className="flex justify-center mt-10 md:justify-between items-center">
                        <div className='grid grid-cols-2 md:grid-cols-3 mx-auto gap-6'>
                            <Picture />
                            <Picture />
                            <Picture />
                            <Picture />
                            <Picture />
                            <Picture />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="collections">
                    <div className="flex justify-center mt-10 md:justify-between items-center">
                        <div className='grid grid-cols-2 mx-auto gap-6'>
                            <Collection />
                            <Collection />
                            <Collection />
                            <Collection />
                            <Collection />
                            <Collection />
                        </div>
                    </div>
                </TabsContent>
            </NavMarket>

            <Pagination className="my-4">
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
