"use client";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

const atriumMenu = [
  {
    name: "Steak",
    description: "Juicy grilled steak",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  // Add more items as necessary
];

export default function AtriumPage() {
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
      {atriumMenu.map((item) => (
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
