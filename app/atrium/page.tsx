"use client";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

const atriumMenu = [
  // Starters/Snacks
  {
    category: "Starters/Snacks",
    name: "Oysters",
    description: "Dressed with hibiscus mignonette",
    cookingMethod: "Fresh",
    allergens: ["shellfish"],
  },
  {
    category: "Starters/Snacks",
    name: "Crudités",
    description: "Fresh vegetables with spring pea hummus",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Starters/Snacks",
    name: "Fried Maitakes",
    description: "With rosemary & truffle mayonnaise",
    cookingMethod: "Fried",
    allergens: ["none"],
  },
  {
    category: "Starters/Snacks",
    name: "Carrot Tartare",
    description: "With sprouts, egg yolk jam & sunflower seeds",
    cookingMethod: "Raw",
    allergens: ["egg"],
  },
  {
    category: "Starters/Snacks",
    name: "Tuna Tartare",
    description: "With strawberries & kumquat kosho",
    cookingMethod: "Raw",
    allergens: ["fish"],
  },
  {
    category: "Starters/Snacks",
    name: "Burrata",
    description: "With sunflower pesto & courgette",
    cookingMethod: "Fresh",
    allergens: ["dairy"],
  },
  {
    category: "Starters/Snacks",
    name: "Carpaccio",
    description: "Thinly-sliced beef with parmesan & wild garlic chimichurri",
    cookingMethod: "Raw",
    allergens: ["dairy"],
  },
  {
    category: "Starters/Snacks",
    name: "Cucumber & Radish Salad",
    description: "With almonds, tzatziki & golden raisins",
    cookingMethod: "Fresh",
    allergens: ["dairy", "nuts"],
  },
  {
    category: "Starters/Snacks",
    name: "Spinach Rigatoni",
    description: "Garlic, olive oil & Aleppo chili",
    cookingMethod: "Boiled",
    allergens: ["gluten"],
  },
  {
    category: "Starters/Snacks",
    name: "Tagliatelle",
    description: "Lobster, lemongrass & black pepper",
    cookingMethod: "Boiled",
    allergens: ["shellfish", "gluten"],
  },
  {
    category: "Starters/Snacks",
    name: "Caviar",
    description: "Imperial Ossetra, griddled potato bread",
    cookingMethod: "Fresh",
    allergens: ["fish", "gluten"],
  },
  // Mains
  {
    category: "Mains",
    name: "Asparagus",
    description: "Garlic & parmesan-glazed with quinoa & lemon",
    cookingMethod: "Grilled",
    allergens: ["dairy"],
  },
  {
    category: "Mains",
    name: "Sea Bass",
    description: "Seared with kombu dashi, artichoke & vichyssoise",
    cookingMethod: "Seared",
    allergens: ["fish"],
  },
  {
    category: "Mains",
    name: "Duck",
    description: "Breast, roasted with daikon & rhubarb five spice glaze",
    cookingMethod: "Roasted",
    allergens: ["none"],
  },
  {
    category: "Mains",
    name: "Lamb Chops",
    description: "Grilled with pecorino, peas & pistachio",
    cookingMethod: "Grilled",
    allergens: ["dairy", "nuts"],
  },
  {
    category: "Mains",
    name: "Beef",
    description: "200g sirloin, dry-aged with black mole & morels",
    cookingMethod: "Grilled",
    allergens: ["none"],
  },
  {
    category: "Mains",
    name: "Hereford Beef",
    description:
      "800g, bone-in rib-eye, roasted with Jersey Royals & heritage tomatoes (for two to share)",
    cookingMethod: "Roasted",
    allergens: ["none"],
  },
  {
    category: "Mains",
    name: "Creedy Carver Chicken",
    description:
      "With foie gras, brioche & black truffle, cavolo nero & Roscoff onion (for two to share)",
    cookingMethod: "Roasted",
    allergens: ["gluten", "dairy"],
  },
  // Desserts
  {
    category: "Desserts",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with a smooth chocolate ganache",
    cookingMethod: "Baked",
    allergens: ["gluten", "dairy"],
  },
  // Sides
  {
    category: "Sides",
    name: "Jersey Royals",
    description: "Brown butter & herbs",
    cookingMethod: "Boiled",
    allergens: ["dairy"],
  },
  {
    category: "Sides",
    name: "Peas",
    description: "Fresh mint",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Sides",
    name: "Chips",
    description: "Rosemary & lemon",
    cookingMethod: "Fried",
    allergens: ["none"],
  },
  {
    category: "Sides",
    name: "Heritage Tomatoes",
    description: "Shallot & Thai basil",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
];

const categories = ["Starters/Snacks", "Mains", "Desserts", "Sides"];

export default function AtriumPage() {
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
    <div className="p-4">
      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2
            className="text-2xl font-bold mb-4 cursor-pointer"
            onClick={() => toggleCategoryExpand(category)}
          >
            {category}
          </h2>
          {expandedCategories[category] && (
            <div>
              {atriumMenu
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
