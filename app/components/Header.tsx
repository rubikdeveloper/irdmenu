"use client";

import Image from "next/image";
import logo from "/public/logo.png"; // Import the logo

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md flex items-center">
      <Image
        src={logo}
        alt="NoMad Logo"
        width={32}
        height={32}
        className="mr-4"
      />
      <h1 className="text-2xl font-bold">In Room Dining Management</h1>
    </header>
  );
};

export default Header;
