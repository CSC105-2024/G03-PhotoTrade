import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdownfilter() {
  const [position, setPosition] = React.useState("1");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-200">Select Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="1">Best seller</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">Price: Low to High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="4">Price: High to Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdownfilter;
