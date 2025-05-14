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
import { SortAsc, Filter } from "lucide-react";

export function Dropdownfilter({ onFilterChange }) {
  const [position, setPosition] = React.useState("1");
  
  const handleValueChange = (value) => {
    setPosition(value);
    
    if (onFilterChange) {
      let sortType;
      switch (value) {
        case "1":
          sortType = "best_seller";
          break;
        case "2":
          sortType = "newest";
          break;
        case "3":
          sortType = "price_low_to_high";
          break;
        case "4":
          sortType = "price_high_to_low";
          break;
        default:
          sortType = "best_seller";
      }
      
      onFilterChange(sortType);
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
          <DropdownMenuRadioItem value="1">Best seller</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">
            Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="4">
            Price: High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdownfilter;