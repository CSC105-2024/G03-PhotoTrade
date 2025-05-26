import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SortAsc } from "lucide-react";

export function Dropdownfilter({ onFilterChange }) {
  const [position, setPosition] = React.useState("best_seller");
  
  const handleValueChange = (value) => {
    setPosition(value);
    
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
        >
          <SortAsc className="h-4 w-4" />
          <span>Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort Photos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={handleValueChange}>
          <DropdownMenuRadioItem value="best_seller">Best seller</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price_low_to_high">
            Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price_high_to_low">
            Price: High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdownfilter;