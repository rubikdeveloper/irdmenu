"use client";

import { useState } from "react";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border p-4 mb-2">
      <div
        className="flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="font-semibold">{item.name}</h2>
        <button>{expanded ? "-" : "+"}</button>
      </div>
      {expanded && (
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
