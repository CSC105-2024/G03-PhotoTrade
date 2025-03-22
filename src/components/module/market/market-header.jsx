import React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const Header = () => {
  return (
    <section className='pt-6 md:pt-26'>
      <div>
        <h1 className='text-4xl font-bold'>Browse Marketplace</h1>
        <p className='mt-2 text-neutral-500'>Browse through more than 50k Photo on the Photo Marketplace.</p>
      </div>

      <div className="relative ml-auto flex-1 md:grow-0 mt-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg  pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </section>
  )
}

export default Header
