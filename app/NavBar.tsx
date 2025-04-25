"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import c_Names from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
// In the classnaame object,
// we can pass the classnames we want to render as keys and the condition as values.

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  // We need to convert this component to a Client-Side Component,
  // Because the usePathname hook is not supported on the server. This is a Browser API.

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        {/* Container will keep every component in a container */}
        <Flex justify="between">
          {/* The available space is distributed among the children */}
          <Flex align="center" gap="3">
            {/* First Child of the Flex Component */}
            <Link href="/">
              <AiFillBug />
            </Link>

            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={c_Names({
                      "text-zinc-900": currentPath === link.href,
                      "text-zinc-500": currentPath !== link.href,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Flex>
            {/* Second Child of the Flex Component */}
            {status === "authenticated" && (
              // <Link href="/api/auth/signout">Sign Out</Link>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
