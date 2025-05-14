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
import { Check, ChevronDown } from "lucide-react";

// ข้อมูลหมวดหมู่ที่มีรหัสประจำตัว
const categories = [
  { id: 1, name: "Lifestyle" },
  { id: 2, name: "Food & Drink" },
  { id: 3, name: "Business & Work" },
  { id: 4, name: "Nature & Landscapes" },
  { id: 5, name: "People & Portraits" },
  { id: 6, name: "Travel & Transportation" },
  { id: 7, name: "Animals & Pets" },
  { id: 8, name: "Abstract & Backgrounds" },
  { id: 9, name: "Seasonal Themes" },
  { id: 10, name: "Sports & Fitness" },
];

export function Dropdowncategoryprofile({ onChange, value = [] }) {
  // รับค่า value เป็น array ของ category ids
  const [selectedCategories, setSelectedCategories] = React.useState(
    Array.isArray(value) ? value : [value]
  );

  // ฟังก์ชันเปลี่ยนสถานะการเลือกหมวดหมู่
  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      // ถ้ามีอยู่แล้วให้ลบออก ถ้าไม่มีให้เพิ่มเข้าไป
      const newSelection = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      
      // เรียก callback ส่งค่ากลับไปยัง parent component
      if (onChange) {
        onChange(newSelection);
      }
      
      return newSelection;
    });
  };

  // สร้างข้อความที่แสดงบนปุ่ม
  const buttonText = () => {
    if (selectedCategories.length === 0) {
      return "Select Categories";
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
            className="w-full justify-between"
          >
            <span className="truncate">{buttonText()}</span>
            <ChevronDown className="h-4 w-4 opacity-50 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[230px] max-h-[300px] overflow-y-auto">
          <DropdownMenuLabel className="flex justify-between items-center">
            <span>Categories</span>
            {selectedCategories.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategories([]);
                  if (onChange) onChange([]);
                }}
                className="h-auto py-1 px-2 text-xs"
              >
                Clear all
              </Button>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category.id}
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => toggleCategory(category.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>{category.name}</span>
              {selectedCategories.includes(category.id) && (
                <Check className="h-4 w-4 ml-2 text-primary" />
              )}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdowncategoryprofile;