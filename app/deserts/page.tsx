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
  return (
    <div className="p-4">
      {atriumMenu.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  );
}
