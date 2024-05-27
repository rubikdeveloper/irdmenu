// app/hooks/useExpand.ts
import { useState } from "react";

const useExpand = () => {
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

  return {
    expandedItems,
    toggleExpand,
    expandedCategories,
    toggleCategoryExpand,
  };
};

export default useExpand;
