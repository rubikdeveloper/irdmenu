"use client";

import React from "react";

type MenuItemType = {
  category: string;
  name: string;
  description: string;
  cookingMethod: string;
  allergens: string[];
};

type MenuItemProps = {
  item: MenuItemType;
  isExpanded: boolean;
  toggleExpand: (itemName: string) => void;
};

const MenuItem = ({ item, isExpanded, toggleExpand }: MenuItemProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer dark:border-gray-600 dark:bg-gray-800">
      <div
        className="flex justify-between items-center"
        onClick={() => toggleExpand(item.name)}
      >
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <button className="text-xl">{isExpanded ? "-" : "+"}</button>
      </div>
      {isExpanded && (
        <div className="mt-2 text-sm">
          <p>{item.description}</p>
          <p>Cooking method: {item.cookingMethod}</p>
          <p>Allergens: {item.allergens.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
