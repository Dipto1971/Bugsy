"use client";

import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import c_Names from "classnames";

// In the classnaame object,
// we can pass the classnames we want to render as keys and the condition as values.

const NavBar = () => {
  const currentPath = usePathname();
  // We need to convert this component to a Client-Side Component,
  // Because the usePathname hook is not supported on the server. This is a Browser API.

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        {" "}
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link
            key={link.href}
            className={c_Names({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
