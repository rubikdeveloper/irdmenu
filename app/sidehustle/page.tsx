"use client";

import { useState } from "react";
import MenuItem from "../components/MenuItem";

const sideHustleMenu = [
  // Salsas/Dips
  {
    category: "Salsas/Dips",
    name: "Guacamole",
    description: "Fresh herbs & ajo perejil",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Salsas/Dips",
    name: "Sikil Pak",
    description: "Tomato, guajillo & hazelnut",
    cookingMethod: "Fresh",
    allergens: ["nuts"],
  },
  {
    category: "Salsas/Dips",
    name: "Green Pipian",
    description: "Pistachio & jalapeño",
    cookingMethod: "Fresh",
    allergens: ["nuts"],
  },
  // Maiz/Corn
  {
    category: "Maiz/Corn",
    name: "Caviar y Arepa Paisa",
    description: "Imperial osciatra, with wild garlic crema & finger lime",
    cookingMethod: "Fresh",
    allergens: ["fish", "dairy"],
  },
  {
    category: "Maiz/Corn",
    name: "Smoked Chorizo Empanada",
    description: "Sweet potato with guajillo & pear relish",
    cookingMethod: "Baked",
    allergens: ["none"],
  },
  {
    category: "Maiz/Corn",
    name: "Tetela",
    description: "Smoked aubergine, cactus & sunflower seeds",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  // Tacos
  {
    category: "Tacos",
    name: "Shiitake Tacos",
    description: "With tare, shoyu & daikon",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Tacos",
    name: "Baja-Style Fish Tacos",
    description: "With chile meco coleslaw",
    cookingMethod: "Fresh",
    allergens: ["fish"],
  },
  {
    category: "Tacos",
    name: "Pork Carnitas Tacos",
    description: "With avocado salsa verde & xnipec",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  // Tostadas
  {
    category: "Tostadas",
    name: "Beef Tostadas",
    description: "With roasted pepper salsa & green onion",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Tostadas",
    name: "Tuna Crudo Tostadas",
    description: "With coriander mayo & ancho chile",
    cookingMethod: "Fresh",
    allergens: ["fish", "dairy"],
  },
  // Para Compartir
  {
    category: "Para Compartir",
    name: "Secreto Ibérico",
    description: "With chintestle & roast pepper sauce",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  {
    category: "Para Compartir",
    name: "Short Rib",
    description: "With salsa borracha & mango cabbage salad",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  // Postre/Dessert
  {
    category: "Postre/Dessert",
    name: "Ice Cream Sandwich",
    description: "Guava & queso",
    cookingMethod: "Frozen",
    allergens: ["dairy"],
  },
  {
    category: "Postre/Dessert",
    name: "Coconut Tamal",
    description: "Sesame & miso ice cream",
    cookingMethod: "Frozen",
    allergens: ["sesame", "soy"],
  },
];

const categories = [
  "Salsas/Dips",
  "Maiz/Corn",
  "Tacos",
  "Tostadas",
  "Para Compartir",
  "Postre/Dessert",
];

export default function SideHustlePage() {
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
              {sideHustleMenu
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
