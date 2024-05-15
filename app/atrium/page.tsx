"use client";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

const atriumMenu = [
  {
    name: "Oysters",
    description: "Dressed with hibiscus mignonette",
    cookingMethod: "Fresh",
    allergens: ["shellfish"],
  },
  {
    name: "Crudités",
    description: "Fresh vegetables with spring pea hummus",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Fried Maitakes",
    description: "With rosemary & truffle mayonnaise",
    cookingMethod: "Fried",
    allergens: ["none"],
  },
  {
    name: "Carrot Tartare",
    description: "With sprouts, egg yolk jam & sunflower seeds",
    cookingMethod: "Raw",
    allergens: ["egg"],
  },
  {
    name: "Tuna Tartare",
    description: "With strawberries & kumquat kosho",
    cookingMethod: "Raw",
    allergens: ["fish"],
  },
  {
    name: "Burrata",
    description: "With sunflower pesto & courgette",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    name: "Carpaccio",
    description: "Thinly-sliced beef with parmesan & wild garlic chimichurri",
    cookingMethod: "Raw",
    allergens: ["dairy"],
  },
  {
    name: "Cucumber & Radish Salad",
    description: "With almonds, tzatziki & golden raisins",
    cookingMethod: "Fresh",
    allergens: ["dairy", "nuts"],
  },
  {
    name: "Spinach Rigatoni",
    description: "Garlic, olive oil & Aleppo chili",
    cookingMethod: "Boiled",
    allergens: ["gluten"],
  },
  {
    name: "Tagliatelle",
    description: "Lobster, lemongrass & black pepper",
    cookingMethod: "Boiled",
    allergens: ["shellfish", "gluten"],
  },
  {
    name: "Caviar",
    description: "Imperial Ossetra, griddled potato bread",
    cookingMethod: "Fresh",
    allergens: ["fish", "gluten"],
  },
  {
    name: "Asparagus",
    description: "Garlic & parmesan-glazed with quinoa & lemon",
    cookingMethod: "Grilled",
    allergens: ["dairy"],
  },
  {
    name: "Sea Bass",
    description: "Seared with kombu dashi, artichoke & vichyssoise",
    cookingMethod: "Seared",
    allergens: ["fish"],
  },
  {
    name: "Duck",
    description: "Breast, roasted with daikon & rhubarb five spice glaze",
    cookingMethod: "Roasted",
    allergens: ["none"],
  },
  {
    name: "Lamb Chops",
    description: "Grilled with pecorino, peas & pistachio",
    cookingMethod: "Grilled",
    allergens: ["dairy", "nuts"],
  },
  {
    name: "Beef",
    description: "200g sirloin, dry-aged with black mole & morels",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  {
    name: "Hereford Beef",
    description:
      "800g, bone-in rib-eye, roasted with Jersey Royals & heritage tomatoes (for two to share)",
    cookingMethod: "Roasted",
    allergens: ["none"],
  },
  {
    name: "Creedy Carver Chicken",
    description:
      "With foie gras, brioche & black truffle, cavolo nero & Roscoff onion (for two to share)",
    cookingMethod: "Roasted",
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Jersey Royals",
    description: "Brown butter & herbs",
    cookingMethod: "Boiled",
    allergens: ["dairy"],
  },
  {
    name: "Peas",
    description: "Fresh mint",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    name: "Chips",
    description: "Rosemary & lemon",
    cookingMethod: "Fried",
    allergens: ["none"],
  },
  {
    name: "Heritage Tomatoes",
    description: "Shallot & Thai basil",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
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
