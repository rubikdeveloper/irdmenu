"use client";

import { useState } from "react";

type MenuItemType = {
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
    <div className="border p-4 mb-4 w-full md:w-1/2 lg:w-1/3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleExpand(item.name)}
      >
        <h2 className="font-semibold">{item.name}</h2>
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
