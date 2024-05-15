"use client"; // This makes the component a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "IRD", path: "/" }, // Adjust the path as needed
  { name: "Atrium", path: "/atrium" },
  { name: "SideHustle", path: "/sidehustle" },
  { name: "Bar", path: "/bar" },
  { name: "Wines", path: "/wines" },
  { name: "Deserts", path: "/deserts" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <div className="flex p-2 space-x-2 bg-gray-200">
      {tabs.map((tab) => (
        <Link key={tab.name} href={tab.path} legacyBehavior>
          <a
            className={`p-2 ${
              pathname === tab.path
                ? "text-white bg-gray-800"
                : "text-gray-800 bg-white"
            }`}
          >
            {tab.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
