import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/"> Logo</Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
