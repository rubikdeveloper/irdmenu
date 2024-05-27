"use client";
import { useState } from "react";
import MenuItem from "../components/MenuItem";
import useExpand from "../hooks/useExpand";

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
    name: "STRAWBERRY",
    description: "HIBISCUS SORBET, PUFFED RICE & BERRY COMPOTE",
    cookingMethod: "Fresh",
    allergens: ["none"],
  },
  {
    category: "Desserts",
    name: "APPLE",
    description: "SORBET WITH SHISO, YUZU & WHITE CHOCOLATE MOUSSE",
    cookingMethod: "Fresh",
    allergens: ["milk"],
  },
  {
    category: "Desserts",
    name: "RASPBERRY & PISTACHIO",
    description: "BAKED PASTRY WITH RASPBERRY & PISTACHIO ICE CREAM",
    cookingMethod: "Baked",
    allergens: ["gluten", "milk", "nuts"],
  },
  {
    category: "Desserts",
    name: "CHOCOLATE",
    description: "SALTED CARAMEL, BANANA BRÛLÉE & BANANA CHOCOLATE ICE CREAM",
    cookingMethod: "Baked",
    allergens: ["gluten", "milk", "eggs"],
  },
  {
    category: "Desserts",
    name: "RHUBARB",
    description: "FROM YORKSHIRE, WITH GINGER & COCONUT CUSTARD",
    cookingMethod: "Fresh",
    allergens: ["coconut"],
  },
  {
    category: "Desserts",
    name: "CHEESE",
    description:
      "ELRICK LOG, ST. JUDE, MONTGOMERY CHEDDAR, DEVON BLUE WITH SEASONAL ACCOMPANIMENTS",
    cookingMethod: "Fresh",
    allergens: ["gluten", "milk", "eggs", "mustard", "nuts"],
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
  const { expandedItems, toggleExpand } = useExpand();
  const { expandedCategories, toggleCategoryExpand } = useExpand();

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
              {atriumMenu
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    isExpanded={!!expandedItems[item.name]}
                    toggleExpand={() => toggleExpand(item.name)}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
