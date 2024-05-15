"use client";
import { useState } from "react";
import MenuItem from "./components/MenuItem";

type MenuItemType = {
  name: string;
  description: string;
  cookingMethod: string;
  allergens: string[];
};

const mostSoldItems = [
  {
    name: "Classic Burger",
    description: "Juicy grilled beef burger with lettuce, tomato, and cheese.",
    cookingMethod: "Grilled",
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil.",
    cookingMethod: "Baked",
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy Alfredo pasta with grilled chicken.",
    cookingMethod: "Boiled",
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection.",
    cookingMethod: "Grilled",
    allergens: ["fish"],
  },
  {
    name: "Beef Tacos",
    description: "Soft tacos filled with seasoned beef, lettuce, and cheese.",
    cookingMethod: "Grilled",
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Vegetable Stir-fry",
    description: "Mixed vegetables stir-fried with soy sauce.",
    cookingMethod: "Stir-fried",
    allergens: ["soy"],
  },
  {
    name: "BBQ Ribs",
    description: "Slow-cooked ribs with BBQ sauce.",
    cookingMethod: "Slow-cooked",
    allergens: ["none"],
  },
  {
    name: "Greek Salad",
    description: "Salad with tomatoes, cucumbers, olives, and feta cheese.",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    name: "Chocolate Cake",
    description: "Rich chocolate cake with a smooth chocolate ganache.",
    cookingMethod: "Baked",
    allergens: ["gluten", "dairy"],
  },
];

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const filteredItems = mostSoldItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">
        Welcome to Our Hotel&apos;s Dining Options
      </h1>
      <input
        type="text"
        placeholder="Search for items..."
        className="mb-8 p-2 border border-gray-300 rounded text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <section className="w-full flex flex-wrap justify-center">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isExpanded={!!expandedItems[item.name]}
            toggleExpand={toggleExpand}
          />
        ))}
      </section>
    </main>
  );
}
