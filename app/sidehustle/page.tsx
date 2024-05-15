"use client";

import { useState } from "react";
import MenuItem from "../components/MenuItem";

const sideHustleMenu = [
  {
    name: "Guacamole",
    description: "Fresh herbs & ajo perejil",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Sikil Pak",
    description: "Tomato, guajillo & hazelnut",
    cookingMethod: "Fresh",
    allergens: ["nuts"],
  },
  {
    name: "Green Pipian",
    description: "Pistachio & jalapeño",
    cookingMethod: "Fresh",
    allergens: ["nuts"],
  },
  {
    name: "Caviar y Arepa Paisa",
    description: "Imperial osciatra, with wild garlic crema & finger lime",
    cookingMethod: "Fresh",
    allergens: ["fish", "dairy"],
  },
  {
    name: "Smoked Chorizo Empanada",
    description: "Sweet potato with guajillo & pear relish",
    cookingMethod: "Baked",
    allergens: ["none"],
  },
  {
    name: "Tetela",
    description: "Smoked aubergine, cactus & sunflower seeds",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Shiitake Tacos",
    description: "With tare, shoyu & daikon",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Baja-Style Fish Tacos",
    description: "With chile meco coleslaw",
    cookingMethod: "Fresh",
    allergens: ["fish"],
  },
  {
    name: "Pork Carnitas Tacos",
    description: "With avocado salsa verde & xnipec",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Beef Tostadas",
    description: "With roasted pepper salsa & green onion",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Tuna Crudo Tostadas",
    description: "With coriander mayo & ancho chile",
    cookingMethod: "Fresh",
    allergens: ["fish", "dairy"],
  },
  {
    name: "Secreto Ibérico",
    description: "With chintestle & roast pepper sauce",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  {
    name: "Short Rib",
    description: "With salsa borracha & mango cabbage salad",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  {
    name: "Ice Cream Sandwich",
    description: "Guava & queso",
    cookingMethod: "Frozen",
    allergens: ["dairy"],
  },
  {
    name: "Coconut Tamal",
    description: "Sesame & miso ice cream",
    cookingMethod: "Frozen",
    allergens: ["sesame", "soy"],
  },
];

export default function SideHustlePage() {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <div className="p-4">
      {sideHustleMenu.map((item) => (
        <MenuItem
          key={item.name}
          item={item}
          isExpanded={!!expandedItems[item.name]}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
}
