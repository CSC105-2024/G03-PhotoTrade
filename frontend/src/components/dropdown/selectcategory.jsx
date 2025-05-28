import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";
import axios from "axios";

export function Dropdowncategoryprofile({ onChange, value = [] }) {
  const [selectedCategories, setSelectedCategories] = React.useState(
    Array.isArray(value) ? value : [value]
  );
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/v1/category/all");
        if (response.data && response.data.success && response.data.data) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      
      if (onChange) {
        onChange(newSelection);
      }
      
      return newSelection;
    });
  };

  const buttonText = () => {
    if (selectedCategories.length === 0) {
      return "All Categories";
    } else if (selectedCategories.length === 1) {
      const category = categories.find((c) => c.id === selectedCategories[0]);
      return category ? category.name : "Select Categories";
    } else {
      return `${selectedCategories.length} categories selected`;
    }
  };

  return (
    <div className="w-56">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 w-full justify-between"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="truncate">{buttonText()}</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[230px] max-h-[300px] overflow-y-auto">
          <DropdownMenuLabel className="flex justify-between items-center">
            <span>Categories</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {loading ? (
            <div className="py-2 px-2 text-center">Loading categories...</div>
          ) : (
            categories.map((category) => (
              <DropdownMenuCheckboxItem
                key={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{category.name}</span>
                
              </DropdownMenuCheckboxItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdowncategoryprofile;