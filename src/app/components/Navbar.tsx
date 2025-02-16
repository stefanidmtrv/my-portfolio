import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full flex-row justify-center text-center text-gray-300 py-4">
      <Link href="/">Home</Link>
    </div>
  );
};

export default Navbar;
