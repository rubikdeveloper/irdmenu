"use client";

import { useState } from "react";
import MenuItem from "./components/MenuItem";

type MenuItemType = {
  category: string;
  name: string;
  description: string;
  cookingMethod: string;
  allergens: string[];
};

const mostSoldItems: MenuItemType[] = [
  {
    category: "Main",
    name: "Classic Burger",
    description: "Juicy grilled beef burger with lettuce, tomato, and cheese.",
    cookingMethod: "Grilled",
    allergens: ["gluten", "dairy"],
  },
  {
    category: "Salad",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    category: "Main",
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil.",
    cookingMethod: "Baked",
    allergens: ["gluten", "dairy"],
  },
  {
    category: "Main",
    name: "Chicken Alfredo",
    description: "Creamy Alfredo pasta with grilled chicken.",
    cookingMethod: "Boiled",
    allergens: ["gluten", "dairy"],
  },
  {
    category: "Main",
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection.",
    cookingMethod: "Grilled",
    allergens: ["fish"],
  },
  {
    category: "Main",
    name: "Beef Tacos",
    description: "Soft tacos filled with seasoned beef, lettuce, and cheese.",
    cookingMethod: "Grilled",
    allergens: ["gluten", "dairy"],
  },
  {
    category: "Main",
    name: "Vegetable Stir-fry",
    description: "Mixed vegetables stir-fried with soy sauce.",
    cookingMethod: "Stir-fried",
    allergens: ["soy"],
  },
  {
    category: "Main",
    name: "BBQ Ribs",
    description: "Slow-cooked ribs with BBQ sauce.",
    cookingMethod: "Slow-cooked",
    allergens: ["none"],
  },
  {
    category: "Salad",
    name: "Greek Salad",
    description: "Salad with tomatoes, cucumbers, olives, and feta cheese.",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    category: "Dessert",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with a smooth chocolate ganache.",
    cookingMethod: "Baked",
    allergens: ["gluten", "dairy"],
  },
];

const categories = ["Main", "Salad", "Dessert"];

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const toggleCategoryExpand = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="p-4 flex-1">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2
            className="text-2xl font-bold mb-4 cursor-pointer text-primary"
            onClick={() => toggleCategoryExpand(category)}
          >
            {category}
          </h2>
          {expandedCategories[category] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mostSoldItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    isExpanded={!!expandedItems[item.name]}
                    toggleExpand={toggleExpand}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
