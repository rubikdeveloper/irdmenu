import MenuItem from "../components/MenuItem";

const sideHustleMenu = [
  {
    name: "Burger",
    description: "Classic beef burger",
    cookingMethod: "Grilled",
    allergens: ["gluten", "dairy"],
  },
  // Add more items as necessary
];

export default function SideHustlePage() {
  return (
    <div className="p-4">
      {sideHustleMenu.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  );
}
