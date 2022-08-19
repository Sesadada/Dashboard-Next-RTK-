import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-pink-400 h-16 w-full">
      <ul className="w-full mr-4 flex justify-end gap-3 items-center text-white font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>{" "}
        <li>
          <Link href="/profile">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
