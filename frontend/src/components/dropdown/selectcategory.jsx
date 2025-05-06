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

export function Dropdowncategoryprofile() {
  const [Lifestyle, setLifestyle] = React.useState(false);
  const [FoodDrink, setFoodDrink] = React.useState(false);
  const [BusinessWork, setBusinessWork] = React.useState(false);
  const [NatureLandscapes, setNatureLandscapes] = React.useState(false);
  const [PeoplePortraits, setPeoplePortraits] = React.useState(false);
  const [TravelTransportation, setTravelTransportation] = React.useState(false);
  const [AnimalsPets, setAnimalsPets] = React.useState(false);
  const [AbstractBackgrounds, setAbstractBackgrounds] = React.useState(false);
  const [SeasonalThemes, setSeasonalThemes] = React.useState(false);
  const [SportsFitness, setSportsFitness] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Select Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={Lifestyle}
          onCheckedChange={setLifestyle}
        >
          Lifestyle
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={FoodDrink}
          onCheckedChange={setFoodDrink}
        >
          Food & Drink
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={BusinessWork}
          onCheckedChange={setBusinessWork}
        >
          Business & Work
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={NatureLandscapes}
          onCheckedChange={setNatureLandscapes}
        >
          Nature & Landscapes
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={PeoplePortraits}
          onCheckedChange={setPeoplePortraits}
        >
          People & Portraits
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={TravelTransportation}
          onCheckedChange={setTravelTransportation}
        >
          Travel & Transportation
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={AnimalsPets}
          onCheckedChange={setAnimalsPets}
        >
          Animals & Pets
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={AbstractBackgrounds}
          onCheckedChange={setAbstractBackgrounds}
        >
          Abstract & Backgrounds
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={SeasonalThemes}
          onCheckedChange={setSeasonalThemes}
        >
          Seasonal Themes
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={SportsFitness}
          onCheckedChange={setSportsFitness}
        >
          Sports & Fitness
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdowncategoryprofile;
