"use client";
import useExpand from "./hooks/useExpand";
import MenuItem from "./components/MenuItem";
type MenuItemType = {
  category: string;
  name: string;
  description: string;
  cookingMethod: string;
  allergens: string[];
};

const newMenuItems: MenuItemType[] = [
  {
    category: "Snacks",
    name: "CRUDITÉS",
    description: "FRESH VEGETABLES WITH SPRING PEA EMULSION CITRUS', GARLIC",
    cookingMethod:
      "Chicory, Radishes, Cucumbers, Cauliflower and Carrots served with a Garden Pea Hummus.",
    allergens: ["Citrus", "Garlic", "Onion"],
  },
  {
    category: "Snacks",
    name: "FRIED MAITAKES",
    description: "WITH ROSEMARY & TRUFFLE MAYONNAISE",
    cookingMethod: "Fried",
    allergens: ["Gluten", "Eggs", "Garlic", "Mushroom", "Onion"],
  },
  {
    category: "Snacks",
    name: "CHIPS",
    description: "ROSEMARY & LEMON",
    cookingMethod: "Fried",
    allergens: ["Eggs", "Mustard", "Nightshade", "Citrus"],
  },
  {
    category: "Snacks",
    name: "LAMINATED BUTTER ROLL",
    description: "WITH SALTED BUTTER",
    cookingMethod: "Fresh",
    allergens: ["Cereals/Gluten", "Milk"],
  },
  {
    category: "Sweet",
    name: "COOKIES & CREAM",
    description: "VANILLA ICE CREAM & CHOCOLATE SHORTBREAD",
    cookingMethod: "Baked",
    allergens: ["Gluten", "Eggs", "Milk", "Soya"],
  },
  {
    category: "Room Service All Day",
    name: "BURRATA",
    description: "WITH SUNFLOWER PESTO & COURGETTE",
    cookingMethod:
      "Locally Sourced London Burrata, Served with Sunflower and Pumpkin Seed   Pesto and Courgette. Topped With Roasted Pepitas. ",
    allergens: [
      "Milk",
      "Sulphites",
      "Alcohol",
      "Citrus",
      "Garlic",
      "Nightshade",
    ],
  },
  {
    category: "Room Service All Day",
    name: "NOMAD CHICKEN BURGER",
    description: "GRUYERE, SHALLOT & BLACK TRUFFLE",
    cookingMethod:
      "Chicken burger with gruyere cheese, pickled shallots, fried chicken skin and   truffle mayonnaise.   Burger meat - ground chicken thigh, black truffle pate, truffle oil and brioche   breadcrumbs.",
    allergens: [
      "Gluten",
      "Eggs",
      "Sesame Seeds",
      "Milk",
      "Soya",
      "Sulphites",
      "Citrus",
      "Mushrooms",
      "Onion",
    ],
  },
  {
    category: "Room Service All Day",
    name: "CUCUMBER & RADISH SALAD",
    description: "WITH ALMONDS, TZATZIKI & GOLDEN RAISINS",
    cookingMethod:
      "Cucumber Wedges served with Cucamelon, Radish, Tzatziki, shredded dill & Mint, and Roasted Almonds ",
    allergens: ["Milk", "Nuts", "Citrus", "Garlic", "Onion"],
  },
  {
    category: "Room Service All Day",
    name: "DRY-AGED BEEF BURGER",
    description: "CHEDDAR, RED ONION & SPECIAL SAUCE",
    cookingMethod: "Grilled",
    allergens: [
      "Cereals/Gluten",
      "Eggs",
      "Milk",
      "Mustard",
      "Sulphites",
      "Citrus",
      "Onion",
    ],
  },
  {
    category: "Room Service All Day",
    name: "CHICKEN SOUP",
    description: "WITH VERMICELLI, TOMATO & KALE",
    cookingMethod: "Boiled",
    allergens: ["Celery", "Garlic", "Nightshades", "Onion"],
  },
  {
    category: "Room Service All Day",
    name: "TAGLIATELLE",
    description: "LOBSTER, LEMONGRASS & BLACK PEPPER",
    cookingMethod: "Boiled",
    allergens: [
      "Gluten",
      "Crustaceans",
      "Eggs",
      "Fish",
      "Milk",
      "Soya",
      "Sulphites",
      "Alcohol",
      "Citrus",
      "Garlic",
      "Nightshade",
      "Onion",
    ],
  },
  {
    category: "Room Service All Day",
    name: "NOMAD FRIED CHICKEN",
    description: "WITH ALEPPO CHILLI & LIME",
    cookingMethod:
      "Fried chicken and dusted with a spiced salt mix. Served Chipotle yogurt.  Fried chicken- Chicken thighs trimmed to size, marinated in buttermilk, milk.   jalapeno, tabasco, onions & salt   Seasoned flour - Ap flour, granulated garlic, onion powder, dried thyme & sage,   smoked paprika peper & salt.    Chipotle yogurt - Chipotle & yogurt seasoned with some lime juice & topped  with Aleppo pepper  ",
    allergens: [
      "Cereals/Gluten",
      "Eggs",
      "Sulphites",
      "Garlic",
      "Nightshade",
      "Onion",
    ],
  },
  {
    category: "Room Service All Day",
    name: "CHEESE",
    description:
      "ELRICK LOG, ST JUDE, MONTGOMERY CHEDDAR & DEVON BLUE WITH SEASONAL ACCOMPANIMENTS",
    cookingMethod: "Fresh",
    allergens: ["Cereals/Gluten", "Eggs", "Milk", "Mustard", "Nuts"],
  },
  {
    category: "Room Service All Day",
    name: "NOMAD HOTDOG",
    description: "BACON-WRAPPED WITH BLACK TRUFFLE & CELERY",
    cookingMethod: "Grilled",
    allergens: [
      "Celery",
      "Gluten",
      "Eggs",
      "Milk",
      "Mustard",
      "Sulphites",
      "Soya",
      "Mushroom",
      "Pork",
    ],
  },
];

const categories = ["Snacks", "Sweet", "Room Service All Day"];

export default function Home() {
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
              {newMenuItems
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
