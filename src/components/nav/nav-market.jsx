import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


const NavMarket = ({ children }) => {
    return (
        <Tabs defaultValue="photo" className="relative z-1">
            <TabsList className="w-full">
                <TabsTrigger value="photo" className="cursor-pointer">Photo</TabsTrigger>
                <TabsTrigger value="collections" className="cursor-pointer">Collections</TabsTrigger>
            </TabsList>
            {children}
            {/* <TabsContent value="photo">{photo}</TabsContent> */}
            {/* <TabsContent value="collections">{collection}</TabsContent> */}
        </Tabs>
    )
}

export default NavMarket
