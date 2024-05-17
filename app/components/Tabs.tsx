"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "IRD", path: "/" },
  { name: "Atrium", path: "/atrium" },
  { name: "SH", path: "/sidehustle" },
  { name: "Bar", path: "/bar" },
  { name: "Wines", path: "/wines" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <div className="flex p-4 space-x-4 bg-gray-200 shadow-inner">
      {tabs.map((tab) => (
        <Link key={tab.name} href={tab.path} legacyBehavior>
          <a
            className={`p-2 rounded-lg transition-colors duration-200 ${
              pathname === tab.path
                ? "text-white bg-primary"
                : "text-primary bg-white hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
